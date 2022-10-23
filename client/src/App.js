import './App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import { useNavigate} from 'react-router-dom';
import NavBarLoggedOut from "./NavBarLoggedOut";
import NavBarLoggedIn from "./NavBarLoggedIn";
import Home from "./Home";
import { Routes, Route } from "react-router-dom"
import About from "./About";
import Services from "./Services";
import PurchaseSubscription from "./PurchaseSubscription";
import Contact from "./Contact";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import LogOut from "./LogOut";


function App() {

  // add conditional rendering for navigation bars
  //    if logged in --> render navigation bar logged in
  //    if not logged in --> render navigation bar not logged in

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
 
  useEffect(() => {
    fetch('/my_account').then(r=>r.json().then(data => {
      if (r.ok){
      setUser(data);
      // return (
      //   <NavBarLoggedIn />
      // )
      // } else {
      //   return (
      //     <NavBarLoggedOut />
      //   )
      }
    }))
  }, [])

  function handleLogOutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
      navigate("/")
    })
  }

  return (
    <div className="App">
      {user ? <NavBarLoggedIn handleLogOutClick={handleLogOutClick}/> : <NavBarLoggedOut />}
      <NavBar/>
      <Routes>
        <Route className="route" path="/" element={<Home />} />
        <Route className="route" path="/about" element={<About />} />
        <Route className="route" path="/services" element={<Services />} />
        <Route className="route" path="/subscribe" element={<PurchaseSubscription/>}/>
        <Route className="route" path="/contact" element={<Contact/>}/>
        <Route className="route" path="/log-in" element={<LogIn onLogin={setUser} isLoggedIn={!!user}/>} />
        <Route className="route" path="/sign-up" element={<SignUp onLogin={setUser} isLoggedIn={!!user} />} />
        <Route className="route" path="/log-out" element={<LogOut handleLogOutClick={handleLogOutClick}/>}/>
      </Routes>
    </div>
  );
}

export default App;