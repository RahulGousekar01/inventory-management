import { InventoryItem } from "../types/inventory";

export function filterInventory(
  data: InventoryItem[],
  search: string,
): InventoryItem[] {
  if (!search) return data;

  return data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );
}
