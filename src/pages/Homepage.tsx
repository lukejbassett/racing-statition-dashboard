import {
  ConstructorStandingsTable,
  DriverStandingsTable,
  DriverPolesTable,
} from "../components";

export function Homepage() {
  return (
    <>
      <h1>Homepage</h1>
      <DriverStandingsTable />
      <ConstructorStandingsTable />
      <DriverPolesTable />
    </>
  );
}
