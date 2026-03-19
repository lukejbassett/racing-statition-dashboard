import type { Constructor } from "./constructor";
import type { Driver } from "./driver";
import type { Race } from "./race";

export interface Results {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  FastestLap: {
    rank: string;
    lap: string;
    AverageSpeed: {
      units: string;
      speed: string;
    };
    Time: {
      time: string;
    };
  };
}

export interface resultsResponse {
  MRData: {
    RaceTable: {
      Races: Race[];
    };
  };
}
