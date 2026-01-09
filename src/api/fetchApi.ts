import type {
  ConstructorStandingResponse,
  DriverStandingResponse,
  QualifyingResponse,
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
// forced max limit is 100 results per page
export function getQualifyingResults(season: number, limit = 100, offset = 0) {
  return fetchApi<QualifyingResponse>(
    `${season}/qualifying.json?limit=${limit}&offset=${offset}`
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
