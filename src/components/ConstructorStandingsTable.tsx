import { useEffect, useState } from "react";
import type { ConstructorStanding } from "../types";
import { getConstructorStandings } from "../api/apiEndpoints";

export function ConstructorStandingsTable() {
  // TEMP SEASON INPUT
  const season = `2025`;
  const [loading, setLoading] = useState(true);
  const [constructorStandingsTable, setConstructorStandingsTable] = useState<
    ConstructorStanding[] | null
  >(null);

  useEffect(() => {
    async function loadStandings() {
      setLoading(true);
      try {
        const constructorStandings = await getConstructorStandings(season);
        setConstructorStandingsTable(constructorStandings);
      } catch {
        // HANDLE ERRORS LATER
        console.log();
      } finally {
        setLoading(false);
      }
    }
    loadStandings();
  }, [season]);

  if (loading) return <p>Loading constructor standings...</p>;

  return (
    <>
      <div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Constructor</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {constructorStandingsTable?.map((standings) => (
                <tr key={standings.position}>
                  <td>{standings.Constructor.name}</td>
                  <td>{standings.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
