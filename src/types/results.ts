import type { Constructor } from "./constructor";
import type { Driver } from "./driver";

export interface Results {
  number: string;
  position: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: string;
  Time?: Time;
  FastestLap?: FastestLap;
}
export interface Time {
  millis: string;
  time: string;
}
export interface FastestLap {
  rank: string;
  lap: string;
  Time: Time2;
  AverageSpeed: AverageSpeed;
}
export interface Time2 {
  time: string;
}
export interface AverageSpeed {
  units: string;
  speed: string;
}
