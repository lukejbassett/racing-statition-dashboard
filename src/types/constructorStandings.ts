import type { Constructor } from "./";

export interface ConstructorStandings {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}

export interface constructorStandingsResponse {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        ConstructorStandings: ConstructorStandings[];
      }[];
    };
  };
}
