import React from "react";
import "./HeroSection.css";
import assetImage from "../Pictures/cat.jpg";
import assetDoc from "../Pictures/fahad updated resume (1).pdf";
import logoImage from "../Pictures/logo.png";

const HeroSection = () => {
  const profileImageUrl = assetImage;
  const resumeDownloadUrl = assetDoc;
  const linkedInUrl = "https://www.linkedin.com/in/fahad-nawaz-579b20229/";

  return (
    <div className="hero-container">
      {/* Header / Navigation Bar */}
      <header className="navbar">
        <div className="logo-section">
          <img
            src={logoImage}
            alt="Fahad Nawaz Logo"
            // Keep size classes here for control, and remove the background/clip-path CSS rules
            className="logo-icon w-6 h-6"
          />
          <span className="logo-text">Fahad Nawaz</span>
        </div>

        {/* Navigation - Now using the primary accent color for hover */}
        <nav className="nav-links">
          {/* Navigation - We want this to be a horizontal row on DESKTOP, 
        but often HIDDEN or adjusted on MOBILE. 
        For a clean look, let's HIDE it on mobile and show it only on medium screens (desktop).
    */}
          <div className="hidden md:flex items-center gap-6">
            {/* The MD:FLEX class makes the links reappear horizontally on desktop screens and larger. */}
            <a
              href="#experience"
              className="text-gray-700 hover:text-[#d8b4fe] transition duration-300 font-medium"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-[#d8b4fe] transition duration-300 font-medium"
            >
              Projects
            </a>
            <a
              href="#blog"
              className="text-gray-700 hover:text-[#d8b4fe] transition duration-300 font-medium"
            >
              Blogs
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-[#d8b4fe] transition duration-300 font-medium"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Main Hero Content */}
      <main className="hero-content">
        {/* Profile Photo (Circular) */}
        <div className="profile-photo-wrapper">
          <img
            src={profileImageUrl}
            alt="Fahad Nawaz Professional Headshot"
            className="profile-photo"
          />
        </div>

        {/* Headline */}
        <h1 className="headline">
          Hi, I'm Fahad Nawaz. I like eveerything cloud.
        </h1>

        {/* Description Paragraph */}
        <p className="max-w-2xl text-center text-[#6b7280] text-base md:text-lg leading-relaxed mb-6">
          I'm a Software Engineer specializing with 1.5 years in telecom and OTT
          product solutions. With a passion for cloud technologies and I am AWS
          Solution Architect certified, I enjoy building scalable and resilient
          systems.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="cta-buttons">
          {/* Download Resume Link (Primary) */}
          <a
            href={resumeDownloadUrl}
            download
            className="flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#d8b4fe] text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#c084fc] transition-colors"
            role="button"
          >
            <span className="truncate">Download Resume</span>
          </a>

          {/* LinkedIn Profile Link (Secondary) */}
          <a
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-[160px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-[#e5e5e5] text-[#2d2d2d] text-base font-bold leading-normal tracking-[0.015em] hover:bg-[#d4d4d4] transition-colors"
            role="button"
          >
            <span className="truncate">LinkedIn Profile</span>
          </a>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
