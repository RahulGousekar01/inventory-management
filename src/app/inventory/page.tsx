import { Card } from "antd";
import InventoryTable from "../components/inventory/InventoryTable";
import { getInventoryData } from "@/src/lib/inventoryStore";

export default function InventoryPage() {
  const data = getInventoryData();

  return (
    <div style={{ padding: 20 }}>
      <Card title="Inventory Dashboard">
        <InventoryTable data={data} />
      </Card>
    </div>
  );
}
