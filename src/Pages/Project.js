import React from "react";
import "./Project.css";
import resumeScorer from "../Pictures/resume_scorer.png";
import extension from "../Pictures/graph.gif";
import wordpress from "../Pictures/wordpress.png";

// --- Data Model for Projects ---
const projectData = [
  {
    id: 1,
    title: "Resume Scorer using bedrock",
    description:
      "An AI-powered tool to evaluate and enhance resumes built by leveraging AWS resoures",
    tags: "Lambda, AWS Bedrock, S3, DynamoDB, API Gateway, Textract, Amplify",
    tagColor: "#4c45cfff",
    imageUrl: resumeScorer,
    imageAlt: "A pink and purple abstract gradient",
    hoverBorder: "hover:border-[#FADADD]",
    projectUrl:
      "https://www.linkedin.com/posts/fahad-nawaz-579b20229_aws-serverless-ai-activity-7369056534409994243-402Y?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADlL-S0BkSxRW_Mn7Z2XdzkfUTJXTNJwDO4", // 👈 Added Project URL
  },
  {
    id: 2,
    title: "Activity Tracker for Visual Studio Code",
    description:
      "A VS Code extension to track activity and time spent on each language by the user.",
    tags: "TypeScript, Node.js, Microsoft Visual Studio Code, Git, Data Visualization",
    tagColor: "#0f0f59ff",
    imageUrl: extension,
    imageAlt: "A light purple abstract pattern",
    hoverBorder: "hover:border-[#E6E6FA]",
    projectUrl:
      "https://marketplace.visualstudio.com/items?itemName=ActivityTrackerforvscode.Activity-Tracker01", // 👈 Added Project URL
  },
  {
    id: 3,
    title: "Wordpress Infrastructure using Terraform",
    description:
      "This project demonstrates a fully automated, production-ready AWS architecture for a dynamic WordPress.",
    tags: "Terraform, AWS EC2, RDS, Internet Gateway",
    tagColor: "#31c929ff",
    imageUrl: wordpress,
    imageAlt: "A light blue wavy texture",
    hoverBorder: "hover:border-[#E0F2F7]",
    projectUrl: "https://github.com/fahadnawaz01/Terraform-wordpress", // 👈 Added Project URL
  },
];

// --- Helper Component for a Single Project Card ---
const ProjectCard = ({ project }) => {
  return (
    <a
      href={project.projectUrl}
      target="_blank" // Opens the link in a new tab
      rel="noopener noreferrer"
      className={`project-card flex flex-col gap-4 p-6 bg-white rounded-2xl border border-transparent ${project.hoverBorder} hover:shadow-lg transition-all duration-300 no-underline text-inherit cursor-pointer`}
    >
      <div
        className="w-full aspect-video bg-cover rounded-xl bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${project.imageUrl}")` }}
        data-alt={project.imageAlt}
      ></div>
      <div>
        <p className="text-[#333333] text-xl font-bold leading-normal">
          {project.title}     
        </p>
        <p className="text-[#333333] text-base font-normal leading-normal mt-2">
          {project.description}     
        </p>
        <p
          className="text-sm font-normal leading-normal mt-4"
          style={{ color: project.tagColor }}
        >
          {project.tags}       
        </p>
      </div>
    </a>
  );
};

// --- Main ProjectList Component ---
const ProjectList = () => {
  return (
    <div className="flex flex-col py-10 md:py-16">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-wrap justify-center gap-3 p-4">
          <div className="flex w-full flex-col gap-3 text-center">
            <p className="text-[#333333] text-5xl font-bold leading-tight tracking-tighter">
              My Projects
            </p>
            <p className="text-[#333333] text-lg font-normal leading-normal">
              A showcase of my latest projects.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 mt-8">
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
