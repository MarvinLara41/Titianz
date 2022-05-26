function App() {
  return (
    <div>
      <header className="header">
        <div className="header-title">
          <h2>
            <a href="/">Titianz</a>
          </h2>
        </div>

        <div className="header-links">
          <ul>
            <li>
              <a href="/">Login</a>
            </li>
            <li>
              <a href="/findplan">Workouts</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
      </header>
      <main className="main">
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
            <button>Submit</button>
          </form>

          <div className="main-register">
            <p>
              Don't have an account?
              <br />
              <a href="/register">Register Here</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
