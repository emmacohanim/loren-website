import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState, useEffect } from 'react'

function CheckoutForm() {
    const [isPaymentLoading, setPaymentLoading] = useState(false);
    return (
      <div
        style={{
          padding: "3rem",
        }}
      >
        <div
          style={{
            maxWidth: "500px",
            margin: "0 auto",
          }}
        >
          <form
            style={{
              display: "block",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <CardElement
                className="card"
                options={{
                  style: {
                    base: {
                      backgroundColor: "white"
                    } 
                  },
                }}
              />
              <button
                className="pay-button"
                disabled={isPaymentLoading}
              >
                {isPaymentLoading ? "Loading..." : "Pay"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  export default CheckoutForm