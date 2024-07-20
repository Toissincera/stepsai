import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import RouteProtector from "./components/RouteProtector";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route
        index
        path="/"
        element={<Home />}
      />
      <Route element={<RouteProtector />}>
        <Route
          path="/doctor/:doctorid"
          element={<Dashboard />}
        />
      </Route>
      <Route
        path="*"
        element={<>Page not found Place Holder</>}
      />
    </Routes>
  );
}
