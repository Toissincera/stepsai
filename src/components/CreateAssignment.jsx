import { useState } from "react";

export default function CreateAssignment() {
  const [currQ, setCurrQ] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState("");

  
  const handleOptionChange = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  function addQuestion() {

  }

  return (
    <div className="d-flex container flex-column w-25 justify-content-center bg-dark p-3">
      <div className="input-group my-2">
        <textarea
          placeholder="MCQ question here..."
          className="form-control p-2"
          value={currQ}
          onChange={(e) => setCurrQ(e.target.value)}
        ></textarea>
      </div>
      <div className="input-group my-2">
        <input
          type="text"
          className={`form-control ${
            options[0] == correct && "bg-success-subtle border-5 border-success"
          }`}
          placeholder="Option A"
          value={options[0]}
          onChange={(e) => handleOptionChange(e.target.value, 0)}
        />
        <input
          type="text"
          className={`form-control ${
            options[1] == correct && "bg-success-subtle border-5 border-success"
          }`}
          placeholder="Option B"
          value={options[1]}
          onChange={(e) => handleOptionChange(e.target.value, 1)}
        />
      </div>
      <div className="input-group my-2">
        <input
          type="text"
          className={`form-control ${
            options[2] == correct && "bg-success-subtle border-5 border-success"
          }`}
          placeholder="Option C"
          value={options[2]}
          onChange={(e) => handleOptionChange(e.target.value, 2)}
        />
        <input
          type="text"
          className={`form-control ${
            options[3] == correct && "bg-success-subtle border-5 border-success"
          }`}
          placeholder="Option D"
          value={options[3]}
          onChange={(e) => handleOptionChange(e.target.value, 3)}
        />
      </div>
      <div className="input-group mt-4">
        <select className="form-select bg-success border-0 w-50">
          <option
            value={options[0]}
            onClick={() => setCorrect(options[0])}
          >
            {options[0] || "To be set..."}
          </option>
          <option
            value={options[1]}
            onClick={() => setCorrect(options[1])}
          >
            {options[1] || "To be set..."}
          </option>
          <option
            value={options[2]}
            onClick={() => setCorrect(options[2])}
          >
            {options[2] || "To be set..."}
          </option>
          <option
            value={options[3]}
            onClick={() => setCorrect(options[3])}
          >
            {options[3] || "To be set..."}
          </option>
        </select>
        <button
          type="button"
          className="btn btn-primary w-50"
          onClick={() => addQuestion()}
        >
          Save
        </button>
      </div>
    </div>
  );
}
