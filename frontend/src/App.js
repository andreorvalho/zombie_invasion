import React from "react";
import SurvivorForm from "./components/survivors/SurvivorForm"
import Layout from "./components/pages/Layout"
import Home from "./components/pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <main className="container">
      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="survivors/new" element={<SurvivorForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      }
    </main>
  );
}

export default App;
