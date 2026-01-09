import type { Constructor } from "./constructor";
import type { Driver } from "./driver";

export interface QualifyingResult {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1: string;
  Q2: string;
  Q3: string;
}
export interface QualifyingResponse {
  MRData: {
    total: number;
    RaceTable: {
      Races: {
        QualifyingResults: QualifyingResult[];
      }[];
    };
  };
}
