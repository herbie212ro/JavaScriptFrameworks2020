import React, { useState } from "react";
import LoggedInContent from "../LoggedInContent/LoggedInContent";
import axios from "axios";
import Cookies from "js-cookie";
// You may need to import additional things here

function App() {
  /**
   * User input
   */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  /**
   * Handling AJAX loading and errors
   */
  const [isLoading, setIsLoading] = useState(false);
  /**
   * Be sure to set this when a user tries to login with invalid credentials.
   */
  const [errorMessage, setErrorMessage] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  /**
   * You may need to add more things to state
   */

  const login = token => {
    console.log("in login");
    localStorage.setItem("token", token);
    Cookies.set("token", token, { expires: 1 });
    setIsLoading(true);
    setIsLoggedIn(true);

    /**
     * Complete me
     */
  };

  const logout = () => {
    console.log("in logout");
    localStorage.removeItem("token");
    Cookies.remove("token");
    setIsLoggedIn(false);
    setIsLoading(false);
    setUsername("");
    setPassword("");
  };

  const handleLoginRequest = e => {
    e.preventDefault();
    console.log("loghandleloginRequest");
    axios("http://localhost:7000/jwt/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      data: { username: username, password: password }
    })
      .then(resp => login(resp.data.token))

      .catch(error =>
        error.response.status === 401
          ? setErrorMessage(
              "Your username/password is incorrect.  Please try again!"
            )
          : setErrorMessage("Some other shit happened!!", setIsLoggedIn(false))
      );
  };

  /**
   * Complete me.
   */

  /**
   * If the user is logged in, you should render the <LoggedInContent /> component instead.
   */
  if (isLoggedIn) {
    return <LoggedInContent logout={logout} />;
  } else
    return (
      <div className="container mt-2 mb-5">
        <h1>Login</h1>
        <form className="form-inline mb-2" onSubmit={handleLoginRequest}>
          <div className="form-group">
            <label htmlFor="username" className="mr-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="form-control mr-3"
              placeholder="Enter username"
              required={true}
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="mr-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control mr-3"
              required={true}
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isLoading}
          >
            Login
          </button>
        </form>
        <p className="form-text">
          <small>
            The username is <em>username</em> and the password is{" "}
            <em>password</em>
          </small>
        </p>
        {isLoading && <p>Loading ...</p>}
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    );
}

export default App;
