import { useState } from "react";
import { useParams } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";
import { supabaseKEY, supabaseURL } from "../secrets/envlocalsecrets";
import "../App.css";

const supabase = createClient(supabaseURL, supabaseKEY);

export default function AddPdfForm() {
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const { doctorid } = useParams();

  function handleAddPDF(event) {
    const file = event.target.files[0];
    console.log(file);
    setSelectedPDF(URL.createObjectURL(event.target.files[0]));
    console.log(selectedPDF);
  }

  async function handleUploadPDF() {
    setErrorMessage(null);
    setLoading(true);
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("pdfs")
      .upload(`${doctorid}/${Date.now()}`, selectedPDF);
    if (uploadError) {
      console.log(uploadError);
      setErrorMessage("ERROR! PDF upload failed");
      setLoading(false);
    } else {
      console.log(uploadData);
      setErrorMessage("PDF successfully uploaded");
      setLoading(false);
    }
  }

  return (
    <div className="list">
      <h2>Add PDF</h2>
      <div className="list">
        <input
          type="file"
          accept="application/pdf"
          name="pdf"
          id="pdf"
          onChange={(e) => {
            handleAddPDF(e);
          }}
        />
        <button onClick={handleUploadPDF}>
          {loading ? "Uploading..." : "Upload"}
        </button>
        {errorMessage}
      </div>
    </div>
  );
}
