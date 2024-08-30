import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../App";
import "../App.css";


export default function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState("");

  let navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const { data, error: signInError } = await supabase.auth.signInWithPassword(
      {
        email: loginEmail,
        password: loginPassword,
      }
    );

    if (signInError) {
      setError(signInError.message);
    } else {
        navigate(`/doctor/${data.user.id}`);
    }
  }

  return (
    <form className="list">
      <h2>...Or Sign In</h2>
      <input
        type="email"
        placeholder="Email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </form>
  );
}
