import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { supabaseKEY, supabaseURL } from "../secrets/envlocalsecrets";

const supabase = createClient(supabaseURL, supabaseKEY);

export default function RouteProtector() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    async function checkAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
    }

    checkAuth();
  }, []);

  if (isAuthenticated === null) {
    return null;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
