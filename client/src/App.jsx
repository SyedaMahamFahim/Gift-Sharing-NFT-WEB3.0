import React from "react";
import "./App.css";
import { Navbar, Footer } from "./components/index";
import Configurations from "./configurations/Configurations";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Configurations />
      <Footer />
    </div>
  );
}

export default App;
