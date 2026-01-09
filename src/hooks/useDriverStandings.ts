import { useEffect, useState } from "react";
import { type DriverStanding } from "../types";
import { getDriverStandings } from "../api/fetchApi";

export default function useDriverStandings(season: number) {
  const [drivers, setDrivers] = useState<DriverStanding[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getDriverStandings(season)
      .then((data) => {
        const rawDriverStandings =
          data.MRData.StandingsTable?.StandingsLists?.[0].DriverStandings ?? [];
        setDrivers(rawDriverStandings);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [season]);

  return { drivers, loading, error };
}
