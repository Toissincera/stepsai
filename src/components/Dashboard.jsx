import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchPatientForm from "./SearchPatientForm";
import "../App.css";
import AddPdfForm from "./AddPdfForm";
import { supabase } from "../App";


export default function DoctorProfile() {
  const { doctorid } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      const { data, error } = await supabase
        .from("doctors")
        .select("*")
        .eq("doctorid", doctorid)
        .single();

      if (error) {
        console.error(error);
      } else {
        setDoctor(data);
      }
      setLoading(false);
    };

    fetchDoctor();
  }, [doctorid]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return (
    <div>
      <h2>
        {doctor.name}
        <br />
        {doctor.department}
      </h2>
      <div className="col-2">
        <SearchPatientForm />
        <AddPdfForm />
      </div>
    </div>
  );
}

