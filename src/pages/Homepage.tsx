import { ConstructorStandings, DriverStandings } from "../features";

type Props = {
  season: string;
};
export function Homepage({ season }: Props) {
  return (
    <>
      <DriverStandings season={season} />
      <ConstructorStandings season={season} />
    </>
  );
}
