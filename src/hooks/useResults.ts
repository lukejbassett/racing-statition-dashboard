import { useQuery } from "@tanstack/react-query";
import { getResults } from "../api/endpoints";

// refer to useDriverStandings for useQuery definitions
export function useResults(season: string, round: string) {
  return useQuery({
    queryKey: ["results", season],
    queryFn: () => getResults(season, round),
    enabled: !!season,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
