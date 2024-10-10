"use client";
import { Box, Link, Typography } from "@mui/material";
import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const PageContainer = styled(Box)({
  justifyContent: "center",
  display: "flex",
  padding: 16,
  width: "100%",
  boxSizing: "border-box",
});
const ContentContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  maxWidth: 600,
  marginTop: 128,
});

const ContactLinkContent = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 8,
});

const Contact = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <Typography variant="body1">
          The best way to reach me is by email but I should also receive a
          notification and respond if you message me on LinkedIn
        </Typography>
        <Link href="mailto:jon.kiersey@gmail.com">
          <ContactLinkContent>
            <MailOutlineIcon />
            <Typography variant="body1">jon.kiersey@gmail.com</Typography>
          </ContactLinkContent>
        </Link>
        <Link href="https://www.linkedin.com/in/jonkiersey/" target="_blank">
          <ContactLinkContent>
            <LinkedInIcon />
            <Typography variant="body1">Jon Kiersey</Typography>
          </ContactLinkContent>
        </Link>
      </ContentContainer>
    </PageContainer>
  );
};

export default Contact;
