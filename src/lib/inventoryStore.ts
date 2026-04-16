import { generateInventory } from "./generateInventory";
import { InventoryItem } from "../types/inventory";

let inventoryData: InventoryItem[] | null = null;

export function getInventoryData() {
  if (!inventoryData) {
    inventoryData = generateInventory(50000);
  }
  return inventoryData;
}
