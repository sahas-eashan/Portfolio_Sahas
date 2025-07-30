import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Achievements from "./Achievements/Achievements";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 min-h-screen text-white overflow-x-hidden transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
