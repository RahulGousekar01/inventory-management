"use client";

import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";
import { InventoryItem } from "../../../types/inventory";
import Row from "../inventory/Row";

type Props = {
  data: InventoryItem[];
};

export default function VirtualizedList({ data }: Props) {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 50,
  });

  return (
    <div
      ref={parentRef}
      role="table"
      aria-label="Inventory Table"
      style={{ height: "500px", overflow: "auto", border: "1px solid #ddd" }}
    >
      <div
        style={{
          height: `${rowVirtualizer.getTotalSize()}px`,
          position: "relative",
        }}
      >
        {rowVirtualizer.getVirtualItems().map((virtualRow) => {
          const item = data[virtualRow.index];

          return <Row key={item.id} item={item} start={virtualRow.start} />;
        })}
      </div>
    </div>
  );
}
