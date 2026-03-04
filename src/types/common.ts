import type { ConstructorStanding } from "./constructor";
import type { DriverStanding } from "./driver";

export interface StandingsTable {
  season: string;
  round: string;
  StandingsLists: StandingsList[];
}
export interface StandingsList {
  season: string;
  round: string;
  ConstructorStandings?: ConstructorStanding[];
  DriverStandings?: DriverStanding[];
}
