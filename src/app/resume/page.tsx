"use client";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import {
  ContactInfo,
  MainContent,
  SideBarInfoItem,
  Skills,
} from "./components";
import workExperiences from "./work-experiences";

const ResumeBox = styled(Box)({
  width: "100%",
  display: "flex",
});

const SideBar = styled(Box)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.grey[800]),
  width: 250,
  backgroundColor: theme.palette.grey[800],
  display: "flex",
  flexDirection: "column",
  padding: 16,
}));

const SideBarInfoBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

const SideBarFooter = styled(Box)({
  marginTop: "auto",
});

const ProfilePhoto = styled(Image)({
  marginBottom: 48,
  marginTop: 48,
  borderRadius: "50%",
});

const Resume = () => {
  return (
    <ResumeBox>
      <SideBar>
        <ProfilePhoto
          alt="Photo of Jon"
          src={"/jon-photo.jpg"}
          width="200"
          height="200"
        />
        <SideBarInfoBox>
          <SideBarInfoItem title="CONTACT">
            <ContactInfo />
          </SideBarInfoItem>
          <SideBarInfoItem title="EDUCATION">
            <Typography variant="body2">
              B.S. in Computer Science - Portland State University, 2016
            </Typography>
          </SideBarInfoItem>
          <SideBarInfoItem title="SKILLS">
            <Skills
              skills={[
                "TypeScript",
                "REST API Design",
                "Node.js",
                "React.js",
                "PostgreSQL",
                "GraphQL",
              ]}
            />
          </SideBarInfoItem>
        </SideBarInfoBox>
        <SideBarFooter>
          <Typography variant="caption">
            Developer joy is directly proportional to product quality. Shipping
            stable, self-healing, delightful customer experiences is what makes
            me happy.
          </Typography>
        </SideBarFooter>
      </SideBar>
      <MainContent
        name="JON KIERSEY"
        tagline="Full-stack champion of Typescript"
        workExperiences={workExperiences}
      />
    </ResumeBox>
  );
};

export default Resume;
