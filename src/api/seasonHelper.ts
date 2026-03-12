import type {
  Circuit,
  CircuitResponse,
  Constructor,
  ConstructorResponse,
  Driver,
  DriverResponse,
  Race,
  RaceResponse,
  Result,
  ResultResponse,
  SeasonData,
} from "./types";

// creates the SeasonData object
export function allSeasonData(
  // defines api responses
  // SeasonData should have these vvv
  drivers: DriverResponse,
  constructors: ConstructorResponse,
  circuits: CircuitResponse,
  races: RaceResponse,
  results: ResultResponse,
): SeasonData {
  // creates an empty map for each api response
  // anything in SeasonData should be vvv
  const driverMap: Record<string, Driver> = {};
  const constructorMap: Record<string, Constructor> = {};
  const circuitMap: Record<string, Circuit> = {};
  const raceMap: Record<string, Race> = {};
  const resultMap: Record<string, Result[]> = {};

  // inputs each driver / constructor by id into a map
  drivers.MRData.DriverTable.Drivers.forEach((driver) => {
    driverMap[driver.driverId] = driver;
  });

  constructors.MRData.ConstructorTable.Constructors.forEach((constructor) => {
    constructorMap[constructor.constructorId] = constructor;
  });

  circuits.MRData.CircuitTable.Circuits.forEach((circuit) => {
    circuitMap[circuit.circuitId] = circuit;
  });

  // race and result are combined per driver per race
  races.MRData.RaceTable.Races.forEach((race) => {
    raceMap[race.round] = race;
  });

  results.MRData.RaceTable.Races.forEach((race) => {
    race.Results.forEach((result) => {
      const driverId = result.Driver.driverId;

      if (!resultMap[driverId]) {
        resultMap[driverId] = [];
      }
      resultMap[driverId].push(result);
    });
  });

  return {
    drivers: driverMap,
    constructors: constructorMap,
    circuits: circuitMap,
    races: raceMap,
    results: resultMap,
  };

  //   this function allows SeasonData.drivers.driverId
}
