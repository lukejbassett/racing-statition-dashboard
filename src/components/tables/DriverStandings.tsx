import { useDriverStandings } from "../../hooks";

type DriverStandingsProps = {
  season: number;
};

export default function DriverStandings({ season }: DriverStandingsProps) {
  const { drivers, loading, error } = useDriverStandings(season);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading driver standings: {error}</p>;

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Driver</th>
              <th>Constructor</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {drivers.map((d) => (
              <tr key={d.Driver.familyName}>
                <td>
                  {d.Driver.givenName} {d.Driver.familyName}
                </td>
                <td>{d.Constructors[0]?.name}</td>
                <td>{d.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
