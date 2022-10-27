import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Button, Radio, Dropdown } from "semantic-ui-react";

function EditAccount({setUser, isLoggedIn, accountInformation, setAccountInformation}) {
    const {firstName, lastName, email, gender, phone, preferredContactMethod} = accountInformation
    const [editedFirstName, setEditedFirstName] = useState(firstName)
    const [editedLastName, setEditedLastName] = useState(lastName)
    const [editedEmail, setEditedEmail] = useState(email)
    const [editedGender, setEditedGender] = useState(gender)
    const [editedPhone, setEditedPhone] = useState(phone)
    const [editedPreferredContactMethod, setEditedPreferredContactMethod] = useState(preferredContactMethod)
    const navigate = useNavigate()
    const [errors, setErrors] = useState("")

    function handleDeleteAccountClick() {
        fetch(`/users/${accountInformation.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }
        ).then(()=> {
            setUser(null)
            navigate("/")})
    }

    function handleChange(e, setterFunction) {
        e.preventDefault();
        setterFunction(e.target.value);
      }

      function handleSaveChanges() {
        fetch(`/users/${accountInformation.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                first_name: editedFirstName,
                last_name: editedLastName,
                gender: editedGender,
                email: editedEmail,
                phone: editedPhone,
                preferredContactMethod: editedPreferredContactMethod
            }),
        })
        .then((r) => r.json())
        .then((edited) => { 
            // setAccountInformation(edited)
            console.log(edited) 
        })
    }

    return ( 
    <div className="div" id="edit-account">
           <Form className="form" onSubmit={handleSaveChanges}>
        <Form.Group id="first-last-gender">
          <Form.Field>
            <Form.Input
              onChange={(e) => handleChange(e, setEditedFirstName)}
              label="First Name"
              placeholder={firstName}
              value={firstName}
              id="firstName"
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              onChange={(e) => handleChange(e, setEditedLastName)}
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
                setEditedGender(value);
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
            onChange={(e) => handleChange(e, setEditedEmail)}
            value={email}
            type="text"
            name="email"
            placeholder="Email"
            label="Email"
          />
          <Form.Input
            onChange={(e) => handleChange(e, setEditedPhone)}
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
              onChange={(_e, { value }) => setEditedPreferredContactMethod(value)}
            />
            <Radio
              value="phone"
              label="Phone"
              control="input"
              name="contact"
              checked={preferredContactMethod === "phone"}
              onChange={(_e, { value }) => setEditedPreferredContactMethod(value)}
            />
          </div>
        </Form.Group>
        <Button className="button" id="save-changes-btn" type="submit">Save Changes</Button>
        <Button className="button" id="delete-acct-btn" onClick={handleDeleteAccountClick}>Delete Account</Button>
      </Form>
      {/* {errors.map((err) => {
        return <p className="error">{err}</p>;
      })} */}
           
    </div>
    )
}

export default EditAccount
