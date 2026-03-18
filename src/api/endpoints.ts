import type { driverStandingsResponse, DriverStandings } from "../types";
import { fetchApi } from "./fetchApi";

export async function getDriverStandings(
  season: string,
  // uses DriverStandings[] interface
): Promise<DriverStandings[]> {
  // fetches api with specific season & endpoint
  const response = await fetchApi<driverStandingsResponse>(
    `${season}/driverstandings.json`,
  );
  // converts response into data
  // mapped out by driverStandingsResponse interface
  const driverStandingsData =
    response.MRData.StandingsTable.StandingsLists[0].DriverStandings ?? [];
  return driverStandingsData;
}
