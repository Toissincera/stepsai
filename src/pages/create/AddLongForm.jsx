import React from "react";

export default function AddLongForm({
  longQ,
  setLongQ,
  longCorrect,
  setLongCorrect,
  marksLong,
  setMarksLong,
  handleAddLongQ,
}) {
  return (
    <div className="accordion-item w-100">
      <h2 className="accordion-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#longformcollapse"
          aria-expanded="false"
          aria-controls="longformcollapse"
        >
          Add a Long Form Question
        </button>
      </h2>

      <div
        id="longformcollapse"
        className="accordion-collapse collapse"
        data-bs-parent="#parent-accordion"
      >
        <div className="accordion-body text-center">
          <textarea
            placeholder="Long question here..."
            className="form-control input-group bg-success-subtle border-3 border-success my-2 p-3"
            maxLength={500}
            rows={3}
            value={longQ}
            onChange={(e) => setLongQ(e.target.value)}
          ></textarea>

          <div className="d-flex">
            <div className="d-flex flex-column w-75 p-1">
              <div className="input-group w-100">
                <span className="input-group-text w-25 my-1">Correct: </span>

                <input
                  type="text"
                  placeholder="Correct answer here..."
                  className="form-control bg-success-subtle border-3 border-success my-1"
                  value={longCorrect}
                  onChange={(e) => setLongCorrect(e.target.value)}
                ></input>
              </div>

              <div className="input-group w-100">
                <span className="input-group-text w-25 my-1">Marks: </span>
                <input
                  type="text"
                  className="form-control bg-success-subtle border-3 border-success my-1"
                  placeholder="10"
                  value={marksLong}
                  onChange={(e) => setMarksLong(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex w-25 p-2">
              <button
                type="button"
                className="btn btn-primary w-100 h-100"
                onClick={() => handleAddLongQ()}
                disabled={!longQ || !longCorrect}
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
