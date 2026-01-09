import { useEffect, useState } from "react";
import { type ConstructorStanding } from "../types";
import { getConstructorStandings } from "../api/fetchApi";

export default function useConstructorStandings(season: number) {
  const [constructors, setConstructors] = useState<ConstructorStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getConstructorStandings(season)
      .then((data) => {
        const rawConstructorStandings =
          data.MRData.StandingsTable?.StandingsLists?.[0].ConstructorStandings;
        setConstructors(rawConstructorStandings);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [season]);

  return { constructors, loading, error };
}
