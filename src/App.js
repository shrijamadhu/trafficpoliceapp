import React, { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AllProductsAdminDetails from "./AllProductsAdminDetails";
import "./App.css";
import AuthDecider from "./AuthDecider/AuthDecider";
import EmergencyForm from "./Emergency/EmergencyForm";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./NavBar/NavBar";
import ViolationForm from "./Violation/ViolationForm";

function App() {
  const [user, setUser] = useState(null);
  //   const [userN, setUserN] = useState(null);

  //   if (user) {
  //     localStorage.setItem("userDetails", userN);
  //   }
  //   console.log(user, "user----------");

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/violationForm" element={<ViolationForm />} />
          <Route path="/emergencyForm" element={<EmergencyForm />} />
          <Route
            path="/auth"
            element={<AuthDecider user={user} setUser={setUser} />}
          />
          <Route path="/allrequests" element={<AllProductsAdminDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
