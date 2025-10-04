import React from "react";
import assetImage from "../Pictures/csg.webp";
// NOTE: This component assumes Tailwind CSS is configured in your project
// and that the required custom colors (#D8BFD8, #F8F8F8, etc.) are available.

const WorkExperience = () => {
  // Helper component for a single job entry (DRY Principle)
  const JobEntry = ({
    dates,
    title,
    company,
    description,
    technologies,
    isRightSide,
    imagePath,
  }) => {
    // --- DESKTOP POSITIONING LOGIC ---
    // 1. Content Card (Job Details) placement classes
    const contentClasses = isRightSide
      ? "md:col-start-2 md:pl-12" // Starts in the second column
      : "md:col-start-1 md:pr-12 md:text-right"; // Starts in the first column, aligned right

    // 2. Dates/Period placement classes
    const dateClasses = isRightSide
      ? "md:col-start-1 md:text-right mb-4 md:mb-0" // Starts in the first column
      : "md:col-start-2 md:text-left mb-4 md:mb-0"; // Starts in the second column

    // 3. Tag alignment classes (Aligns tags with the content card)
    const tagAlignment = isRightSide ? "" : "md:justify-end";

    // --- MOBILE/COMMON TIMELINE STYLING ---
    // These styles draw the vertical line and circles on the left for mobile view
    const mobileTimelineClasses = `
            pl-8 relative 
            before:content-[''] before:absolute before:left-0 before:top-2 
            before:w-4 before:h-4 before:bg-[#D8BFD8] before:rounded-full 
            before:border-4 before:border-[#F8F8F8] md:before:hidden 
            before:transform before:-translate-x-1/2
        `;

    const imageColumnClasses = isRightSide
      ? "md:col-start-1 md:pr-12 md:flex md:justify-end" // Image on LEFT side
      : "md:col-start-2 md:pl-12 md:flex md:justify-start"; // Image on RIGHT side

    // Determine the content order based on alignment (important for the desktop grid)
    const imageOrderClass = isRightSide ? "" : "md:row-start-1";

    return (
      <div className="relative md:grid md:grid-cols-2 md:gap-x-12 mb-16">
        {/* 1. Dates/Period (Swaps based on isRightSide) */}   {" "}
        {imagePath && (
          <div
            className={`hidden md:flex items-center ${imageColumnClasses} ${imageOrderClass}`}
          >
                       {" "}
            <img
              src={imagePath}
              alt={`${title} visual`}
              className="max-h-32 max-w-full object-contain p-2" // Added p-2 for some spacing from edge
            />
                     {" "}
          </div>
        )}
        <div className={dateClasses}>
          <p className="text-[#636388] text-base font-normal leading-normal">
            {dates}
          </p>
        </div>
        {/* 2. Desktop Timeline Circle (Only visible on MD screens, always in the center gap) */}
        <div
          className="absolute left-1/2 top-1 -translate-x-1/2 w-4 h-4 bg-[#D8BFD8] rounded-full border-4 border-[#F8F8F8] hidden md:block"
          aria-hidden="true"
        ></div>
        {/* 3. Job Details Card (The core alternating element) */}
        <div
          // CRITICAL FIX: The row-start and content position swap the card's column on the left side
          className={`${contentClasses} ${mobileTimelineClasses} ${
            isRightSide ? "" : "md:row-start-1"
          }`}
        >
          {/* Mobile Vertical Line */}
          <div
            className="md:hidden absolute top-5 left-[-1px] h-[calc(100%_-_20px)] w-0.5 bg-[#D8BFD8]"
            aria-hidden="true"
          ></div>

          {/* Job Card Content */}
          <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4">
            <div>
              <p className="text-[#333333] text-xl font-bold leading-tight">
                {title}
              </p>
              <a
                className="text-[#636388] text-base font-medium leading-normal hover:text-[#D8BFD8]"
                href="#"
              >
                {company}
              </a>
            </div>

            {/* Description List */}
            <ul className="list-disc list-inside text-[#333333] text-base font-normal leading-normal space-y-2">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            {/* Technology Tags */}
            <div className={`flex gap-2 flex-wrap ${tagAlignment}`}>
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex h-7 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f0f0f4] px-3"
                >
                  <p className="text-[#333333] text-xs font-medium leading-normal">
                    {tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // --- Data Model ---
  const jobData = [
    {
      dates: "2024 Sept - Present",
      title: "Software Developer Engineer",
      company: "CSG Internationals",
      description: [
        "Utilized Postman and wrote JavaScript scripts to automate repetitive configuration and testing tasks, significantly improving workflow efficiency.",
        "Developed and executed SQL queries to retrieve and analyze transaction, customer, and user data.",
        "Identified and pinpointed patterns, errors, and anomalies in data to diagnose and resolve system problems.",
        "Collaborated with cross-functional teams to ensure accurate product and billing plan implementation.",
      ],
      technologies: [
        "Node.js",
        "SQL",
        "Javascript",
        "Postman",
        "Excel",
        "Data Analysis",
        "Configuration",
      ],
      isRightSide: true, // Content on the RIGHT for the first entry
      imagePath: assetImage,
    },
    {
      dates: "2024 March - 2022 Sept",
      title: "SDE Intern",
      company: "CSG Internationals",
      description: [
        "Gained foundational experience in team collaboration and company operations.",
        "Developed and executed SQL queries to retrieve and analyze transaction, customer, and user data.",
        "Identified and pinpointed patterns, errors, and anomalies in data to diagnose and resolve system problems.",
        "Collaborated with cross-functional teams to ensure accurate product and billing plan implementation.",
      ],
      technologies: ["Node.js", "Excel", "Configuration", "C#", "Postman"],
      isRightSide: false, // Content on the LEFT for the second entry
    },
  ];

  // --- Component Render ---
  return (
    <div className="flex flex-col gap-12 py-10">
      {/* Section Header */}   {" "}
      <div className="flex w-full flex-wrap gap-3 p-4 md:ml-32 md:justify-start">
        {/* The outer div is now full width, and explicitly justifies content to the start (left) on desktop. */}

        <div className="flex min-w-72 flex-col gap-0">
          {/* The text content remains unchanged */}
          <p className="text-[#333333] text-4xl font-black leading-tight tracking-[-0.033em]">
            Work Experience
          </p>
          <p className="text-[#636388] text-base font-normal leading-normal">
            A timeline of my career journey.
          </p>
        </div>
      </div>
      {/* Timeline Container */}
      <div className="relative px-4">
        {/* Desktop Vertical Line (Hidden on mobile, uses absolute positioning) */}
        <div
          className="absolute left-1/2 top-0 h-full w-0.5 bg-[#D8BFD8] hidden md:block"
          aria-hidden="true"
        ></div>

        {/* Render Job Entries */}
        {jobData.map((job, index) => (
          <JobEntry
            key={index}
            dates={job.dates}
            title={job.title}
            company={job.company}
            description={job.description}
            technologies={job.technologies}
            // Use index to determine alternation: true, false, true...
            isRightSide={index % 2 === 0}
            imagePath={job.imagePath}
          />
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
