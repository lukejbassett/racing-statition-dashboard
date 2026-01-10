import { useState } from "react";
import {
  DriverStandings,
  ConstructorStandings,
  RaceWins,
  Poles,
} from "../components/index";
import { SeasonDropdown } from "../components/";

export default function Homepage() {
  const year = new Date().getFullYear();
  const [season, setSeason] = useState<number>(year - 1);

  return (
    <>
      <main className="ml-48 min-h-screen p-6">
        <SeasonDropdown season={season} changeSeason={setSeason} />
        <div className="grid grid-cols-3 grid-rows-3 gap-x-4 gap-y-6 flex-1">
          <div className="row-span-3">
            <DriverStandings season={season} />
          </div>
          <div className="row-span-3">
            <ConstructorStandings season={season} />
          </div>
          <RaceWins season={season} />
          <Poles season={season} />
        </div>
      </main>
    </>
  );
}
