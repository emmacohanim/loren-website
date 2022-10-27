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
import MyAccount from "./MyAccount";
import EditAccount from './EditAccount';

function App() {

  // add conditional rendering for navigation bars
  //    if logged in --> render navigation bar logged in
  //    if not logged in --> render navigation bar not logged in

  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [accountInformation, setAccountInformation] = useState([])
  const [services, setServices] = useState([])

    useEffect(()=> {
        fetch("/my_account")
        .then(r=>r.json())
        .then((data)=> {
            setAccountInformation(data)
            console.log(data)
        })

    }, [])
 
  useEffect(() => {
    fetch('/my_account').then(r=>r.json().then(data => {
      if (r.ok){
      setUser(data);
      setAccountInformation(data);
      
      }
    }))
  }, [])

  useEffect(() => {
    fetch('/services')
    .then(r=>r.json())
    .then(data=> setServices(data))
  },[])


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
        <Route className="route" path="/services" element={<Services services={services}/>} />
        <Route className="route" path="/subscribe" element={<PurchaseSubscription isLoggedIn={!!user} services={services}/>}/>
        <Route className="route" path="/contact" element={<Contact/>}/>
        <Route className="route" path="/log-in" element={<LogIn onLogin={setUser} isLoggedIn={!!user} />} />
        <Route className="route" path="/sign-up" element={<SignUp onLogin={setUser} isLoggedIn={!!user} />} />
        <Route className="route" path="/log-out" element={<LogOut handleLogOutClick={handleLogOutClick}/>}/>
        <Route className="route" path="/my-account" element={<MyAccount onLogin={setUser} isLoggedIn={!!user} accountInformation={accountInformation}/>} />
        <Route className="route" path="/my-account/edit"  element={<EditAccount setUser={setUser} isLoggedIn={!!user} accountInformation={accountInformation} setAccountInformation={setAccountInformation}/>}/>
      </Routes>
    </div>
  );
}

export default App;