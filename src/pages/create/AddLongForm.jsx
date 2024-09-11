import React from "react";

export default function AddLongForm({
  longQ,
  setLongQ,
  longCorrect,
  setLongCorrect,
  handleAddLongQ,
}) {
  return (
    <div
      className="accordion w-100 my-2"
      id="longformparent"
    >
      <div className="accordion-item">
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
          data-bs-parent="#longformparent"
        >
          <div className="accordion-body text-center">
            <textarea
              placeholder="Long question here..."
              className="form-control input-group my-2 p-3"
              maxLength={500}
              rows={3}
              value={longQ}
              onChange={(e) => setLongQ(e.target.value)}
            ></textarea>
            <input
              type="text"
              placeholder="Correct answer here..."
              className="form-control"
              value={longCorrect}
              onChange={(e) => setLongCorrect(e.target.value)}
            ></input>
            <button
              type="button"
              className="btn btn-primary w-50"
              onClick={() => handleAddLongQ()}
              disabled={!longQ || !longCorrect}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
