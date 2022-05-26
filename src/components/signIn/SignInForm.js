import { useContext, useState } from "react";
import { AuthContext } from "../../context/AppContext";
import "./SignIn.css";


function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const [error, setError] = useState();  
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login(username, password);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <form className="form">
      <label
        className="label"
        htmlFor="username">
        Username
        <br />
        <input
          className="input"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
      </label>
      <br />
      <label
        className="label"
        htmlFor="password">
        Password
        <br />
        <input
          className="input"
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
      </label>
      {error && <p>{error}</p>}
      <br />
      <button 
        className="button"
        onClick={handleSubmit}>Sign In</button>
    </form>
  );
}

export default SignInForm;
