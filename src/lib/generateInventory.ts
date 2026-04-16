import { InventoryItem } from "../types/inventory";
const TYPES = ["Type A", "Type B", "Type C"];
const STATUS = ["Active", "Inactive"] as const;

export function generateInventory(count: number): InventoryItem[] {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Item ${index + 1}`,
    type: TYPES[index % TYPES.length],
    status: STATUS[index % STATUS.length],
    updatedAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000),
    ).toISOString(),
  }));
}

export function getInventoryItem(id: number) {
  const data = generateInventory(50000);
  return data.find((item) => item.id === id);
}
