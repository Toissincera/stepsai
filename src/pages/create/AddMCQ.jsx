import React from "react";

export default function AddMCQ({ MCQ, handleMCQChange, handleAddMCQ }) {
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
              className="form-control input-group bg-success-subtle border-3 border-success my-2 p-3"
              maxLength={500}
              rows={3}
              name="question"
              value={MCQ.question}
              onChange={(e) => handleMCQChange(e)}
            ></textarea>

            <div className="d-flex flex-wrap">
              {["option1", "option2", "option3", "option4"].map((o, i) => (
                <div
                  className="w-50 p-1"
                  key={i}
                >
                  <input
                    type="text"
                    className={`form-control ${
                      MCQ[o] == MCQ.correct &&
                      "bg-success-subtle border-3 border-success"
                    }`}
                    placeholder="Set Option..."
                    name={o}
                    value={MCQ[o]}
                    onChange={(e) => handleMCQChange(e)}
                  />
                </div>
              ))}
            </div>

            <div className="d-flex">
              <div className="d-flex flex-column w-75 p-1">
                <div className="input-group w-100">
                  <span className="input-group-text w-25 my-1">Correct: </span>

                  <select className="form-select bg-success-subtle border-3 border-success my-1">
                    {["option1", "option2", "option3", "option4"].map((o) => (
                      <option
                        key={o}
                        value={MCQ[o]}
                        onClick={(e) => handleMCQChange(e)}
                      >
                        {MCQ[o] || "To be set..."}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="input-group w-100">
                  <span className="input-group-text w-25 my-1">Marks: </span>
                  <input
                    type="text"
                    className="form-control bg-success-subtle border-3 border-success my-1"
                    placeholder="1"
                    name={"marks"}
                    value={MCQ.marks}
                    onChange={(e) => handleMCQChange(e)}
                  />
                </div>
              </div>

              <div className="d-flex w-25 p-2">
                <button
                  type="button"
                  className="btn btn-primary w-100 h-100"
                  onClick={() => handleAddMCQ()}
                  disabled={
                    !MCQ.question ||
                    !MCQ.option1 ||
                    !MCQ.option2 ||
                    !MCQ.option3 ||
                    !MCQ.option4 ||
                    !MCQ.correct
                  }
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
