import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./modules/components/navbar"
import AppRoutes from "./App.routes";
import "./App.css";
import { AnilistProvider } from "./modules/services/AnilistProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AnilistProvider>
          <Navbar/>
          <AppRoutes />
        </AnilistProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
