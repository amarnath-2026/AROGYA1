import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Profile from "./components/Profile";
import Cover from "./Components/Cover";
import Home from "./Components/Home";
import LoginForm from "./Components/LoginForm";
import Chatbot from "./Components/Chatbot";
import CreateAccount from "./Components/CreateAccount";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>

          <Route path="/" element={<Cover />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
