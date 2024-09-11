import React from "react";

export default function AddMCQ({
  currMCQ,
  setCurrMCQ,
  correctMCQ,
  setCorrectMCQ,
  options,
  handleOptionChange,
  marksMCQ,
  setMarksMCQ,
  handleAddMCQ,
}) {
  return (
    <div
      className="accordion w-100 my-2"
      id="mcqparent"
    >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mcqcollapse"
            aria-expanded="false"
            aria-controls="mcqcollapse"
          >
            Add an MCQ
          </button>
        </h2>
        <div
          id="mcqcollapse"
          className="accordion-collapse collapse"
          data-bs-parent="#mcqparent"
        >
          <div className="accordion-body">
            <textarea
              placeholder="MCQ question here..."
              className="form-control input-group my-2 p-3"
              maxLength={500}
              rows={3}
              value={currMCQ}
              onChange={(e) => setCurrMCQ(e.target.value)}
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
                      o == correctMCQ &&
                      "bg-success-subtle border-4 border-success"
                    }`}
                    placeholder="Set Option..."
                    value={o}
                    onChange={(e) => handleOptionChange(e.target.value, i)}
                  />
                </div>
              ))}
            </div>

            <div className="input-group mt-2">
              <select className="form-select bg-success border-0">
                {options.map((o, ix) => (
                  <option
                    key={ix}
                    value={o}
                    onClick={() => setCorrectMCQ(options[ix])}
                  >
                    {o || "To be set..."}
                  </option>
                ))}
              </select>
              <input
                type="text"
                className="form-control bg-success border-0"
                placeholder="Set Marks..."
                value={marksMCQ}
                onChange={(e) => setMarksMCQ(e.target.value, i)}
              />
              <button
                type="button"
                className="btn btn-primary w-50"
                onClick={() => handleAddMCQ()}
                disabled={
                  !currMCQ ||
                  !options[0] ||
                  !options[1] ||
                  !options[2] ||
                  !options[3] ||
                  !correctMCQ
                }
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
