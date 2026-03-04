export interface ConstructorTable {
  season: string;
  Constructors: Constructor[];
}
export interface Constructor {
  constructorId: string;
  url?: string;
  name: string;
  nationality: string;
}
export interface ConstructorStanding {
  position: string;
  positionText?: string;
  points: string;
  wins: string;
  Constructor: Constructor;
}
