import { useEffect, useState } from "react";
import type { DriverWins } from "../types/utils";
import { calculateDriverWins } from "../utils/wins";

type DriverWinsProps = {
  season: string;
};

export function WinsTable({ season }: DriverWinsProps) {
  const [driverWins, setDriverWins] = useState<DriverWins[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadWins() {
      setLoading(true);
      const wins = await calculateDriverWins(season);
      setDriverWins(wins);
      setLoading(false);
    }
    loadWins();
  }, [season]);

  if (loading) return <p>Loading driver wins...</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Driver</th>
          <th>Wins</th>
        </tr>
      </thead>
      <tbody>
        {driverWins?.map((driver) => (
          <tr key={driver.driverId}>
            <td>{driver.name}</td>
            <td>{driver.wins}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
