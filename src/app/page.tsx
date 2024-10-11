"use client";
import { sizes } from "@constants";
import { Box, Link, styled, Typography } from "@mui/material";

const PageContainer = styled(Box)({
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 16,
  boxSizing: "border-box",
});

const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 16,
  maxWidth: 600,
  marginTop: 128,
  [theme.breakpoints.down("md")]: {
    marginTop: sizes.headerHeight,
  },
}));

const CenteredTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textAlign: "center",
}));

const NameTypography = styled(CenteredTypography)(({ theme }) => ({
  color: theme.palette.primary.dark,
}));

const Home = () => {
  return (
    <PageContainer>
      <ContentContainer>
        <NameTypography variant="h1">Jon Kiersey</NameTypography>
        <CenteredTypography variant="h5">
          Full-Stack TypeScript Developer
        </CenteredTypography>
        <CenteredTypography variant="body1">
          This site is built in TypeScript using React with Next.js and
          MaterialUI. The source code can be found on my GitHub{" "}
          <Link href="https://github.com/jonkiersey/aloha" target="_blank">
            here.
          </Link>
        </CenteredTypography>
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;
