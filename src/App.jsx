import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import RouteProtector from "./components/RouteProtector";
import CreateAssignment from "./components/CreateAssignment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import { createClient } from "@supabase/supabase-js";
import { supabaseKEY, supabaseURL } from "./secrets/envlocalsecrets";
export const supabase = createClient(supabaseURL, supabaseKEY);

export default function App() {
  return (
    <>
      <Navbar />
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
          path="/create"
          element={<CreateAssignment />}
        />
        <Route
          path="*"
          element={<>Page not found Place Holder</>}
        />
      </Routes>
      <Footer />
    </>
  );
}
