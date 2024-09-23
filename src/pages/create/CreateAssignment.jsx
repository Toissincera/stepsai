import { useState } from "react";
import { supabase } from "../../App";
import AddMeta from "./AddMeta";
import QGrid from "./QGrid";
import AddMCQ from "./AddMCQ";
import AddLongForm from "./AddLongForm";

export default function CreateAssignment() {
  const [meta, setMeta] = useState({
    assName: "",
    className: "",
    subjectName: "",
    passMarks: 0,
  });

  const [MCQ, setMCQ] = useState({
    question: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correct: "",
    marks: 1,
  });

  const [allQ, setAllQ] = useState([]);

  const [longQ, setLongQ] = useState("");
  const [longCorrect, setLongCorrect] = useState("");
  const [marksLong, setMarksLong] = useState(10);

  function handleMetaChange(e) {
    setMeta((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleMCQChange(e) {
    console.log(e.target.name, e.target.value, e.target);
    console.log(MCQ);
    setMCQ((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleAddMCQ() {
    setAllQ([
      ...allQ,
      {
        q: currMCQ,
        options: options,
        correct: correctMCQ,
        qType: "MCQ",
        marks: marksMCQ,
      },
    ]);
    setCurrMCQ("");
    setOptions(["", "", "", ""]);
    setCorrectMCQ("");
    setMarksMCQ(1);
  }

  function handleAddLongQ() {
    setAllQ([
      ...allQ,
      { q: longQ, correct: longCorrect, qType: "Long", marks: marksLong },
    ]);
    setLongQ("");
    setLongCorrect("");
    setMarksLong(10);
  }

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
      <QGrid
        allQ={allQ}
        setAllQ={setAllQ}
        meta={meta}
      />
      <div className="d-flex container flex-column w-50 c  p-3">
        <AddMeta
          meta={meta}
          handleMetaChange={handleMetaChange}
        />
        <AddMCQ
          MCQ={MCQ}
          handleMCQChange={handleMCQChange}
          handleAddMCQ={handleAddMCQ}
        />
        <AddLongForm
          longQ={longQ}
          setLongQ={setLongQ}
          longCorrect={longCorrect}
          setLongCorrect={setLongCorrect}
          marksLong={marksLong}
          setMarksLong={setMarksLong}
          handleAddLongQ={handleAddLongQ}
        />
      </div>
    </div>
  );
}
