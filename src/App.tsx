import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages";
import { SeasonDropdown } from "./components";
import { useState } from "react";

export function App() {
  const [season, setSeason] = useState(new Date().getFullYear().toString());
  return (
    <>
      <main>
        <SeasonDropdown season={season} changeSeason={setSeason} />
        <Routes>
          <Route path="/" element={<Homepage season={season} />}></Route>
        </Routes>
      </main>
    </>
  );
}
