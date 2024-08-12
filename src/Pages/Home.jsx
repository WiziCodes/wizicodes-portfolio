import React from "react";
import LandingPage from "../components/LandingPage";
import Nav from "../components/Nav";
import About from "../components/About";
import Experience from "../components/Experience";
import LangLogos from "../components/LangLogos";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Animated from "../components/Animated";
import Expertise from "../components/Expertise";

function Home() {
  return (
    <div className="bg-white dark:bg-[#050818]">
      <Nav />
      <LandingPage />
      <About />
      <Experience />
      <Expertise />
      <LangLogos />
      <Projects />
      <Testimonials />
      <Contact />
      <Animated />
    </div>
  );
}

export default Home;
