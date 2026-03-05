import type {
  ApiResponse,
  Circuit,
  Constructor,
  ConstructorStanding,
  Driver,
  DriverStanding,
  DriverPoles,
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
  const response = await fetchApi<ApiResponse>(`${season}/constructors.json`);
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

export async function getConstructorStandings(
  season: string,
): Promise<ConstructorStanding[]> {
  const response = await fetchApi<ApiResponse>(
    `${season}/constructorstandings.json`,
  );
  const constructorStandingsResponse =
    response.MRData.StandingsTable.StandingsLists?.[0]?.ConstructorStandings ??
    [];
  return constructorStandingsResponse;
}

export async function getCircuits(season: string): Promise<Circuit[]> {
  const response = await fetchApi<ApiResponse>(`${season}/circuits.json`);
  const circuitDataResponse = response.MRData.CircuitTable.Circuits ?? [];
  return circuitDataResponse;
}

export async function getDriverPoles(season: string): Promise<DriverPoles[]> {
  const response = await fetchApi<ApiResponse>(
    // api throttle limit to 100
    `${season}/qualifying/1.json?limit=100`,
  );
  const poleMap = new Map<string, DriverPoles>();
  const { Races } = response.MRData.RaceTable;

  for (const race of Races) {
    const result = race.QualifyingResults?.[0];
    if (!result) continue;

    // adds types into result
    const driverId = result.Driver.driverId;
    const name = `${result.Driver.givenName} ${result.Driver.familyName}`;

    const driverPoles = poleMap.get(driverId);

    // calculate poles
    if (driverPoles) {
      driverPoles.poles += 1;
    } else {
      poleMap.set(driverId, {
        driverId,
        name,
        poles: 1,
      });
    }
  }
  return Array.from(poleMap.values())
    .sort((a, b) => b.poles - a.poles)
    .slice(0, 4);
}
