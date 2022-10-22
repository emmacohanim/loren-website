import React, { useState, useEffect } from "react";
import { Form, Button, Radio } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

function PurchaseSubscription() {
    const [packages, setPackages] = useState([])

    useEffect(() => {
        fetch('/packages').then(r=>r.json().then(data => {
          setPackages(data)
        }))
      }, [])

return (
    <div>
    <p>New subscription</p>
    <div>
            {/* {services.map(service=> {
              return <Service service={service} options={service.packages}/>
              
    })} */}
        </div>
        </div>
)

}

export default PurchaseSubscription