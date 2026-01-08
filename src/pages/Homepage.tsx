import { DriverStandings, ConstructorStandings } from "../components/index";

export default function Homepage() {
  const season = "2025";
  return (
    <>
      <DriverStandings season={season} />
      <ConstructorStandings season={season} />
    </>
  );
}
