import "./App.css";
import Home from "./Pages/Home";
import { useState } from "react";
import Search from "./Pages/Search";
//eslint-disable-next-line
import Test from "./Pages/Test";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Searched from "./Pages/Searched";

function App() {
  const [search, setSearch] = useState(false);
  return (
    <div className="h-auto">
      <Routes>
        <Route
          path="/"
          element={
            !search ? (
              <Home setSearch={setSearch} />
            ) : (
              <Search setSearch={setSearch} />
            )
          }
        />
        <Route
          path="/search"
          element={<Searched setSearch={setSearch} search={search} />}
        />
      </Routes>
      {/* <Test /> */}
    </div>
  );
}

export default App;
