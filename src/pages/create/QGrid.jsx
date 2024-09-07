import React from "react";

export default function QGrid({ allQ }) {
  return (
    <div
      className="row row-cols-1 row-cols-md-2 c g-2 w-50 p-2 border border-3 border-black rounded"
      style={{ maxHeight: "70vh", overflowY: "auto" }}
    >
      {allQ.map((q, ix) => (
        <div
          className="col"
          key={ix}
        >
          <div className="card h-100">
            <div className="card-body">
              <p className="card-text">
                {ix + 1}. {q.currQ}
              </p>
              <div
                className="btn-group-vertical btn-group-sm w-100"
                role="group"
              >
                {q.options.map((o, i) => (
                  <button
                    className={
                      `btn btn-outline-primary ` +
                      `${o == q.correct && "bg-success-subtle"}`
                    }
                    key={i}
                  >
                    {o}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      {!allQ[0] && (
        <div className="card h-100 c bg-transparent">
          <h5 className="card-title c p-3 m-0">
            <i className="bi bi-plus-square fs-1"></i>
          </h5>
        </div>
      )}
    </div>
  );
}
