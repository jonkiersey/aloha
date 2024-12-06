"use client";
import { Box, Link, Typography, styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const PageContainer = styled(Box)({
  justifyContent: "center",
  display: "flex",
  padding: 16,
  width: "100%",
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

const ColoredTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const Contact = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <ColoredTypography variant="body1">
          The best way to reach me is by email but I should also receive a
          notification and respond if you message me on LinkedIn
        </ColoredTypography>
        <Link href="mailto:jon.kiersey@gmail.com">
          <ContactLinkContent>
            <MailOutlineIcon />
            <Typography variant="body1">jon.kiersey@gmail.com</Typography>
          </ContactLinkContent>
        </Link>
        <Link href="https://www.linkedin.com/in/jonkiersey/" target="_blank">
          <ContactLinkContent>
            <LinkedInIcon />
            <Typography variant="body1">LinkedIn Profile</Typography>
          </ContactLinkContent>
        </Link>
        <Link href="https://github.com/jonkiersey" target="_blank">
          <ContactLinkContent>
            <GitHubIcon />
            <Typography variant="body1">GitHub Profile</Typography>
          </ContactLinkContent>
        </Link>
      </ContentContainer>
    </PageContainer>
  );
};

export default Contact;
