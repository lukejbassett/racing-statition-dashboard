import { useEffect, useState } from "react";
import type { DriverPoles } from "../types";
import { getDriverPoles } from "../api/apiEndpoints";

export function DriverPolesTable() {
  const season = "2025";
  const [driverPoles, setDriverPoles] = useState<DriverPoles[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadPoles() {
      setLoading(true);
      try {
        const poles = await getDriverPoles(season);
        setDriverPoles(poles);
      } catch {
        console.log();
      } finally {
        setLoading(false);
      }
    }
    loadPoles();
  }, [season]);

  if (loading) return <p>Loading pole position data...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Driver</th>
          <th>Poles</th>
        </tr>
      </thead>
      <tbody>
        {driverPoles?.map((driver) => (
          <tr key={driver.driverId}>
            <td>{driver.name}</td>
            <td>{driver.poles}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
