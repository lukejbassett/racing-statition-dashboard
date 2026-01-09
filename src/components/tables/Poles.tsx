import { usePoles } from "../../hooks";

type PolesProps = {
  season: number;
};

export default function Poles({ season }: PolesProps) {
  const { poles, loading, error } = usePoles(season);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading driver standings: {error}</p>;

  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Driver</th>
              <th>Poles</th>
            </tr>
          </thead>
          <tbody>
            {poles.map((p) => (
              <tr key={p.driverId}>
                <td>{p.driverName}</td>
                <td>{p.poles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
