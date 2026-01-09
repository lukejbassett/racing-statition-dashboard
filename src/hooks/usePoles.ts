import { useEffect, useState } from "react";
import { getQualifyingResults } from "../api/fetchApi";

interface DriverPoles {
  driverId: string;
  driverName: string;
  poles: number;
}

export default function usePoles(season: number) {
  const [poles, setPoles] = useState<DriverPoles[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // api limits 100 results per page
    const limit = 100;
    let offset = 0;
    let total = Infinity;
    const countPoles: Record<string, DriverPoles> = {};

    // dont 100% understand this function but it works
    // https://github.com/jolpica/jolpica-f1/blob/main/docs/README.md#query-parameters
    function getQualifyingPages() {
      getQualifyingResults(season, limit, offset)
        .then((data) => {
          const mrData = data.MRData;
          total = Number(mrData.total);

          const races = mrData.RaceTable.Races ?? [];
          races.forEach((race) => {
            const poleResult = race.QualifyingResults.find(
              (q) => q.position === "1"
            );
            if (!poleResult) return;

            const driverId = poleResult?.Driver.driverId;

            if (!countPoles[driverId]) {
              countPoles[driverId] = {
                driverId,
                driverName: `${poleResult?.Driver.givenName} ${poleResult?.Driver.familyName}`,
                poles: 1,
              };
            } else {
              countPoles[driverId].poles += 1;
            }
          });

          offset += limit;
          if (offset < total) {
            getQualifyingPages();
          } else {
            const top4Poles = Object.values(countPoles)
              .sort((a, b) => b.poles - a.poles)
              .slice(0, 4);
            setPoles(top4Poles);
          }
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
    getQualifyingPages();
  }, [season]);

  return { poles, loading, error };
}
