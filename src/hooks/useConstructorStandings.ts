import { useQuery } from "@tanstack/react-query";
import { getConstructorStandings } from "../api/endpoints";

// refer to useDriverStandings for useQuery definitions
export function useConstructorStandings(season: string) {
  return useQuery({
    queryKey: ["constructorStandings", season],
    queryFn: () => getConstructorStandings(season),
    enabled: !!season,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
  });
}
