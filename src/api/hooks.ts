import { useQuery } from "@tanstack/react-query";
import { getSeasonData } from "./apiService";

export function useSeasonData(season: string) {
  return useQuery({
    queryKey: ["season", season],
    queryFn: () => getSeasonData(season),
    staleTime: Infinity,
  });
}
