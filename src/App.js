import Projects from "./pages/projects/Projects";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
