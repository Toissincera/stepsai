import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import "../App.css";

export default function Home() {
  return (
    <div className="d-flex c p-5 bg-dark text-light">
      <SignupForm />
      <LoginForm />
    </div>
  );
}
