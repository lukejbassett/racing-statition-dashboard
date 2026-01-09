import { useConstructorStandings } from "../../hooks";

type ConstructorStandingsProps = {
  season: number;
};

export default function ConstructorStandings({
  season,
}: ConstructorStandingsProps) {
  const { constructors, loading, error } = useConstructorStandings(season);

  if (loading) return <p>Loading</p>;
  if (error) return <p>Error loading constructor standings: {error}</p>;

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Constructor</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {constructors.map((c) => (
              <tr key={c.Constructor.name}>
                <td>{c.Constructor.name}</td>
                <td>{c.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
