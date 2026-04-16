import { Skeleton, Card } from "antd";

export default function Loading() {
  return (
    <div style={{ padding: 20 }}>
      <Card title="Inventory Dashboard">
        <Skeleton active paragraph={{ rows: 8 }} />
      </Card>
    </div>
  );
}
