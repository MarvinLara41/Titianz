import { Link } from "react-router-dom";

export default function LandingScreen() {
  return (
    <div className="main-login">
      <div className="main-welcome">
        <p> Welcome Titianz </p>
      </div>

      <form className="main-login_form">
        <label htmlFor="username">UserName</label>
        <input text="text" required />
        <label htmlFor="password">Password</label>
        <input type="password" text="text" required />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div className="main-register">
        <p>
          Don't have an account?
          <br />
          <Link to="/register">Register Here</Link>
        </p>
      </div>
    </div>
  );
}
