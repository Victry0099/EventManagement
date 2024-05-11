import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "../validate/ContactForm";
import PhotoGrapher from "../pages/PhotoGrapher";
export default function Router1() {
  return (
    <>
      <Router>
        {/* <Navbar/> */}
        <Routes>
          <Route path="/v" element={<ContactForm />} />
          <Route path="/router/photographer" element={<PhotoGrapher />} />
        </Routes>
      </Router>
    </>
  );
}
