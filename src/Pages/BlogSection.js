import React from "react";
import "./BlogSection.css";
import terraform from "../Pictures/wordpress.png";
import resume from "../Pictures/resume_scorer_architecture.png";
import cloudformation from "../Pictures/cloudformation.webp";
import textract from "../Pictures/textract.webp";
import serverless from "../Pictures/serverless.webp";
import staticImage from "../Pictures/static.webp";

// --- Data Model for Blog Articles (Updated with 'url' property) ---
const articleData = [
  {
    id: 1,
    title: "Terraforming the Cloud: Building a WordPress Site with Terraform",
    date: "September 14, 2025",
    readTime: "5 min read",
    excerpt:
      "Exploring Infrastructure as Code, I used Terraform to deploy a multi-tier WordPress stack on AWS, leveraging its power for reusable components and streamlined debugging.",
    imageUrl: terraform,
    imageAlt: "Terraform AWS WordPress",
    // ADDED: Placeholder URL for the Terraform blog post
    url: "https://www.linkedin.com/pulse/terraforming-cloud-building-wordpress-site-terraform-fahad-nawaz-oijwf/?trackingId=TLEfClaPl8EuJ8xpdT3rGA%3D%3D",
  },
  {
    id: 2,
    title: "I Tried to Build an AI-Powered Serverless App!!",
    date: "September 3, 2025",
    readTime: "5 min read",
    excerpt:
      "I designed and built an AI-powered resume scoring application by creating an event-driven pipeline that uses S3, Textract, Lambda, Bedrock (Claude 3 Haiku), and DynamoDB",
    imageUrl: resume,
    imageAlt: "AI Resume Scorer Architecture",
    // ADDED: Placeholder URL for the AI Resume Scorer blog post
    url: "https://www.linkedin.com/pulse/i-tried-build-ai-powered-serverless-app-fahad-nawaz-6u1rf/?trackingId=Nl87f8xvZEWwif7ZYj87gQ%3D%3D",
  },
  {
    id: 3,
    title: "What is AWS CloudFormation?",
    date: "August 26, 2025",
    readTime: "6 min read",
    excerpt:
      "Using AWS CloudFormation, I defined and deployed a serverless, event-driven architecture for asynchronous document processing with Amazon Textract, demonstrating proficiency in IaC for repeatable deployments, simplified infrastructure management, and change tracking.",
    imageUrl: cloudformation,
    imageAlt: "User-Centric Design",
    // ADDED: Placeholder URL for the Design blog post
    url: "https://medium.com/@mfn011001/what-is-aws-cloudformation-f46d18686836",
  },
  {
    id: 4,
    title: "How to Process Multi-Page PDFs Using Asynchronous AWS Textract.",
    date: "August 23, 2025",
    readTime: "9 min read",
    excerpt:
      "I architected a robust, serverless event-driven pipeline on AWS for asynchronous PDF processing using S3, Lambda, SNS, and Textract to reliably extract structured data (like key-value pairs) from multi-page documents.",
    imageUrl: textract,
    imageAlt: "Personal Branding",
    // ADDED: Placeholder URL for the Personal Brand blog post
    url: "https://medium.com/@mfn011001/how-to-process-multi-page-pdfs-using-asynchronous-aws-textract-ed030c41cff2",
  },
  {
    id: 5,
    title: "Building Serverless Web Applications: A Step-by-Step Guide.",
    date: "August 17, 2025",
    readTime: "5 min read",
    excerpt:
      "A step-by-step guide to building a fully functional serverless web application where an Amplify-hosted frontend connects to a Lambda/DynamoDB backend via API Gateway, showcasing the power of serverless architecture for simple, scalable solutions.",
    imageUrl: serverless,
    imageAlt: "Personal Branding",
    // ADDED: Placeholder URL for the Personal Brand blog post
    url: "https://medium.com/@mfn011001/building-serverless-web-applications-a-step-by-step-guide-bfaad752ae25",
  },
  {
    id: 6,
    title: "Secure Static Hosting: A Guide to S3, CloudFront, and OAC",
    date: "August 16, 2025",
    readTime: "7 min read",
    excerpt:
      "To securely host a static website on AWS, I implemented the CloudFront and OAC architecture, making the source S3 bucket private and routing all traffic through the CDN. This approach optimizes performance and protects resources by ensuring only CloudFront can access the static files.",
    imageUrl: staticImage,
    imageAlt: "Personal Branding",
    // ADDED: Placeholder URL for the Personal Brand blog post
    url: "https://medium.com/@mfn011001/building-serverless-web-applications-a-step-by-step-guide-bfaad752ae25",
  },
];

// --- Helper Component for a Single Blog Card (Updated to use article.url) ---
const BlogCard = ({ article }) => {
  return (
    <div className="p-4 group">
      {/* The entire card is wrapped in a clickable link (<a>) */}
      <a
        className="block rounded-xl overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1"
        // UPDATED: Using article.url here for redirection
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Card Container */}
        <div className="bg-white rounded-xl border border-gray-200 group-hover:border-pink-200">
          {/* Image */}
          <img
            alt={article.imageAlt}
            className="article-image rounded-t-xl"
            src={article.imageUrl}
          />

          {/* Text Content */}
          <div className="p-6">
            <p className="text-[#333333] text-xl font-semibold leading-tight tracking-[-0.015em] mb-2">
              {article.title}
            </p>

            {/* Date and Read Time */}
            <div className="flex items-center text-[#636388] text-sm font-normal leading-normal mb-3">
              <span>{article.date}</span>
              <span className="mx-2">•</span>
              <span>{article.readTime}</span>
            </div>

            {/* Excerpt */}
            <p className="text-[#636388] text-base font-normal leading-normal">
              {article.excerpt}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

// --- Main BlogSection Component ---
const BlogSection = () => {
  return (
    // The main container to apply the Poppins font style
    <div className="blog-section-container w-full">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 md:px-10 lg:px-20 xl:px-40 flex flex-1 justify-center py-10 lg:py-20">
          <div className="layout-content-container flex flex-col max-w-6xl flex-1">
            {/* Section Header */}
            <h2 className="text-[#333333] text-4xl font-bold leading-tight tracking-tight px-4 pb-8 pt-5 text-center">
              My Blogs
            </h2>

            {/* Articles Grid (Responsive 2-column layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articleData.map((article) => (
                <BlogCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
