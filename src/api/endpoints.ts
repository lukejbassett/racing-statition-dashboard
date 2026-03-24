import {
  type driverStandingsResponse,
  type DriverStandings,
  type ConstructorStandings,
  type constructorStandingsResponse,
  type Circuit,
  type CircuitResponse,
  type Race,
  type RaceResponse,
  type Results,
  type ResultsResponse,
} from "../types";
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

export async function getConstructorStandings(
  season: string,
): Promise<ConstructorStandings[]> {
  const response = await fetchApi<constructorStandingsResponse>(
    `${season}/constructorstandings.json`,
  );
  const constructorStandingsData =
    response.MRData.StandingsTable.StandingsLists[0].ConstructorStandings ?? [];
  return constructorStandingsData;
}

export async function getCircuits(season: string): Promise<Circuit[]> {
  const response = await fetchApi<CircuitResponse>(`${season}/circuits.json`);
  const circuitData = response.MRData.CircuitTable.Circuits ?? [];
  return circuitData;
}

export async function getRaces(season: string): Promise<Race[]> {
  const response = await fetchApi<RaceResponse>(`${season}/races`);
  const raceData = response.MRData.RaceTable.Races ?? [];
  return raceData;
}

export async function getResults(
  season: string,
  round: string,
): Promise<Results[]> {
  const response = await fetchApi<ResultsResponse>(
    `${season}/${round}/results.json`,
  );
  const resultData = response.MRData.RaceTable.Races[0].Results ?? [];
  return resultData;
}
