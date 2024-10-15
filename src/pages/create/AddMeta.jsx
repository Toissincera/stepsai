import React from "react";

export default function AddMeta({ meta, handleMetaChange }) {
  return (
    <div className="accordion-item w-100">
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
        data-bs-parent="#parent-accordion"
      >
        <div className="accordion-body d-flex flex-wrap">
          <div className="input-group w-50 p-1">
            <span className="input-group-text my-1">Name:</span>
            <input
              type="text"
              className="form-control bg-success-subtle border-2 border-success my-1"
              name="assName"
              value={meta.assName}
              onChange={(e) => handleMetaChange(e)}
            />
          </div>
          <div className="input-group w-50 p-1">
            <span className="input-group-text my-1">Class:</span>
            <input
              type="text"
              className="form-control bg-success-subtle border-2 border-success my-1"
              name="className"
              value={meta.className}
              onChange={(e) => handleMetaChange(e)}
            />
          </div>
          <div className="input-group w-50 p-1">
            <span className="input-group-text my-1">Subject:</span>
            <input
              type="text"
              className="form-control bg-success-subtle border-2 border-success my-1"
              name="subjectName"
              value={meta.subjectName}
              onChange={(e) => handleMetaChange(e)}
            />
          </div>
          <div className="input-group w-50 p-1">
            <span className="input-group-text my-1">Passing marks:</span>
            <input
              type="number"
              className="form-control bg-success-subtle border-2 border-success my-1"
              name="passMarks"
              value={meta.passMarks}
              onChange={(e) => handleMetaChange(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
