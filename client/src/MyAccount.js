import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MyAccount({onLogin, isLoggedIn, accountInformation}) {
    const navigate = useNavigate()

    function handleRender() {
        return (
            <p>Edit My Account!</p>
        )
    }

    function handleEditClick() {
        navigate("/my-account/edit")
    }

    return (
        <div>
            <button onLogin={onLogin} isLoggedIn={isLoggedIn} onClick={handleEditClick}>Edit Account</button>
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