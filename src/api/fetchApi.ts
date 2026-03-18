// creates async fetch in a generic promise
export async function fetchApi<T>(endpoint: string): Promise<T> {
  const url = "https://api.jolpi.ca/ergast/f1/";
  // fetches api url with specific endpoint
  const response = await fetch(`${url}/${endpoint}`);
  // throws error
  if (!response.ok) {
    throw new Error(`API Response: ${response.status}`);
  }
  // returns data as a json in generic promise
  const data: T = await response.json();
  return data;
}
