import type { Driver, Constructor } from "./";

export interface DriverStandings {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface driverStandingsResponse {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        DriverStandings: DriverStandings[];
      }[];
    };
  };
}
