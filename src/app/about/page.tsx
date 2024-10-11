"use client";
import { Box, Paper, styled, Typography } from "@mui/material";
import Image from "next/image";
import jonPhoto from "./jon-photo.jpg";

const PageContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  padding: 16,
  boxSizing: "border-box",
});

const AboutBox = styled(Paper)({
  display: "flex",
  flexDirection: "column",
  gap: 8,
  maxWidth: 600,
  padding: 8,
});

const ProfilePhoto = styled(Image)({
  alignSelf: "center",
  margin: "16px 0",
  maxWidth: 200,
  height: "auto",
  borderRadius: "50%",
  boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.5)",
});

const About = () => {
  return (
    <PageContainer>
      <AboutBox>
        <ProfilePhoto alt="Photo of Jon" src={jonPhoto} />
        <Typography variant="body1">
          Hi, I’m Jon, a full-stack engineer with a passion for building
          efficient, type-safe, and scalable solutions using TypeScript, React,
          and Node.js. With a B.S. in Computer Science from Portland State
          University and over seven years of experience, I’ve had the
          opportunity to work across various industries—creating intuitive web
          applications, optimizing backend services, and delivering user-focused
          features.{" "}
        </Typography>
        <Typography variant="body1">
          From crafting full-stack movie industry tools at Impact Crew to
          building robust accounting software at Avise and enhancing cloud-based
          solutions at Nike, I’ve always prioritized code reusability, developer
          happiness, and seamless user experiences. Whether it’s through
          refactoring core systems for performance gains or collaborating with
          product teams to bring innovative ideas to life, my goal is to ship
          stable, self-healing solutions that remove friction for users and
          developers alike.
        </Typography>
        <Typography variant="body1">
          Let’s connect and talk about how we can create something amazing
          together!
        </Typography>
      </AboutBox>
    </PageContainer>
  );
};

export default About;
