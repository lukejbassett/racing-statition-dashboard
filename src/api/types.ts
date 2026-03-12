export interface SeasonData {
  drivers: Record<string, Driver>;
  constructors: Record<string, Constructor>;
  circuits: Record<string, Circuit>;
  races: Record<string, Race>;
  results: Record<string, Result[]>;
}

export interface Driver {
  driverId: string;
  permanentNumber?: string;
  code?: string;
  url?: string;
  givenName: string;
  familyName: string;
  dateOfBirth?: string;
  nationality?: string;
}
export interface DriverResponse {
  MRData: {
    DriverTable: {
      Drivers: Driver[];
    };
  };
}

export interface Constructor {
  constructorId: string;
  url?: string;
  name: string;
  nationality?: string;
}
export interface ConstructorResponse {
  MRData: {
    ConstructorTable: {
      Constructors: Constructor[];
    };
  };
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: {
    lat: string;
    long: string;
    locality: string;
    country: string;
  };
}
export interface CircuitResponse {
  MRData: {
    CircuitTable: {
      Circuits: Circuit[];
    };
  };
}

export interface Race {
  season: string;
  round: string;
  url?: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time?: string;
  Driver: Driver;
  Results: Result[];
}
export interface RaceResponse {
  MRData: {
    RaceTable: {
      Races: Race[];
    };
  };
}

export interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid?: string;
  laps?: string;
  status?: string;
}
export interface ResultResponse {
  MRData: {
    RaceTable: {
      Races: Race[];
    };
  };
}
