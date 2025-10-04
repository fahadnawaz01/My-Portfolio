import React, { useState, useCallback } from "react";

// NOTE: This component assumes Tailwind CSS and icons are linked.

const ContactFooter = () => {
  // 1. State to manage the visibility of the copy confirmation popup
  const [isCopied, setIsCopied] = useState(false);

  // Define brand colors and links as constants
  const accentColor = "text-pink-400";
  const accentBg = "bg-[#FADADD]";
  const emailAddress = "mfn011001@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/fahad-nawaz-579b20229/";
  const portfolioOwner = "Fahad Nawaz";

  // 2. Function to copy email to clipboard
  const handleCopy = useCallback(async () => {
    try {
      // Use the modern Clipboard API
      await navigator.clipboard.writeText(emailAddress);

      // Show the "Copied!" message
      setIsCopied(true);

      // Hide the message after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy email address: ", err);
      // Optionally provide a fallback alert here
      alert(`Could not automatically copy email. Please copy: ${emailAddress}`);
    }
  }, [emailAddress]);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            {/* -------------------- Contact Section -------------------- */}
            <section className="px-4 md:px-10 py-20">
              <div className="flex flex-col items-center gap-12">
                {/* Header Text */}
                <div className="flex flex-col gap-4 text-center">
                  <h2
                    className={`text-sm font-semibold uppercase tracking-widest ${accentColor}`}
                  >
                    Let's Connect
                  </h2>
                  <h1 className="text-[#333333] text-4xl font-bold tracking-tight md:text-5xl">
                    Get In Touch
                  </h1>
                  <p className="text-gray-600 max-w-2xl mx-auto mt-2 text-lg">
                    I'd love to hear from you! Whether you have a question or
                    just want to say hi, feel free to reach out.
                  </p>
                </div>

                {/* Primary CTA (Copy Email) */}
                <div className="w-full max-w-md flex flex-col items-center gap-6 relative">
                  {/* 3. The clickable button/div */}
                  <div
                    className={`w-full ${accentBg} text-[#333333] font-bold py-4 px-6 rounded-lg hover:bg-pink-200 transition-all duration-300 ease-in-out cursor-pointer hover:scale-[1.02] flex items-center justify-center gap-2 text-lg relative`}
                    onClick={handleCopy}
                    role="button" // Indicates it's clickable
                  >
                    <span className="material-symbols-outlined">email</span>
                    {/* Fallback mailto link (hidden by the copy logic, but useful for accessibility/context) */}
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-inherit no-underline"
                    >
                      {emailAddress}
                    </a>
                  </div>

                  {/* 4. The Confirmation Popup */}
                  {isCopied && (
                    <div className="absolute bottom-[-40px] px-3 py-1 bg-green-500 text-white rounded shadow-lg transition-opacity duration-300 z-10">
                      Email copied! 🚀
                    </div>
                  )}

                  {/* Secondary CTA (LinkedIn) */}
                  <div className="flex flex-col items-center gap-4 mt-8">
                    <p className="text-gray-600">
                      You can also find me on LinkedIn:
                    </p>
                    <div className="flex gap-6">
                      <a
                        className={`text-gray-500 hover:${accentColor} transition-colors duration-300`}
                        href={linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                      >
                        <i className="fab fa-linkedin-in fa-2x"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* -------------------- Footer -------------------- */}
            <footer className="text-center py-8 border-t border-gray-200 mt-20">
              <p className="text-gray-500 text-sm">
                Would you rather be a country side mouse or a city mouse? I
                would rather be country side mouse.
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFooter;
