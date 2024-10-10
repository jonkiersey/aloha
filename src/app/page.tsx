"use client";
import { sizes } from "@constants";
import { Box, styled, Typography } from "@mui/material";

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
  gap: 32,
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
        <CenteredTypography variant="h5">
          This website is the professional portfolio of
        </CenteredTypography>
        <NameTypography variant="h1">Jon Kiersey</NameTypography>
        <CenteredTypography variant="body1">
          My intent with this site is to provide a place to make my resume
          available, host personal projects, and hopefully show off some fun UI
          elements. At this point, there&apos;s not a whole lot of
          &quot;fun&quot; here but with any luck this will eventually look like
          more than the barest of template sites.
        </CenteredTypography>
      </ContentContainer>
    </PageContainer>
  );
};

export default Home;
