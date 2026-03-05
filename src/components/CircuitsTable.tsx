import { useEffect, useState } from "react";
import type { Circuit } from "../types";
import { getCircuits } from "../api/apiEndpoints";

export function CircuitsTable() {
  const [circuitsTable, setCircuitsTable] = useState<Circuit[] | null>(null);
  const [loading, setLoading] = useState(true);
  const season = `2025`;

  useEffect(() => {
    async function loadCircuits() {
      setLoading(true);
      try {
        const circuitsTable = await getCircuits(season);
        setCircuitsTable(circuitsTable);
      } catch {
        // HANDLE ERRORS LATER
        console.log();
      } finally {
        setLoading(false);
      }
    }
    loadCircuits();
  }, [season]);

  if (loading) return <p>Loading circuit data...</p>;

  return (
    <ul>
      {circuitsTable?.map((circuit) => (
        <li key={circuit.circuitName}>
          <p>{circuit.circuitName}</p>
          <p>{circuit.Location.country}</p>
        </li>
      ))}
    </ul>
  );
}
