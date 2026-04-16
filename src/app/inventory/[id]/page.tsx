import { Card } from "antd";
import { getInventoryItem } from "../../../lib/generateInventory";
import { getInventoryData } from "@/src/lib/inventoryStore";

type Props = {
  params: {
    id: string;
  };
};

export default function InventoryDetailPage({ params }: Props) {
  const data = getInventoryData();
  const item = data.find((i) => i.id === Number(params.id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div role="main" style={{ padding: 20 }}>
      <Card title="Item Details">
        <p>
          <strong>ID:</strong> {item.id}
        </p>
        <p>
          <strong>Name:</strong> {item.name}
        </p>
        <p>
          <strong>Type:</strong> {item.type}
        </p>
        <p>
          <strong>Status:</strong> {item.status}
        </p>
        <p>
          <strong>Last Updated:</strong>{" "}
          {new Date(item.updatedAt).toLocaleString()}
        </p>
      </Card>
    </div>
  );
}
