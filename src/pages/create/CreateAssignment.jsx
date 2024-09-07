import { useState } from "react";
import { supabase } from "../../App";
import AssMetaAccordion from "./AssMetaAccordion";
import QGrid from "./QGrid";
import AddMCQ from "./AddMCQ";

export default function CreateAssignment() {
  const [allQ, setAllQ] = useState([]);

  const [currQ, setCurrQ] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState("");

  const [assName, setAssName] = useState("");
  const [className, setClassName] = useState("");
  const [passMarks, setPassMarks] = useState(0);

  const handleOptionChange = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  function addQuestion() {
    setAllQ([...allQ, { currQ: currQ, options: options, correct: correct }]);
    setCurrQ("");
    setOptions(["", "", "", ""]);
    setCorrect("");
  }

  // ADD TEST TO SUPABASE, CONFIGURE BEFORE COMMIT
  async function addTestToDatabase() {
    const { data, error } = await supabase.from("doctors").insert([
      {
        doctorid: data.user.id,
        name: signupName,
        email: signupEmail,
        passwordhash: signupPassword,
        department: department,
      },
    ]);
  }

  return (
    <div className="d-flex c bg-warning p-3">
      <QGrid allQ={allQ} />
      <div className="d-flex container flex-column w-50 c  p-3">
        <AssMetaAccordion
          assName={assName}
          setAssName={setAssName}
          className={className}
          setClassName={setClassName}
          passMarks={passMarks}
          setPassMarks={setPassMarks}
        />
        <AddMCQ
          currQ={currQ}
          setCurrQ={setCurrQ}
          correct={correct}
          setCorrect={setCorrect}
          options={options}
          handleOptionChange={handleOptionChange}
          addQuestion={addQuestion}
        />
      </div>
    </div>
  );
}
