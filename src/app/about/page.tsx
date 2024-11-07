"use client";
import { Box, Paper, styled, Typography } from "@mui/material";
import Image from "next/image";
import jonPhoto from "./jon-photo.jpg";
import bio from "./bio";

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
        {bio.map((paragraph, index) => (
          <Typography key={index} variant="body1">
            {paragraph}
          </Typography>
        ))}
      </AboutBox>
    </PageContainer>
  );
};

export default About;
