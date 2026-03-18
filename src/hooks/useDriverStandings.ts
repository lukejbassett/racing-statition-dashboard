import { useQuery } from "@tanstack/react-query";
import { getDriverStandings } from "../api/endpoints";

export function useDriverStandings(season: string) {
  return useQuery({
    // caches data per season (no overwriting of new seasons)
    queryKey: ["driverStandings", season],
    queryFn: () => getDriverStandings(season),
    // stops request if undefined or empty
    enabled: !!season,
    // controls data refresh
    staleTime: Infinity,
  });
}
