import type {
  Constructor,
  ConstructorStanding,
  Driver,
  DriverStanding,
  Circuit,
  Race,
} from "./index";

export interface ApiResponse {
  MRData: {
    xmlns: string;
    series: string;
    url: string;
    limit: string;
    offset: string;
    total: string;
    RaceTable: {
      season: string;
      round?: string;
      Races: Race[];
    };
    CircuitTable: {
      Circuits: Circuit[];
    };
    ConstructorTable: {
      season: string;
      Constructors: Constructor[];
    };
    DriverTable: {
      season: string;
      Drivers: Driver[];
    };
    StandingsTable: {
      season: string;
      round?: string;
      StandingsLists: {
        season: string;
        round?: string;
        ConstructorStandings: ConstructorStanding[];
        DriverStandings: DriverStanding[];
      }[];
    };
  };
}
