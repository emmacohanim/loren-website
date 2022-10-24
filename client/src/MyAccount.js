import React, { useState, useEffect } from 'react';

function MyAccount({onLogin, isLoggedIn}) {
    const [accountInformation, setAccountInformation] = useState([])

    useEffect(()=> {
        fetch("/my_account")
        .then(r=>r.json())
        .then((data)=> {
            setAccountInformation(data)
            console.log(data)
        })

    }, [])

    function handleRender() {
        return (
            <p>Edit My Account!</p>
        )
    }

    return (
        <div>
            <button onClick={handleRender}>Edit Account</button>
            <button onClick={handleRender}>Change Password</button>
            <h3>Account Information</h3>
            <p>First Name: {accountInformation.first_name}</p>
            <p>Last Name: {accountInformation.last_name}</p>
            <p>Gender: {accountInformation.gender}</p>
            <p>Email: {accountInformation.email}</p>
            <p>Phone: {accountInformation.phone}</p>

            <p>Username: {accountInformation.username}</p>
        </div>
    )

}

export default MyAccount;