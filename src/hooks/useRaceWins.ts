import { useEffect, useState } from "react";
import { type DriverStanding } from "../types";
import { getDriverStandings } from "../api/fetchApi";

export default function useRaceWins(season: number) {
  const [raceWins, setRaceWins] = useState<DriverStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getRaceWins = async () => {
      getDriverStandings(season)
        .then((data) => {
          const rawDriverStandings =
            data.MRData.StandingsTable?.StandingsLists?.[0].DriverStandings ??
            [];
          const top4Winners = [...rawDriverStandings]
            .sort((a, b) => Number(b.wins) - Number(a.wins))
            .slice(0, 4);
          setRaceWins(top4Winners);
        })
        .catch((err) => {
          setError(err.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    getRaceWins();
  }, [season]);

  return { raceWins, loading, error };
}
