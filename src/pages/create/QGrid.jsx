import React from "react";

export default function QGrid({ allQ, setAllQ, meta }) {
  return (
    <div
      className="d-flex flex-column w-50 rounded-4 isotablet"
      style={{
        height: "clamp(60vh, 60vh, 80vh)", 
        overflowY: "auto",
      }}
    >
      <div className="p-3 w-100">
        <div className="fs-3 fw-bolder">
          {meta.assName || "Assignment Name..."}{" "}
        </div>
        <div className="fs-5">{meta.className || "For class..."}</div>
        <div className="fs-5">{meta.subjectName || "In subject..."}</div>
        <div className="fs-5">Pass marks: {meta.passMarks}</div>
      </div>
      <div className="row row-cols-1 row-cols-md-2 c g-2 w-100 p-3 m-0">
        {allQ.map((q, i) => (
          <QCard
            q={q}
            key={i}
            i={i}
            setAllQ={setAllQ}
          />
        ))}
        {!allQ[0] && (
          <div className="card h-100 w-100 c p-3 bg-transparent">
            <h5 className="card-title c p-3 m-0">
              <i className="bi bi-plus-square fs-1"></i>
            </h5>
          </div>
        )}
      </div>
    </div>
  );
}

function QCard({ q, i, setAllQ }) {
  return (
    <div className="col">
      <div className="card h-100 position-relative">
        <div className="position-absolute top-0 end-0 lead fw-bold px-2">
          {q.marks}
        </div>
        <div className="position-absolute bottom-0 end-0">
          <i
            className="bi bi-trash-fill fs-3 text-danger px-1"
            role="button"
            onClick={() => setAllQ((prev) => prev.toSpliced(i, 1))}
          ></i>
        </div>
        <div className="card-body text-black">
          <p className="card-text">
            {i + 1}. {q.q}
          </p>
          {q.qType == "MCQ" && (
            <div
              className="btn-group-vertical btn-group-sm w-100 c"
              role="group"
            >
              {q.options.map((o, ix) => (
                <button
                  className={
                    `btn btn-outline-primary w-75 ` +
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
