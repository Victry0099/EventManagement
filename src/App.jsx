import { useState } from "react";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Engagement from "./pages/engagement/Engagement";
import Wedding from "./pages/wedding/Wedding";
import Birthday from "./pages/birthday/Birthday";
import SignIn from "./validate/SignIn";
import "./App.css";
import Login from "./validate/Login";
import Contact from "./validate/ContactForm";
import ContactForm from "./validate/ContactForm";

import Router1 from "./Router/Router";
function App() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wedding" element={<Wedding />}></Route>
          <Route path="/birthday" element={<Birthday />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/router" element={<Router1 />} />
        </Routes>

        <ContactForm />
        <Footer />
      </Router>
    </>
  );
}

export default App;
