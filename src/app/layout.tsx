"use client";
import {
  Box,
  CssBaseline,
  ThemeProvider,
  styled,
  useColorScheme,
  useMediaQuery,
} from "@mui/material";
import theme from "../theme";
import { Footer, Header } from "./components";
import { sizes } from "@constants";
import { HeaderProps } from "./components/header";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import EmailIcon from "@mui/icons-material/Email";
import WorkIcon from "@mui/icons-material/Work";
import Head from "next/head";
import useApprovals from "./hooks/use-approvals";
import ApprovalsContext from "./contexts/approvals-context";
import { useEffect } from "react";

const ContentContainer = styled(Box)({
  flexGrow: 1,
  marginTop: sizes.headerHeight,
});

const PageContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  background: theme.palette.background.default,
}));

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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    setMode(prefersDarkMode ? "dark" : "light");
  }, [prefersDarkMode, setMode]);
  const approvals = useApprovals();
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body style={{ margin: 0, height: "100vh" }}>
        <main>
          <ThemeProvider theme={theme} defaultMode={mode}>
            <CssBaseline />
            <ApprovalsContext.Provider value={approvals}>
              <PageContainer>
                <Header routes={navHeaderRoutes} />
                <ContentContainer>{children}</ContentContainer>
                <Footer />
              </PageContainer>
            </ApprovalsContext.Provider>
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
