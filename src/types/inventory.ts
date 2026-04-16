export type InventoryItem = {
  id: number;
  name: string;
  type: string;
  status: "Active" | "Inactive";
  updatedAt: string;
};
