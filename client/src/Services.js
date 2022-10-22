import React, { useState, useEffect } from 'react';
import Service from './Service';

function Services() {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services').then(r=>r.json().then(data => {
          setServices(data)
        }))
      }, [])
    

    return (
        <div>
          <h1>Services</h1>
            {services.map(service=> {
              return <Service service={service} options={service.packages}/>
              
    })}
        </div>
    )

}

export default Services