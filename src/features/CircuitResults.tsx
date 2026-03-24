import { useResults } from "../hooks/useResults";

type Props = {
  season: string;
  round: string;
};

export function CircuitResults({ season, round }: Props) {
  const { data, isLoading, error } = useResults(season, round);
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return (
    <table>
      <tbody>
        {data?.map((c) => (
          <tr key={c.position}>
            <td>{c.Driver.familyName}</td>
            <td>{c.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
