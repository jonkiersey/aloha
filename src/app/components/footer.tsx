import { Box, Link, Typography, styled } from "@mui/material";

const FooterContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

const CenteredTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textAlign: "center",
}));

const Footer = () => {
  return (
    <FooterContainer>
      <CenteredTypography variant="body2">
        Jon Kiersey 2024 |{" "}
        <Link href={"mailto:jon.kiersey@gmail.com"}>jon.kiersey@gmail.com</Link>{" "}
        |{" "}
        <Link href="https://www.freepik.com/icons/palm-trees/2">
          Icon by smashingstocks
        </Link>
      </CenteredTypography>
    </FooterContainer>
  );
};

export default Footer;
