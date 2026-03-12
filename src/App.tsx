import { Route, Routes } from "react-router-dom";
import { Test } from "./Components/Test";

export function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Test />}></Route>
        </Routes>
      </main>
    </>
  );
}
