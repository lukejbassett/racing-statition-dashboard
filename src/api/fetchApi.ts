import type {
  ConstructorStandingResponse,
  DriverStandingResponse,
} from "../types";

const baseUrl = import.meta.env.VITE_API_BASE;

export function getDriverStandings(season: number) {
  return fetchApi<DriverStandingResponse>(`${season}/driverstandings.json`);
}
export function getConstructorStandings(season: number) {
  return fetchApi<ConstructorStandingResponse>(
    `${season}/constructorstandings.json`
  );
}
export async function fetchApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${baseUrl}${endpoint}`);
  if (!res.ok) {
    throw new Error(
      `Can't get api endpoint: ${res.status} ${res.statusText} (${res.url})`
    );
  }
  const data = (await res.json()) as T;
  return data;
}
