import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'

function EditAccount({setUser, isLoggedIn, accountInformation, setAccountInformation}) {
    const {firstName, lastName, email, gender, phone, preferredContactMethod} = accountInformation
    const navigate = useNavigate()

    function handleDeleteAccountClick() {
        fetch(`/users/${accountInformation.id}`, {
            method: 'DELETE',
            // headers: {
            //     'Content-Type': 'application/json',
            // }
        }
        ).then(()=> {
            setUser(null)
            navigate("/")})
    }




    return ( 
    <div>
           <p>Edit My Account</p>
           <p>{email}</p>
           <button onClick={handleDeleteAccountClick}>Delete Account</button>
    </div>
    )
}

export default EditAccount
