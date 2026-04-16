import { useMemo } from "react";
import { generateInventory } from "../lib/generateInventory";

export function useInventory(count: number = 50000) {
  const data = useMemo(() => generateInventory(count), [count]);

  return {
    data,
  };
}
