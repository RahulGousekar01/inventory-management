"use client";

import { Dropdown, Input, Typography, Pagination, Tag } from "antd";
import { useState, useMemo, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  createColumnHelper,
} from "@tanstack/react-table";
import { InventoryItem } from "../../../types/inventory";
import { filterInventory } from "../../../lib/inventoryUtils";
import { useRouter } from "next/navigation";
import { MoreOutlined } from "@ant-design/icons";

const columnHelper = createColumnHelper<InventoryItem>();

export default function InventoryTable({ data }: { data: InventoryItem[] }) {
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = 50;
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearch(searchInput);
      setPage(1); // reset page on search
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput]);

  const filteredData = useMemo(() => {
    return filterInventory(data, search);
  }, [data, search]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page]);

  const columns = useMemo(
    () => [
      columnHelper.accessor("id", { header: "ID" }),

      columnHelper.accessor("name", { header: "Name" }),

      columnHelper.accessor("type", {
        header: "Type",
        cell: (info) => {
          const type = info.getValue();

          const colorMap: Record<string, string> = {
            "Type A": "blue",
            "Type B": "purple",
            "Type C": "orange",
          };

          return <Tag color={colorMap[type] || "default"}>{type}</Tag>;
        },
      }),

      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => {
          const status = info.getValue();

          return (
            <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
          );
        },
      }),

      columnHelper.accessor("updatedAt", {
        header: "Last Updated",
        cell: (info) => new Date(info.getValue()).toISOString().split("T")[0],
      }),

      columnHelper.display({
        id: "actions",
        header: "Actions",
        cell: (info) => {
          const item = info.row.original;

          const items = [
            {
              key: "view",
              label: "View",
              onClick: () => router.push(`/inventory/${item.id}`),
            },
            {
              key: "edit",
              label: "Edit",
            },
            {
              key: "delete",
              label: "Delete",
            },
          ];

          return (
            <Dropdown menu={{ items }} trigger={["click"]}>
              <MoreOutlined style={{ cursor: "pointer" }} />
            </Dropdown>
          );
        },
      }),
    ],
    [router],
  );

  const table = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Typography.Title level={4}>
        Total Records: {filteredData.length}
      </Typography.Title>

      <Input
        placeholder="Search..."
        value={searchInput}
        autoComplete="off"
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  style={{
                    borderBottom: "1px solid #ddd",
                    padding: 8,
                    textAlign: "left",
                  }}
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  style={{
                    padding: 8,
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        current={page}
        pageSize={pageSize}
        total={filteredData.length}
        onChange={(p) => setPage(p)}
        style={{ marginTop: 16 }}
      />
    </div>
  );
}
