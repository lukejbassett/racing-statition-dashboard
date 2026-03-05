import type { Constructor } from "./constructor";

export interface Driver {
  driverId: string;
  permanentNumber?: string;
  code: string;
  url?: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
}
export interface DriverStanding {
  position: string;
  positionText?: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}
