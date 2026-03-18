import { useDriverStandings } from "../hooks/useDriverStandings";

export function DriverStandings() {
  // custom use hook
  const { data, isLoading, error } = useDriverStandings("2025");
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <table>
      <tbody>
        {data?.map((s) => (
          <tr key={s.Driver.driverId}>
            <td>
              {s.Driver.givenName} {s.Driver.familyName}
            </td>
            <td>{s.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
