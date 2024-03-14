'use client'
import Navbar from "@/components/Navbar/Navbar";
import HeroBanner from "@/components/Hero/HeroBanner";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import Education from "@/components/Education/Education";
import ProjectsPage from "@/components/Projects/Projects";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import React from "react";
import ParticlesComponent from "@/components/Particles/Particles";

export default function Home() {
  const heroref = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const skillsRef = React.useRef<HTMLDivElement>(null);
  const educationRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: React.RefObject<HTMLDivElement>) => {

    let height = 0

    switch (ref?.current?.id || 0) {
      case 'hero':
        height = 60
        break;
      case 'about':
        height = 80
        break;
      case 'skills':
        height = 50
        break;
      case 'education':
        height = 80
        break;
      case 'projects':
        height = 80
        break;
      case 'contact':
        height = 30
        break
      default:
        break;
    }

    if (ref.current) {
      const offsetTop = ref.current.offsetTop - height;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  }; return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar scrollToRef={scrollToRef} refs={{ heroref, aboutRef, skillsRef, educationRef, projectsRef, contactRef }} />
      </div>
      <ParticlesComponent
        id={"particles-js"} />
      <div id="hero" ref={heroref}   ><HeroBanner refs={{ heroref, aboutRef, skillsRef, educationRef, projectsRef, contactRef }} scrollToRef={scrollToRef} /></div>
      <div id="about" ref={aboutRef}><About /></div>
      <div id="skills" ref={skillsRef}><Skills /></div>
      <div id="education" ref={educationRef}><Education /></div>
      <div id="projects" ref={projectsRef}><ProjectsPage /></div>
      <div id="contact" ref={contactRef}><Contact /></div>
      <Footer refs={{ heroref, aboutRef, skillsRef, educationRef, projectsRef, contactRef }} scrollToRef={scrollToRef} />
    </div>
  );
}
