import { fetchApi } from "./fetchApi";
import { allSeasonData } from "./seasonHelper";
import type { ConstructorResponse, DriverResponse, SeasonData } from "./types";

export async function getSeasonData(season: string): Promise<SeasonData> {
  const [drivers, constructors] = await Promise.all([
    fetchApi<DriverResponse>(`/${season}/drivers.json`),
    fetchApi<ConstructorResponse>(`/${season}/constructors.json`),
  ]);

  return allSeasonData(drivers, constructors);
}
