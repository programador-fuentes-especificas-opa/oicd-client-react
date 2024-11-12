import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Use Routes instead of Switch
import App from "./App";
import Callback from "./Callback";

const RouterComponent = () => (
  <Router>
    <Routes> {/* Replace Switch with Routes */}
      <Route path="/" element={<App />} />
      <Route path="/callback" element={<Callback />} />
    </Routes>
  </Router>
);

export default RouterComponent;
