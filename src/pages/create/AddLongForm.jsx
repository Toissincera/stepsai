import React from "react";

export default function AddLongForm() {
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
            <h4>Work In Progress</h4>
            {/* <br /> */}
            <h6>Only designated workers allowed beyond this point</h6>
            <br />
            <h5>
              HEY! You can't be here! This is a restricted area. Getouttaere!!
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
