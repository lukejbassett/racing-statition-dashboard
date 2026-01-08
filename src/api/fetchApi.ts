import type {
  ConstructorStandingResponse,
  DriverStandingResponse,
} from "../types";

const baseUrl = import.meta.env.BASE_URL;

export const endpoint = {
  getDriverStandings(season: string) {
    return fetchApi<DriverStandingResponse>(`${season}/driverstandings.json`);
  },
  getConstructorStandings(season: string) {
    return fetchApi<ConstructorStandingResponse>(
      `${season}/constructorstandings.json`
    );
  },
};

export async function fetchApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${baseUrl}${endpoint}`);
  if (!res.ok) {
    throw new Error(
      `Can't get API endpoint: ${res.status} ${res.statusText} (${res.url})`
    );
  }
  const data = (await res.json()) as T;
  return data;
}
