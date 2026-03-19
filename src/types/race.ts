import type { Circuit } from "./circuit";
import type { Results } from "./results";

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results: Results[];
}

export interface RaceResponse {
  MRData: {
    RaceTable: {
      Races: Race[];
    };
  };
}
