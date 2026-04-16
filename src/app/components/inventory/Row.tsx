"use client";

import { memo } from "react";
import { InventoryItem } from "../../../types/inventory";
import Link from "next/link";

type Props = {
  item: InventoryItem;
  start: number;
};

function Row({ item, start }: Props) {
  return (
    <Link href={`/inventory/${item.id}`}>
      <div
        role="row"
        tabIndex={0}
        style={{
          position: "absolute",
          top: 0,
          transform: `translateY(${start}px)`,
          height: "50px",
          display: "flex",
          gap: "20px",
          padding: "0 10px",
          borderBottom: "1px solid #eee",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <span>{item.id}</span>
        <span>{item.name}</span>
        <span>{item.type}</span>
        <span>{item.status}</span>
        <span>{new Date(item.updatedAt).toLocaleDateString()}</span>
      </div>
    </Link>
  );
}

export default memo(Row);
