import React, { useState, useEffect} from 'react';
import { Form, Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import { useNavigate} from 'react-router-dom'

function SignUp({onLogin, isLoggedIn}) {
    const navigate = useNavigate();

    useEffect(()=>{
        if (isLoggedIn) {
            navigate("/browse")
        }
    }, [isLoggedIn])

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [phone, setPhone] = useState("")
    const [preferredContactMethod, setPreferredContactMethod] = useState("")
    const [gender, setGender] = useState("")
    const [errors, setErrors] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function handleChange(e, setterFunction) {
        e.preventDefault()
        setterFunction(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([])
        fetch("/signup", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                firstName,
                lastName,
                gender,
                username,
                password,
                passwordConfirmation,
                email,
                emailConfirmation,
                phone,
                preferredContactMethod
            })
        })
        .then((r) => {
            setIsLoading(false);
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((err) => setErrors(err.errors))
              return (
              <p className="error">{errors}</p>
              )
            }
          })
        }
    return (
        <div>
            <h2>Sign Up</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group id="first-last-gender">
                    <Form.Field>
                        <Form.Input
                            onChange={(e)=>handleChange(e, setFirstName)}
                            label="First Name"
                            placeholder="First Name"
                            value={firstName}
                            id="firstName" 
                        />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input
                        onChange={(e)=>handleChange(e, setLastName)}
                        placeholder="Last Name"
                        value={lastName}
                        label="Last Name"
                        id="lastName"
                        />
                    </Form.Field>
                    <Form.Field label='Gender' control='select' onChange={(e)=>handleChange(e, setGender)}>
                        <option disabled value="">select gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                        <option value='transgender'>Transgender</option>
                        <option value='non-binary-non-confornming'>Non-binary/non-conforming</option>
                        <option value='prefer-not-to-respond'>Prefer not to respond</option>
                    </Form.Field>
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        onChange={(e)=>handleChange(e, setUsername)}
                        label="Username"
                        placeholder="Username"
                        value={username}
                        id="username"
                    />
                    <Form.Input
                        onChange={(e)=>handleChange(e, setPassword)}
                        label="Password"
                        placeholder="Password"
                        value={password}
                        type="password"
                        id="password"
                    />
                    <Form.Input
                        onChange={(e)=>handleChange(e, setPasswordConfirmation)}
                        placeholder="Password Confirmation"
                        value={passwordConfirmation}
                        type="password"
                        id="passwordConfirmation"
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Input
                        onChange={(e)=>handleChange(e, setEmail)}
                        value={email}
                        type="text"
                        name="email"
                        placeholder="Email"
                        label="Email"
                    />
                    <Form.Input
                        onChange={(e)=>handleChange(e, setEmailConfirmation)}
                        value={emailConfirmation}
                        type="text"
                        name="email confirmation"
                        placeholder="Confirm email"
                    />
                    <Form.Input 
                        onChange={(e)=>handleChange(e, setPhone)}
                        value={phone}
                        type="text"
                        name="phone"
                        placeholder="10-digit phone number"
                        label="Phone"
                    />
                    <label>Preferred Method of Contact</label>
                    <Form.Input
                        label='Email'
                        control='input'
                        type='radio'
                        name='htmlRadios'
                    />
                    <Form.Input
                        label='Phone'
                        control='input'
                        type='radio'
                        name='htmlRadios'
                    />
                </Form.Group>
        <Button type="submit">Sign Up</Button>
      </Form>
    </div>
    )

}

export default SignUp
