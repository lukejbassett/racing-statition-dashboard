import { useEffect, useState } from "react";
import type { DriverStanding } from "../types";
import { getDriverStandings } from "../api/apiEndpoints";

export function DriverStandingsTable() {
  // TEMP SEASON INPUT
  const season = `2025`;
  const [loading, setLoading] = useState(true);
  const [driverStandingsTable, setDriverStandingsTable] = useState<
    DriverStanding[] | null
  >(null);

  useEffect(() => {
    async function loadStandings() {
      setLoading(true);
      try {
        const driverStandings = await getDriverStandings(season);
        setDriverStandingsTable(driverStandings);
      } catch {
        // HANDLE ERRORS LATER
        console.log();
      } finally {
        setLoading(false);
      }
    }
    loadStandings();
  }, [season]);

  if (loading) return <p>Loading driver standings...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Driver</th>
          <th>Constructor</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        {driverStandingsTable?.map((standings) => (
          <tr key={standings.position}>
            <td>
              {standings.Driver.givenName} {standings.Driver.familyName}
            </td>
            <td>{standings.Constructors[0].name}</td>
            <td>{standings.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
