import type {
  Constructor,
  ConstructorResponse,
  Driver,
  DriverResponse,
  SeasonData,
} from "./types";

// creates the SeasonData object
export function allSeasonData(
  // defines api responses
  // SeasonData should have these vvv
  drivers: DriverResponse,
  constructors: ConstructorResponse,
): SeasonData {
  // creates an empty map for each api response
  // anything in SeasonData should be vvv
  const driverMap: Record<string, Driver> = {};
  const constructorMap: Record<string, Constructor> = {};

  //   inputs each driver / constructor by id into a map
  drivers.MRData.DriverTable.Drivers.forEach((driver) => {
    driverMap[driver.driverId] = driver;
  });

  constructors.MRData.ConstructorTable.Constructors.forEach((constructor) => {
    constructorMap[constructor.constructorId] = constructor;
  });

  return {
    drivers: driverMap,
    constructors: constructorMap,
  };

  //   this function allows SeasonData.drivers.driverId
}
