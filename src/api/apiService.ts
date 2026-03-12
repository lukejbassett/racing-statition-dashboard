import { fetchApi } from "./fetchApi";
import { allSeasonData } from "./seasonHelper";
import type {
  CircuitResponse,
  ConstructorResponse,
  DriverResponse,
  Race,
  RaceResponse,
  ResultResponse,
  SeasonData,
} from "./types";

export async function getSeasonData(season: string): Promise<SeasonData> {
  const [drivers, constructors, circuits, races, results] = await Promise.all([
    fetchApi<DriverResponse>(`/${season}/drivers.json`),
    fetchApi<ConstructorResponse>(`/${season}/constructors.json`),
    fetchApi<CircuitResponse>(`/${season}/circuits.json`),
    fetchApi<RaceResponse>(`/${season}/races.json`),
    getResults(season),
  ]);

  return allSeasonData(drivers, constructors, circuits, races, results);
}

export async function getResults(season: string) {
  const limit = 100;
  let offset = 0;
  const allRaces: Race[] = [];

  // this helps get SOME of the race data
  // only gets the first 5 results per driver per race, not ALL of it?
  // this should get all of it but the api limits the amount idk why
  while (true) {
    const response = await fetchApi<ResultResponse>(
      `/${season}/results.json?limit=${limit}&offset=${offset}`,
    );

    allRaces.push(...response.MRData.RaceTable.Races);

    if (response.MRData.RaceTable.Races.length < limit) break;

    offset += limit;
    await new Promise((res) => setTimeout(res, 1000));
  }

  return {
    MRData: {
      RaceTable: {
        Races: allRaces,
      },
    },
  };
}
