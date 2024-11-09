import { Routes, Route } from "react-router-dom";
import "./Styles/main.scss";
import Home from "./Pages/Home";
function App() {
  return (
    <>
      <p>Test</p>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
