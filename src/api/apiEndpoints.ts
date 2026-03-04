import type {
  ApiResponse,
  Constructor,
  Driver,
  DriverStanding,
} from "../types";
import { fetchApi } from "./fetchApi";

export async function getDriverData(season: string): Promise<Driver[]> {
  const response = await fetchApi<ApiResponse>(`${season}/drivers.json`);
  const driverDataResponse = response.MRData.DriverTable.Drivers;
  return driverDataResponse;
}
export async function getConstructorData(
  season: string,
): Promise<Constructor[]> {
  const response = await fetchApi<ApiResponse>(`${season}/drivers.json`);
  const constructorDataResponse = response.MRData.ConstructorTable.Constructors;
  return constructorDataResponse;
}
export async function getDriverStandings(
  season: string,
): Promise<DriverStanding[]> {
  const response = await fetchApi<ApiResponse>(
    `${season}/driverstandings.json`,
  );
  const driverStandingsResponse =
    response.MRData.StandingsTable.StandingsLists?.[0]?.DriverStandings ?? [];
  return driverStandingsResponse;
}
