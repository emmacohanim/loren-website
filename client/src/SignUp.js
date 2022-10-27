import React, { useState, useEffect } from "react";
import { Form, Button, Radio, Dropdown } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

// state for all form values is set, but submitted form returns first/last name blank error
// submit handler should be setting errors and rendering errors to user

function SignUp({ onLogin, isLoggedIn, renderErrors }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e, setterFunction) {
    e.preventDefault();
    setterFunction(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        gender,
        username,
        password,
        passwordConfirmation,
        email,
        emailConfirmation,
        phone,
        preferredContactMethod,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <Form className="form" onSubmit={handleSubmit}>
        <Form.Group id="first-last-gender">
          <Form.Field>
            <Form.Input
              onChange={(e) => handleChange(e, setFirstName)}
              label="First Name"
              placeholder="First Name"
              value={firstName}
              id="firstName"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              onChange={(e) => handleChange(e, setLastName)}
              placeholder="Last Name"
              value={lastName}
              label="Last Name"
              id="lastName"
            />
          </Form.Field>
          <Form.Field>
            <label>Gender</label>
            <Dropdown
              onChange={(e, { value }) => {
                setGender(value);
              }}
              options={[
                { key: 1, text: "Male", value: "male" },
                { key: 2, text: "Female", value: "female" },
                { key: 3, text: "Nonbinary", value: "nonbinary" },
                { key: 4, text: "Transgender", value: "transgender" },
                { key: 5, text: "Other", value: "other" },
                {
                  key: 6,
                  text: "Prefer not to respond",
                  value: "prefer not to respond",
                },
              ]}
              selection
              value={gender}
              placeholder="Gender"
            />
          </Form.Field>
        </Form.Group>
        <Form.Group>
          <Form.Input
            onChange={(e) => handleChange(e, setUsername)}
            label="Username"
            placeholder="Username"
            value={username}
            id="username"
          />
          <Form.Input
            onChange={(e) => handleChange(e, setPassword)}
            label="Password"
            placeholder="Password"
            value={password}
            type="password"
            id="password"
          />
          <Form.Input
            onChange={(e) => handleChange(e, setPasswordConfirmation)}
            placeholder="Password Confirmation"
            value={passwordConfirmation}
            type="password"
            id="passwordConfirmation"
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            onChange={(e) => handleChange(e, setEmail)}
            value={email}
            type="text"
            name="email"
            placeholder="Email"
            label="Email"
          />
          <Form.Input
            onChange={(e) => handleChange(e, setEmailConfirmation)}
            value={emailConfirmation}
            type="text"
            name="email confirmation"
            placeholder="Confirm email"
          />
          <Form.Input
            onChange={(e) => handleChange(e, setPhone)}
            value={phone}
            type="text"
            name="phone"
            placeholder="10-digit phone number"
            label="Phone"
          />
          <div>
            <label>Preferred Method of Contact</label>
            <Radio
              value="email"
              label="Email"
              control="input"
              name="contact"
              checked={preferredContactMethod === "email"}
              onChange={(_e, { value }) => setPreferredContactMethod(value)}
            />
            <Radio
              value="phone"
              label="Phone"
              control="input"
              name="contact"
              checked={preferredContactMethod === "phone"}
              onChange={(_e, { value }) => setPreferredContactMethod(value)}
            />
          </div>
        </Form.Group>
        <Button type="submit">Sign Up</Button>
      </Form>
      {errors.map((err) => {
        return <p className="error">{err}</p>;
      })}
    </div>
  );
}

export default SignUp;
