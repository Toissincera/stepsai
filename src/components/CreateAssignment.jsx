import { useState } from "react";

export default function CreateAssignment() {
  const [allQ, setAllQ] = useState([]);
  const [currQ, setCurrQ] = useState("");
  return (
    <div>
      <div>Create New Assignment...</div>
      <div>
        {allQ.map((q, index) => (
          <li key={index}>{q}</li>
        ))}
      </div>
      <div>
        <form>
          <input
            type="text"
            value={currQ}
            onChange={(e) => setCurrQ(e.target.value)}
          ></input>
        </form>
      </div>
    </div>
  );
}
