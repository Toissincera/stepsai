import React from "react";

export default function AddMeta({
  assName,
  setAssName,
  className,
  setClassName,
  subjectName,
  setSubjectName,
  passMarks,
  setPassMarks,
}) {
  return (
    <div
      className="accordion w-100 my-2"
      id="accordionExample"
    >
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Assignment Settings
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap">
            <div className="input-group w-50 p-1">
              <span className="input-group-text my-1">Name:</span>
              <input
                type="text"
                className="form-control bg-success-subtle border-3 border-success my-1"
                value={assName}
                onChange={(e) => setAssName(e.target.value)}
              />
            </div>
            <div className="input-group w-50 p-1">
              <span className="input-group-text my-1">Class:</span>
              <input
                type="text"
                className="form-control bg-success-subtle border-3 border-success my-1"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
            </div>
            <div className="input-group w-50 p-1">
              <span className="input-group-text my-1">Subject:</span>
              <input
                type="text"
                className="form-control bg-success-subtle border-3 border-success my-1"
                value={subjectName}
                onChange={(e) => setSubjectName(e.target.value)}
              />
            </div>
            <div className="input-group w-50 p-1">
              <span className="input-group-text my-1">Passing marks:</span>
              <input
                type="text"
                className="form-control bg-success-subtle border-3 border-success my-1"
                value={passMarks}
                onChange={(e) => setPassMarks(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
