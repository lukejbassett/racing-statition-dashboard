import { useConstructorStandings } from "../hooks/useConstructorStandings";

type Props = {
  season: string;
};

export function ConstructorStandings({ season }: Props) {
  const { data, isLoading, error } = useConstructorStandings(season);
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return (
    <table>
      <tbody>
        {data?.map((s) => (
          <tr key={s.Constructor.constructorId}>
            <td>{s.Constructor.name}</td>
            <td>{s.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
