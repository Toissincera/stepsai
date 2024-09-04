import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../App";
import Dropdown from "./Dropdown";
import { departmentsList } from "../refData/refVariables";
import "../App.css";

export default function SignupForm() {
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [department, setDepartment] = useState("Any");

  const [error, setError] = useState("");

  let navigate = useNavigate();

  async function handleSignUp(e) {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
      options: {
        data: {
          name: signupName,
          department: department,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      const { error: insertError } = await supabase.from("doctors").insert([
        {
          doctorid: data.user.id,
          name: signupName,
          email: signupEmail,
          passwordhash: signupPassword,
          department: department,
        },
      ]);

      if (insertError) {
        setError(insertError.message);
      } else {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: signupEmail,
          password: signupPassword,
        });

        if (signInError) {
          setError(signInError.message);
        } else {
          navigate(`/doctor/${data.user.id}`);
        }
      }
    }
  }

  return (
    <form className="d-flex flex-column c p-3 m-5">
      <h2>Sign Up Today</h2>
      <input
        className="p-2 m-2 bg-light-subtle border border-2 border-success lead rounded"
        type="text"
        placeholder="Doctor Name"
        value={signupName}
        onChange={(e) => setSignupName(e.target.value)}
      />
      <input
        className="p-2 m-2 bg-light-subtle border border-2 border-success lead rounded"
        type="email"
        placeholder="Email"
        value={signupEmail}
        onChange={(e) => setSignupEmail(e.target.value)}
      />
      <input
        className="p-2 m-2 bg-light-subtle border border-2 border-success lead rounded"
        type="password"
        placeholder="Password"
        value={signupPassword}
        onChange={(e) => setSignupPassword(e.target.value)}
      />

      <Dropdown
        label="Department"
        options={departmentsList}
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <button
        className="w-100 m-2 btn btn-lg btn-primary"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
