export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: {
    lat: string;
    long: string;
    lcoality: string;
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
