import React from "react";

export default function AddMCQ({
  currQ,
  setCurrQ,
  correct,
  setCorrect,
  options,
  handleOptionChange,
  addQuestion,
}) {
  return (
    <>
      <textarea
        placeholder="MCQ question here..."
        className="form-control input-group my-2 p-3"
        maxLength={500}
        rows={3}
        value={currQ}
        onChange={(e) => setCurrQ(e.target.value)}
      ></textarea>

      <div className="row g-2">
        {options.map((o, i) => (
          <div
            className="col-6"
            key={i}
          >
            <input
              type="text"
              className={`form-control ${
                o == correct && "bg-success-subtle border-4 border-success"
              }`}
              placeholder="Set Option..."
              value={o}
              onChange={(e) => handleOptionChange(e.target.value, i)}
            />
          </div>
        ))}
      </div>

      <div className="input-group mt-4">
        <select className="form-select bg-success border-0 w-50">
          {options.map((o, ix) => (
            <option
              key={ix}
              value={o}
              onClick={() => setCorrect(options[ix])}
            >
              {o || "To be set..."}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="btn btn-primary w-50"
          onClick={() => addQuestion()}
          disabled={
            !currQ ||
            !options[0] ||
            !options[1] ||
            !options[2] ||
            !options[3] ||
            !correct
          }
        >
          Save
        </button>
      </div>
    </>
  );
}
