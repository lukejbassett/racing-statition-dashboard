import type { Circuit, Constructor, Driver } from "./index";

export interface Race {
  season: string;
  round: string;
  url?: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  Results: Result[];
  QualifyingResults: QualifyingResult[];
}
export interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  //   status: Status;
  Time?: ResultTime;
  FastestLap?: FastestLap;
}
export interface FastestLap {
  rank: string;
  lap: string;
  Time: FastestLapTime;
}
export interface FastestLapTime {
  time: string;
}
export interface ResultTime {
  millis: string;
  time: string;
}
// erasbleSyntaxOnly error?
// export enum Status {
//   Finished = "Finished",
// }
export interface QualifyingResult {
  number: string;
  position: string;
  Driver: Driver;
  Constructor: Constructor;
  Q1?: string;
  Q2?: string;
  Q3?: string;
}
