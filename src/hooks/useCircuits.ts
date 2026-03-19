import { useQuery } from "@tanstack/react-query";
import { getCircuits } from "../api/endpoints";

// refer to useDriverStandings for useQuery definitions
export function useCircuits(season: string) {
  return useQuery({
    queryKey: ["circuits", season],
    queryFn: () => getCircuits(season),
    enabled: !!season,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
