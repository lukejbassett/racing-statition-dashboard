import type { Constructor } from "./index";

export interface Driver {
  driverId: string;
  permanentNumber?: string;
  code: string;
  url?: string;
  givenName: string;
  familyName: string;
  dateOfBirth: string;
  nationality: string;
  Constructor: Constructor;
}
export interface DriverStanding {
  position: string;
  positionText?: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}
export interface DriverWins {
  driverId: string;
  name: string;
  wins: number;
}
export interface DriverPoles {
  driverId: string;
  name: string;
  poles: number;
}
