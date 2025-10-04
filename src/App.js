import { useCallback } from "react";
import "./App.css";

// Assuming you fixed the module error
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

import HeroSection from "./Pages/HeroSection";
import WorkExperience from "./Pages/WorkExperience";
import ProjectList from "./Pages/Project";
import BlogSection from "./Pages/BlogSection";
import ContactFooter from "./Pages/ContactFooter";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  // Define the COMPLETE options object to ensure movement is enabled
  const snowOptions = {
    // --- TOP LEVEL BACKGROUND/INTERACTIVITY ---
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "bubble", // Changed mode for a different interactive effect
        },
        resize: true,
      },
    },

    // --- PARTICLE CONFIGURATION ---
    particles: {
      number: {
        value: 400,
        density: { enable: true, area: 800 },
      },
      color: {
        value: "#ecd1f3ff", // Light blue/cyan for snow
      },
      shape: { type: "circle" },
      opacity: { value: 1 },
      size: { value: 10 },

      // 👇 CRITICAL FIX: ENABLE MOVEMENT 👇
      move: {
        enable: true, // MUST be true to move
        speed: 2, // Falling speed
        direction: "bottom", // Makes it fall downwards
        random: false,
        straight: false,
        outModes: {
          default: "out", // Particles leave the screen
        },
      },

      // Added back the wobble and zIndex from your original configuration
      wobble: {
        enable: true,
        distance: 10,
        speed: 10,
      },
      zIndex: {
        value: { min: 0, max: 100 },
        opacityRate: 10,
        sizeRate: 10,
        velocityRate: 10,
      },
      links: {
        enable: false, // Ensure links are off for a snow look
      },
    },
  };

  return (
    <div className="App">
      {/* 1. PARTICLE BACKGROUND (FIXED POSITION, LOW Z-INDEX) */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={snowOptions} // Using the complete options object
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -2,
          // You might set a very light background color here if your body background is pure white
        }}
      />

      {/* 2. CONTENT WRAPPER (RELATIVE POSITION, HIGH Z-INDEX) */}
      <div
        className="content-wrapper"
        style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}
      >
        <div id="hero">
          <HeroSection />
        </div>

        {/* 2. EXPERIENCE SECTION (Connected to #experience) */}
        <div id="experience">
          <WorkExperience />
        </div>

        {/* 3. PROJECTS SECTION (Connected to #projects) */}
        <div id="projects">
          <ProjectList />
        </div>

        {/* 4. BLOG SECTION (Connected to #blog) */}
        <div id="blog">
          <BlogSection />
        </div>

        {/* 5. CONTACT & FOOTER SECTION (Connected to #contact) */}
        {/* The ContactFooter component contains both the contact form and the final footer */}
        <div id="contact">
          <ContactFooter />
        </div>
      </div>
    </div>
  );
}

export default App;
