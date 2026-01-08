export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}
export interface ConstructorStanding {
  position: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}
export interface ConstructorStandingResponse {
  MRData: {
    StandingsTable: {
      StandingsLists: {
        ConstructorStandings: ConstructorStanding[];
      }[];
    };
  };
}
