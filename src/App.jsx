import React, { useState } from "react";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by Alena and is open-sourced on{" "}
          <a href="https://github.com/Alyona1703/React-Weather-App">Github</a>.
        </footer>
      </div>
    </div>
  );
}
