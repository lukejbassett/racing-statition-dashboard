import { Route, Routes } from "react-router-dom";
import { About, Circuits, Drivers, Games, Homepage, Teams } from "./pages";
import { Navbar } from "./components";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/drivers" element={<Drivers />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        <Route path="/circuits" element={<Circuits />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/games" element={<Games />}></Route>
      </Routes>
    </>
  );
}
