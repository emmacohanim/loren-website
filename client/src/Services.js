import React, { useState, useEffect } from 'react';
import Service from './Service';

function Services({services}) {
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