"use client";
import { Box, styled } from "@mui/material";
import cultureParseScreenshot from "./assets/culture-parse-screenshot.jpg";
import aoc2024Screenshot from "./assets/aoc-2024-screenshot.jpg";
import Project, { ProjectCardProps } from "./components/project-card";

const PageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  padding: 16,
  width: "100%",
  alignItems: "center",
});

const projects: ProjectCardProps[] = [
  {
    title: "Advent of Code - 2024",
    image: aoc2024Screenshot,
    description: `
      A Next.js/React app that I created to solve the Advent of Code 2024 puzzles. There's not a
      ton of reason to have built these functions into a web app but I've really enjoyed the
      practice and am prouder of parts of the app structure than the actual solvers, particularly
      the reusable Day component that renders each page.
    `,
    link: "https://aloha-kiersey-aoc-2024.netlify.app/day-one",
    sourceLinks: [
      {
        label: "advent-of-code-2024",
        link: "https://github.com/jonkiersey/advent-of-code-2024",
      },
    ],
  },
  {
    title: "Culture Parse",
    image: cultureParseScreenshot,
    description: `
      A small React app I created for my wife after seeing her do a repetitive manual task.
      It was a process of needing to go through a large excel file full of employee sentiments
      and her job was to collate like responses and return a report in a specific format. This
      tool split the entries automatically and created buttons for every existing sentiment so
      that for each sentiment she could either create a new idea or click an existing to
      increment its counter. This turned an hours-long task into one that could easily be done
      in a matter of minutes, allowing the user to focus on the mental part of the task and 
      getting to forget about the interface.
    `,
    link: "https://hr-tools.netlify.app/",
    sourceLinks: [
      { label: "hr-tools", link: "https://github.com/jonkiersey/hr-tools" },
    ],
  },
  {
    title: "Lifepoints",
    description: `
      Activity journal to keep track of how you're spending your days with some data
      visualization. This is a React app that was deployed as a static page to an S3 bucket
      that was powered by a Node.js script in AWS Lambda. I used an integration with
      Firebase to handle account creation. It uses redux to handle state (in this case only
      adding new data points or fetching all of a user's). The Lambda is as simple as it gets
      with no routing library, reading the object directly and passing that to the appropriate
      routes. Not nearly as full-featured as routing solution but was easy to implement for
      this small project and keeps cold-start times extremely fast in the Lambda. 
    `,
    sourceLinks: [
      {
        label: "lifepoints-app",
        link: "https://github.com/jonkiersey/lifepoints-app",
      },
      {
        label: "lifepoints-lambda",
        link: "https://github.com/jonkiersey/lifepoints-lambda",
      },
    ],
  },
];

const Projects = () => {
  return (
    <PageContainer>
      {projects.map((project) => (
        <Project key={project.title} {...project} />
      ))}
    </PageContainer>
  );
};

export default Projects;
