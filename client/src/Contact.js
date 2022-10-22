import React, { useState, useEffect } from "react";
import { Form, Button, Radio } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { sendForm, send } from "emailjs-com";
import emailjs from '@emailjs/browser';

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
  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
}

  function handleChange(e, setterFunction) {
    e.preventDefault()
    setterFunction(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    generateContactNumber();
    emailjs.send('contact-form', 'template_kpowdaa', templateParams, 'Ig-z_52Clt7y91Jng')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
       alert("Inquiry submitted!")
    }, function(error) {
       console.log('FAILED...', error);
       alert({errors})
    });
    // sendForm("default_service", "template_kpowdaa", "#contact-form").then(
    //   function (response) {
    //     console.log("SUCCESS!", response.status, response.text);
    //   },
    //   function (error) {
    //     console.log("FAILED...", error);
    //   }
    // );
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
          <select className="ui dropdown" id="gender-select" onSelect={(e) => setGender(e.target.value)}>
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="nonbinary">Nonbinary</option>
            <option value="transgender">Transgender</option>
            <option value="other">Other</option>
            <option value="prefer not to answer">Prefer not to answer</option>
          </select>
        </Form.Field>
      </Form.Group>
      <Form.Group id="services-and-message">
        <label>Service(s) I'm inquiring about</label>
        <Form.Field>
          <select name="services" multiple="" className="ui fluid dropdown">
            <option value="">Services</option>
            <option value="training-or-comp-prep">
              Personal training/Competion Prep
            </option>
            <option value="motivational speaking">Motivational speaking</option>
            <option value="mindfulness coaching">Mindfulness coaching</option>
          </select>
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
        {/* <Form.Input
                        onChange={(e)=>handleChange(e, setEmailConfirmation)}
                        value={emailConfirmation}
                        type="text"
                        name="email confirmation"
                        placeholder="Confirm email"
                    /> */}
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
      <Form.Input type="hidden" name="contact-number" value={contactNumber} />
      <Button type="submit">Submit Inquiry</Button>
    </Form>
  );
}

export default Contact;
