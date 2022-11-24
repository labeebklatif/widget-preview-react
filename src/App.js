import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Away from "./Away";
import { useEffect } from "react";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/away" element={<Away />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
