import { Route, Routes } from "react-router-dom";
import { Homepage, Games, Drivers, Teams, About } from "./pages";
import { Navbar } from "./components";

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/drivers" element={<Drivers />}></Route>
          <Route path="/teams" element={<Teams />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
    </>
  );
}
