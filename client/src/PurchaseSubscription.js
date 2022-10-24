import React, { useState, useEffect } from "react";
import { Form, Button, Radio } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

function PurchaseSubscription() {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('/packages').then(r=>r.json().then(data => {
          setPackages(data)
        }))
      }, [])

      const stripe = loadStripe(
        "pk_test_*****"
      );
      return (
        <Elements stripe={stripe}>
          <CheckoutForm stripe={stripe} />
        </Elements>
      );
    };

export default PurchaseSubscription