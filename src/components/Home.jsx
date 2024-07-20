import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import "../App.css";

export default function Home() {
  return (
    <div className="col-2">
      <SignupForm />
      <LoginForm />
    </div>
  );
}
