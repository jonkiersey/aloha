import { Box, Link, styled, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const PrettyLink = styled(Link)(({ theme }) => ({
  color: theme.palette.getContrastText(theme.palette.grey[800]),
  display: "flex",
  alignItems: "center",
  gap: 8,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

const ContactInfoItem = styled(Box)({
  alignItems: "center",
  display: "flex",
  gap: 8,
});

const ContactInfoItemsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 8,
});

const ContactInfo = () => {
  return (
    <ContactInfoItemsContainer>
      <ContactInfoItem>
        <LocationOnIcon />
        <Typography variant="body2">Aloha, OR</Typography>
      </ContactInfoItem>
      <PrettyLink href="mailto:jon.kiersey@gmail.com">
        <MailOutlineIcon />
        <Typography variant="body2">jon.kiersey@gmail.com</Typography>
      </PrettyLink>
      <PrettyLink href="https://github.com/jonkiersey">
        <GitHubIcon />
        <Typography variant="body2">github.com/jonkiersey</Typography>
      </PrettyLink>
      <PrettyLink href="https://www.linkedin.com/in/jonkiersey/">
        <LinkedInIcon />
        <Typography variant="body2">linkedin.com/in/jonkiersey</Typography>
      </PrettyLink>
    </ContactInfoItemsContainer>
  );
};

export default ContactInfo;
