import React, { useEffect, useRef } from "react";
// 1. Use 'require' instead of 'import' for better compatibility with legacy JS modules
// This is done outside the component function so it loads once at module start.
const FinisherHeader = require("finisher-header");

const FinisherBackground = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    // 2. We no longer need to check if FinisherHeader is available,
    // but we ensure the DOM node is ready.
    if (headerRef.current) {
      // 3. The constructor call remains the same
      new FinisherHeader({
        header: headerRef.current,
        count: 35,
        size: {
          min: 5,
          max: 120,
          pulse: 0.1,
        },
        speed: {
          x: { min: 0, max: 0.2 },
          y: { min: 0, max: 0.4 },
        },
        colors: {
          background: "#ebdeff",
          particles: ["#ffe960", "#87ddfe", "#ff8181", "#fc7bfc", "#e2ffa5"],
        },
        blending: "overlay",
        opacity: {
          center: 0,
          edge: 0.7,
        },
        skew: -2,
        shapes: ["c"],
      });
    }
  }, []);

  return (
    <div
      ref={headerRef}
      className="finisher-header"
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "fixed", // Use fixed for full viewport background
        top: 0,
        left: 0,
        zIndex: -2,
      }}
    ></div>
  );
};

export default FinisherBackground;
