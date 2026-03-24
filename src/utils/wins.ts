import { getDriverStandings } from "../api/endpoints";
import type { DriverWins } from "../types/utils";

export async function calculateDriverWins(season: string): Promise<DriverWins[]> {
  const driverStandings = await getDriverStandings(season);

  return driverStandings
    .map((standing) => ({
      driverId: standing.Driver.driverId,
      name: `${standing.Driver.givenName} ${standing.Driver.familyName}`,
      wins: Number(standing.wins),
    }))
    .sort((a, b) => b.wins - a.wins)
    .slice(0, 4);
}
