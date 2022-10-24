import React, { useState, useEffect } from "react";
import { Form, Button, Radio, Checkbox, Dropdown, Popup } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { sendForm, send } from "emailjs-com";
import emailjs from "@emailjs/browser";
import {useNavigate} from 'react-router-dom'

// message is being sent, but nothing else is

function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirmation, setEmailConfirmation] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] = useState("");
  const [gender, setGender] = useState("");
  const [servicesInterestedIn, setServicesInterestedIn] = useState([]);
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  var templateParams = {
    firstname: firstName,
    lastname: lastName,
    gender: gender,
    servicesInterestedIn: servicesInterestedIn,
    email: email,
    phone: phone,
    preferredContactMethod: preferredContactMethod,
    message: message, // only parameter that is showing up in email with response
    // user not receiving auto reply
    // gender dropdown not working
    // service dropdown not working
  };

  function handleChange(e, setterFunction) {
    e.preventDefault();
    setterFunction(e.target.value);
  }

  const toggleService = (e, data) => {
    if (servicesInterestedIn.find((s) => s === data.label)) {
      setServicesInterestedIn(
        servicesInterestedIn.filter((s) => s !== data.label)
      );
    } else {
      setServicesInterestedIn((services) => [...services, data.label]);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(templateParams);
    emailjs
      .send(
        "contact-form",
        "template_kpowdaa",
        templateParams,
        "Ig-z_52Clt7y91Jng"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text)
          alert("Inquiry submitted!")
          navigate("/")

        },
        function (error) {
          console.log("FAILED...", error);
          alert({ errors });
        }
      );
  };

  return (
    <Form onSubmit={onSubmit}>
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
              { key: 6, text: "Prefer not to respond", value: "prefer not to respond"}  
            ]}
            selection
            value={gender}
            placeholder="Gender"
          />
        </Form.Field>
      </Form.Group>
      <Form.Group id="services-and-message">
        <label>Service(s) I'm inquiring about</label>
        <Form.Field>
          <Checkbox label="Personal Training" onChange={toggleService}/>
          <Checkbox label="Mindfulness Coaching" onChange={toggleService} />
          <Checkbox label="Competition Prep" onChange={toggleService} />
          <Checkbox label="Posing" onChange={toggleService} />
          <Checkbox label="Motivational speaking" onChange={toggleService} />
        </Form.Field>
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
      <Form.Group>
        <Form.Input
          onChange={(e) => handleChange(e, setMessage)}
          type="text"
          label="Message:"
          placeholder="Write your message here..."
          value={message}
        />
      </Form.Group>
      <Button type="submit">Submit Inquiry</Button>
    </Form>
  );
}

export default Contact;
