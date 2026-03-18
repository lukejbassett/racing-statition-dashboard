import { useConstructorStandings } from "../hooks/useConstructorStandings";

export function ConstructorStandings() {
  const { data, isLoading, error } = useConstructorStandings("2025");
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
