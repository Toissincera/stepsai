import React, { useState } from "react";

export default function Carousel() {
  const [cursor, setCursor] = useState(0);
  const [picsArray, setPicsArray] = useState([0, 1, 2, 3]);
  const [currArray, setCurrArray] = useState([0, 1, 2]);

  function gonext() {
    if (cursor + 1 == picsArray.length) {
      setCursor(0);
    } else {
      setCursor(cursor + 1);
    }
    imageSelector();
  }
  function goprev() {
    if (cursor == 0) {
      setCursor(picsArray.length - 1);
    } else {
      setCursor(cursor - 1);
    }
    imageSelector();
  }
  function addImage() {
    setPicsArray([...picsArray, picsArray.length]);
  }

  // THIS IS SITUATIONAL CODE, BTW, FOR A THREE IMAGE WINDOW
  // I RECOMMEND A LIBRARY OR IMPROVED CODE FOR ALL CASES
  function imageSelector() {
    if (cursor + 2 == picsArray.length) {
      setCurrArray([picsArray[cursor], picsArray[cursor + 1], picsArray[0]]);
    } else if (cursor + 1 == picsArray.length) {
      return setCurrArray([picsArray[cursor], picsArray[0], picsArray[1]]);
    } else {
      return setCurrArray([
        picsArray[cursor],
        picsArray[cursor + 1],
        picsArray[cursor + 2],
      ]);
    }
  }

  return (
    <div className="d-flex flex-column">
      <div className="d-flex">
        {picsArray.map((item, ix) => (
          <h2 key={ix}>{item}</h2>
        ))}
        <button onClick={goprev}>PREV</button>
        <button onClick={gonext}>NEXT</button>
        <button onClick={addImage}>ADD NEW IMAGE</button>
      </div>
      <div className="d-flex">
        {currArray.map((item, ix) => (
          <h2 key={ix}>{item}</h2>
        ))}
      </div>
    </div>
  );
}
