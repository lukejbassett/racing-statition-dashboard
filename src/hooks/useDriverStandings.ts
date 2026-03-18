import { useQuery } from "@tanstack/react-query";
import { getDriverStandings } from "../api/endpoints";

export function useDriverStandings(season: string) {
  return useQuery({
    // shares data between components
    // caches data per season (no overwriting of new seasons)
    // aka deduplication
    queryKey: ["driverStandings", season],
    queryFn: () => getDriverStandings(season),
    // stops request if undefined or empty
    enabled: !!season,
    // controls data refresh
    staleTime: Infinity,
    // stops refetch on conditions
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
