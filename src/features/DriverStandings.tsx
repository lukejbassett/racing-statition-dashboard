import { useDriverStandings } from "../hooks/useDriverStandings";

type Props = {
  season: string;
};

export function DriverStandings({ season }: Props) {
  // custom use hook
  const { data, isLoading, error } = useDriverStandings(season);
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
