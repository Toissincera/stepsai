import { useState } from "react";

export default function CreateAssignment() {
  const [allQ, setAllQ] = useState([]);
  const [currQ, setCurrQ] = useState("");

  function myFunc(term) {
    switch (term) {
      case term.length < 4:
        setCurrQ(`(${term})`);
        break;
      case term.length > 4:
        setCurrQ(`(${term.substring(0, 3)} ${term.substring(3)})`);
        break;
      default:
        break;
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-secondary p-3">
      <div className="lead fw-semibold p-3">Create New Assignment...</div>
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
            onChange={(e) => myFunc(e.target.value)}
          ></input>
        </form>
      </div>
    </div>
  );
}
