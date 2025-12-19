import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Chefs from "./components/Chefs";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Features from "./components/Features";
import AppSection from "./components/AppSetion";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const Home = () => {
  return (
    <div className="font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Menu />
      <Chefs />
      <Gallery />
      <AppSection />
      <Footer />
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payment />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
