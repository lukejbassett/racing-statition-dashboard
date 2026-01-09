import useRaceWins from "../../hooks/useRaceWins";

type RaceWinsProps = {
  season: number;
};

export default function RaceWins({ season }: RaceWinsProps) {
  const { raceWins, loading, error } = useRaceWins(season);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading driver standings: {error}</p>;

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Driver</th>
              <th>Wins</th>
            </tr>
          </thead>
          <tbody>
            {raceWins.map((w) => (
              <tr key={w.Driver.familyName}>
                <td>
                  {w.Driver.givenName} {w.Driver.familyName}
                </td>
                <td>{w.wins}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
