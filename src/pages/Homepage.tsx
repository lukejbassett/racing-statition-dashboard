import { ConstructorStandingsTable, DriverStandingsTable } from "../components";

export function Homepage() {
  return (
    <>
      <h1>Homepage</h1>
      <DriverStandingsTable />
      <ConstructorStandingsTable />
    </>
  );
}
