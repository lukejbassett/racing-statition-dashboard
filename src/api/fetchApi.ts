const API_URL = "https://api.jolpi.ca/ergast/f1";

export async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json() as Promise<T>;
}

