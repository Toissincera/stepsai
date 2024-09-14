import React from "react";

export default function QGrid({ allQ }) {
  return (
    <div
      className="row row-cols-1 row-cols-md-2 c g-2 w-50 p-2 border border-3 border-black rounded"
      style={{ maxHeight: "70vh", overflowY: "auto" }}
    >
      {allQ.map((q, i) => (
        <QCard
          q={q}
          key={i}
          i={i}
        />
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

function QCard({ q, i }) {
  return (
    <div className="col">
      <div className="card h-100 position-relative">
        <div className="position-absolute top-0 end-0 lead fw-bold px-3 py-2">
          {q.marks}
        </div>
        <div className="card-body text-black">
          <p className="card-text">
            {i + 1}. {q.q}
          </p>
          {q.qType == "MCQ" && (
            <div
              className="btn-group-vertical btn-group-sm w-100"
              role="group"
            >
              {q.options.map((o, ix) => (
                <button
                  className={
                    `btn btn-outline-primary ` +
                    `${o == q.correct && "bg-success-subtle"}`
                  }
                  key={ix}
                >
                  {o}
                </button>
              ))}
            </div>
          )}
        </div>
        {q.qType == "Long" && <div className="card-footer">{q.correct}</div>}
      </div>
    </div>
  );
}
