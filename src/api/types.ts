export interface SeasonData {
  drivers: Record<string, Driver>;
  constructors: Record<string, Constructor>;
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
