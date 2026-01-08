import type { Constructor } from "./";

export interface Driver {
  driverId: string;
  permanentNumber: string;
  code: string;
  url: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}
export interface DriverStanding {
  position: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}
export interface DriverStandingResponse {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        DriverStandings: DriverStanding[];
      }[];
    };
  };
}
