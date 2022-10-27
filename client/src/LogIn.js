import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Popup } from "semantic-ui-react";

function LogIn({ isLoggedIn, onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  function handleChange(e, setterFunction) {
    e.preventDefault();
    setterFunction(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => {
          setErrors(err.error.login);
        });
      }
    });
  }

  return (
    <div className="div" id="login">
      <Form className="form" id="login" onSubmit={handleSubmit}>
        <Form.Group id="login">
          <Form.Field>
            <Form.Input
              onChange={(e) => handleChange(e, setUsername)}
              label="Username"
              placeholder="Username"
              value={username}
              id="username"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              onChange={(e) => handleChange(e, setPassword)}
              type="password"
              placeholder="Password"
              value={password}
              label="Password"
              id="password"
              classname="input"
            />
          </Form.Field>
        </Form.Group>
        <Button className="button" id="login" type="submit">Log In</Button>
      </Form>
      <p>Don't have an account?</p>
      <Button className="button" id="redirect-signup" onClick={() => navigate("/sign-up")}>Create Account</Button>
      {errors.length > 0 ? <p className="error">{errors}</p> : null}
    </div>
  );
}

export default LogIn;
