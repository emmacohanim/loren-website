import React from 'react';
import ServiceOption from './ServiceOption';

function Service({service, options}) {


return (
    <div className="service">
        <h3>{service.type_of_service}</h3>
        <p>{service.description}</p>
        {service.duration_of_session_in_minutes ? <p>{service.duration_of_session_in_minutes} minutes per session</p> : null}
        {options.map(option=> {
            return (
            <p>
                {option.number_of_sessions ? <span>{option.number_of_sessions} session(s) |</span> : null}
                {option.frequency ? <span> {option.frequency} |</span> : null}  
                {option.additional_info ? <span> {option.additional_info} |</span> : null}
                ${option.price}
                </p>
            )
        } )}
    </div>
)

}
export default Service;