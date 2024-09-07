import React from "react";

export default function AssMetaAccordion({
  assName,
  setAssName,
  className,
  setClassName,
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
            {assName || "Assignment"} Settings
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body">
            <div className="input-group my-2">
              <input
                type="text"
                className="form-control"
                placeholder="Assignment Name"
                value={assName}
                onChange={(e) => setAssName(e.target.value)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Class Name (Optional)"
                value={className}
                onChange={(e) => setClassName(e.target.value)}
              />
              <span className="input-group-text">Pass Marks</span>
              <input
                type="number"
                className="form-control"
                placeholder="Passing Marks (Optional)"
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
