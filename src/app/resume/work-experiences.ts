import { WorkExperience } from "./types";

const impact: WorkExperience = {
  company: "Impact Crew",
  title: "Senior Software Engineer",
  start: "January 2023",
  end: "October 2024",
  technologies: [
    "TypeScript",
    "React",
    "Next.js",
    "MaterialUI",
    "Figma",
    "Node.js",
    "PostgreSQL",
    "GraphQL",
  ],
  descriptions: [
    "Developed full-stack features from design/requirement gathering to delivery for the movie industry including hiring tools, chat, social media features, and fully-featured, production-specific “CrewChat” with file management and distribution",
    "Refactored email client to create type-safe correlations between email templates and dynamic template data for SendGrid",
    "Created series of cron jobs to send notification emails to users when they became eligible for a specific email campaign",
    "Significant modification to customer tool to work when a long-held data paradigm was changed; had to exist in parallel behind a feature flag",
  ],
};

const avise: WorkExperience = {
  company: "Avise",
  title: "Fullstack Engineer",
  start: "October 2021",
  end: "November 2022",
  technologies: [
    "TypeScript",
    "React",
    "Node.js",
    "Express.js",
    "Prisma",
    "PostgreSQL",
  ],
  descriptions: [
    "Delivered fullstack features for accounting software in Typescript with a React frontend and Node backend.",
    "Added openapi-typescript to backend to marry types across API contract into codebase.",
    "Worked closely with Product team to design efficient and extensible solutions. Routinely received praise for the critical eye and open-minded problem solving I brought to the discussions.",
  ],
};

const nike: WorkExperience = {
  company: "Nike",
  title: "Software Engineer",
  start: "December 2018",
  end: "October 2021",
  technologies: [
    "React",
    "Node.js",
    "AWS: CloudFormation, API Gateway, Lambda, DynamoDB",
  ],
  descriptions: [
    "Managed AWS cloud services, generating all resources within CloudFormation",
    "Designed lambda for generating web viewable receipts along with support tool for finding discrepancies between locale data.",
    "Created Node.js lambda template for Retail Operations backend services, used for 15+ lambdas.",
    "Created and maintained developer tools for automating tasks; immediate cost savings in engineering hours.",
    "Migrated React app from EC2 to static S3 page with Lambda backend.",
    "Optimized Retail Label generator to get Lambda execution times from 10+ seconds down under 2.",
    "Headed initiative to improve testing within team, including TDD.",
    "Mentored junior engineers",
  ],
};

const cPacket: WorkExperience = {
  company: "cPacket Networks",
  title: "Software Engineer",
  start: "February 2017",
  end: "December 2018",
  technologies: ["Python", "Docker", "MongoDB", "TCL"],
  descriptions: [
    "Created production tests to verify systems before shipping. Custom framework built in Python. Replaces old production test system to be more customizable, resistant to failure, and quicker to report problems to avoid wasted time. Interfaces with high performance traffic generator through TCL and web APIs. Monitors status and checks results from product through web API.",
  ],
};

const workExperiences = [impact, avise, nike, cPacket];

export default workExperiences;
