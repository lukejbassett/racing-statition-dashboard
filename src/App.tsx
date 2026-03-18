import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages";

export function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
        </Routes>
      </main>
    </>
  );
}
