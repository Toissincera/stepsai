import { useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { supabaseKEY, supabaseURL } from "../secrets/envlocalsecrets";
import "../App.css";

const supabase = createClient(supabaseURL, supabaseKEY);

export default function SearchPatientForm() {
  const [inputPatientID, setInputPatientID] = useState("");
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { doctorid } = useParams();

  async function searchPatientByID(event) {
    event.preventDefault();
    setLoading(true);
    setPatient(null);
    setErrorMessage(null);
    const { data: searchData, error: searchError } = await supabase
      .from("patients")
      .select("*")
      .eq("patientid", inputPatientID)
      .single();

    if (searchError) {
      console.log(searchError);
      setErrorMessage("ERROR! No patient found");
      setLoading(false);
    } else {
      console.log(searchData);
      setPatient(searchData);
      setLoading(false);
    }
  }

  async function handleAddPatient() {
    const { data: checkData, error: checkError } = await supabase
      .from("doctorpatient")
      .select("*")
      .eq("patientid", patient.patientid)
      .eq("doctorid", doctorid);

    if (!checkData) {
      const { data: addData, error: insertError } = await supabase
        .from("doctorpatient")
        .insert([
          {
            doctorid: doctorid,
            patientid: patient.patientid,
          },
        ]);
      if (insertError) {
        console.log(insertError);
        setErrorMessage("ERROR! Adding patient failed.");
      } else {
        console.log(addData);
      }
    } else {
      console.log(checkData);
      setErrorMessage("ERROR! Patient already added.");
    }
  }

  return (
    <div className="list">
      <h2>Search Patient by ID</h2>
      <form className="list">
        <input
          type="text"
          placeholder="Patient ID"
          value={inputPatientID}
          onChange={(e) => setInputPatientID(e.target.value)}
        />
        <button onClick={searchPatientByID}>
          {loading ? "Searching..." : "Search"}
        </button>
        {errorMessage && (
          <p>
            {errorMessage}
          </p>
        )}
      </form>

      {patient && (
        <div>
          <h5>
            {patient?.patientid}
            <br />
            {patient?.name}
            <br />
            {patient?.email}
            <br />
            {patient?.comments}
          </h5>
          <button onClick={handleAddPatient}>Add Patient</button>
        </div>
      )}
    </div>
  );
}
