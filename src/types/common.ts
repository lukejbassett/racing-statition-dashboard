import type { ConstructorStanding, ConstructorTable } from "./constructor";
import type { DriverStanding, DriverTable } from "./driver";
import type { RaceTable } from "./race";

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
  StandingsTable: StandingsTable;
  DriverTable: DriverTable;
  ConstructorTable: ConstructorTable;
}
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
