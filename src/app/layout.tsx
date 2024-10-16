"use client";
import { Box, ThemeProvider } from "@mui/material";
import theme from "../theme";
import { Footer, Header } from "./components";
import styled from "styled-components";
import { sizes } from "@constants";
import { HeaderProps } from "./components/header";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import Head from "next/head";

const ContentContainer = styled(Box)({
  flexGrow: 1,
  marginTop: sizes.headerHeight,
  boxSizing: "border-box",
});

const PageContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const navHeaderRoutes: HeaderProps["routes"] = [
  {
    route: "/home",
    Icon: HomeIcon,
    label: "Home",
  },
  {
    route: "/about",
    Icon: InfoIcon,
    label: "About",
  },
  {
    route: "/resume",
    Icon: WorkIcon,
    label: "Resume",
  },
  {
    route: "/projects",
    Icon: ConstructionIcon,
    label: "Projects",
  },
  {
    route: "/contact",
    Icon: EmailIcon,
    label: "Contact",
  },
];

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body style={{ margin: 0, height: "100vh" }}>
        <main>
          <ThemeProvider theme={theme}>
            <PageContainer>
              <Header routes={navHeaderRoutes} />
              <ContentContainer>{children}</ContentContainer>
              <Footer />
            </PageContainer>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
