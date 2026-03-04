import type {
  Constructor,
  ConstructorStanding,
  ConstructorTable,
} from "./constructor";
import type { Driver, DriverStanding, DriverTable } from "./driver";
import type { RaceTable } from "./race";

export interface MRData {
  xmlns: string;
  series: string;
  url: string;
  limit: string;
  offset: string;
  total: string;
  RaceTable: RaceTable;
  DriverTable: DriverTable;
  ConstructorTable: ConstructorTable;
}
export interface ApiResponse {
  MRData: {
    ConstructorTable: {
      Constructors: Constructor[];
    };
    DriverTable: {
      Drivers: Driver[];
    };
    StandingsTable: {
      season: string;
      round: string;
      StandingsLists: {
        season: string;
        round: string;
        ConstructorStandings: ConstructorStanding[];
        DriverStandings: DriverStanding[];
      }[];
    };
  };
}
