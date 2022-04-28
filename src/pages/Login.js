import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setError(false);
  };

  const loginHandler = () => {
    if (password === "4242") {
      navigate("/user");
    } else {
      setError(true);
      setPassword("");
    }
  };

  return (
    <div>
      <h1>This is Login Page. </h1>
      <p> Enter Your Password </p>
      <input type="password" value={password} onChange={passwordHandler} />
      <p>{password}</p>
      <button onClick={loginHandler}> Login </button>
      {error && <h3>Kya bhai saheb.. mtlb kuch bhi 😐</h3>}
    </div>
  );
};

export { Login };
