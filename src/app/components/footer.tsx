import { Box, Link, Typography } from "@mui/material";
import styled from "styled-components";

const FooterContainer = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});
const Footer = () => {
  return (
    <FooterContainer>
      <Typography variant="body2">
        Jon Kiersey 2024 |{" "}
        <Link href={"mailto:jon.kiersey@gmail.com"}>jon.kiersey@gmail.com</Link>{" "}
        |{" "}
        <a href="https://www.freepik.com/icons/palm-trees/2">
          Icon by smashingstocks
        </a>
      </Typography>
    </FooterContainer>
  );
};

export default Footer;
