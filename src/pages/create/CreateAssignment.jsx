import { useState } from "react";
import { supabase } from "../../App";
import AddMeta from "./AddMeta";
import QGrid from "./QGrid";
import AddMCQ from "./AddMCQ";
import AddLongForm from "./AddLongForm";

export default function CreateAssignment() {
  const [assName, setAssName] = useState("");
  const [className, setClassName] = useState("");
  const [passMarks, setPassMarks] = useState(0);

  const [allQ, setAllQ] = useState([]);

  const [currMCQ, setCurrMCQ] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctMCQ, setCorrectMCQ] = useState("");
  const [marksMCQ, setMarksMCQ] = useState(1);

  const [longQ, setLongQ] = useState("");
  const [longCorrect, setLongCorrect] = useState("");

  // TERRIBLE CODE
  const handleOptionChange = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  function handleAddMCQ() {
    setAllQ([
      ...allQ,
      { q: currMCQ, options: options, correct: correctMCQ, qType: "MCQ" },
    ]);
    setCurrMCQ("");
    setOptions(["", "", "", ""]);
    setCorrectMCQ("");
  }

  function handleAddLongQ() {
    setAllQ([...allQ, { q: longQ, correct: longCorrect, qType: "Long" }]);
    setLongQ("");
    setLongCorrect("");
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
        <AddMeta
          assName={assName}
          setAssName={setAssName}
          className={className}
          setClassName={setClassName}
          passMarks={passMarks}
          setPassMarks={setPassMarks}
        />
        <AddMCQ
          currMCQ={currMCQ}
          setCurrMCQ={setCurrMCQ}
          correctMCQ={correctMCQ}
          setCorrectMCQ={setCorrectMCQ}
          options={options}
          handleOptionChange={handleOptionChange}
          marksMCQ={marksMCQ}
          setMarksMCQ={setMarksMCQ}
          handleAddMCQ={handleAddMCQ}
        />
        <AddLongForm
          longQ={longQ}
          setLongQ={setLongQ}
          longCorrect={longCorrect}
          setLongCorrect={setLongCorrect}
          handleAddLongQ={handleAddLongQ}
        />
      </div>
    </div>
  );
}
