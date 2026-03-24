import { useRaces } from "../hooks/useRaces";

type Props = {
  season: string;
};

export function CircuitsTable({ season }: Props) {
  const { data, isLoading, error } = useRaces(season);
  if (isLoading) return <p>loading...</p>;
  if (error) return <p>error</p>;
  return (
    <table>
      <tbody>
        {data?.map((c) => (
          <tr key={c.round}>
            <td>{c.date}</td>
            <td>{c.raceName}</td>
            <td>{c.round}</td>
            <td>{c.season}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
