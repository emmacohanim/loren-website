import React, { useState, useEffect } from "react";
import { Form, Button, Radio, Dropdown } from "semantic-ui-react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useNavigate } from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";

function PurchaseSubscription({isLoggedIn}) {
    const [packages, setPackages] = useState([])
    const navigate = useNavigate()
    const [purchase, setPurchase] = useState([])

    useEffect(() => {
        if (!isLoggedIn) {
          navigate("/log-in")
        } else {
          fetch('/packages').then((r)=>r.json()).then(data => {
            setPackages(data)
          })
        }
        
      }, [])

      const stripe = loadStripe(
        "pk_test_*****"
      );
      return (
        <div>
          <Elements stripe={stripe}>
            <CheckoutForm stripe={stripe} />
          </Elements>
        </div>
      );
    };

export default PurchaseSubscription