export default function RegisterScreen() {
  return (
    <div className="register">
      <form className="register-form">
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" placeholder="Password" required />
        </div>
        <div>
          <label htmlFor="password">Re-Confirm Password</label>
          <br />
          <input type="password" placeholder="Password" required />
        </div>
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}
