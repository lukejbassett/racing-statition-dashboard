import { useState } from "react";
import {
  DriverStandings,
  ConstructorStandings,
  RaceWins,
  Poles,
} from "../components/index";
import SeasonDropdown from "../components/ui/SeasonDropdown";

export default function Homepage() {
  const year = new Date().getFullYear();
  const [season, setSeason] = useState<number>(year - 1);

  return (
    <>
      <SeasonDropdown season={season} changeSeason={setSeason} />
      <DriverStandings season={season} />
      <ConstructorStandings season={season} />
      <RaceWins season={season} />
      <Poles season={season} />
    </>
  );
}
