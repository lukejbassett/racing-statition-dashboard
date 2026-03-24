import {
  CircuitResults,
  CircuitsTable,
  ConstructorStandings,
  DriverStandings,
  WinsTable,
} from "../features";

type Props = {
  season: string;
};
export function Homepage({ season }: Props) {
  return (
    <>
      <DriverStandings season={season} />
      <ConstructorStandings season={season} />
      <CircuitsTable season={season} />
      <CircuitResults season={season} round="1" />
      <WinsTable season={season} />
    </>
  );
}
