import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled,
  Typography,
} from "@mui/material";
import { WorkExperience } from "../types";

const MainContentContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  padding: 16,
});

const HeaderBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 16,
});

const CenteredTypography = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
});

const WorkExperienceContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

const WorkExperiencesContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 16,
});

const DescriptionsList = styled(List)({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  gap: 4,
});

const Description = styled(ListItem)({
  padding: 0,
});

const DescriptionListItemText = styled(ListItemText)({
  margin: 0,
  padding: 0,
});

const DescriptionListItemIcon = styled(ListItemIcon)({
  display: "flex",
  minWidth: 16,
  height: 20,
  alignSelf: "flex-start",
  alignItems: "center",
});

const NameTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

const WorkExperienceTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.light,
  fontWeight: "bold",
}));

type Props = {
  name: string;
  tagline: string;
  workExperiences: WorkExperience[];
};

const MainContent = ({ name, tagline, workExperiences }: Props) => {
  return (
    <MainContentContainer>
      <HeaderBox>
        <NameTypography fontWeight="bold" variant="h3">
          {name}
        </NameTypography>
        <Typography variant="subtitle1">{tagline}</Typography>
      </HeaderBox>
      <WorkExperienceTypography variant="subtitle1">
        WORK EXPERIENCE
      </WorkExperienceTypography>
      <WorkExperiencesContainer>
        {workExperiences.map((workExperience) => (
          <WorkExperienceContainer key={workExperience.company}>
            <Typography fontWeight="bold" variant="body1">
              {workExperience.title}
            </Typography>
            <Typography variant="body1">
              {workExperience.company} | {workExperience.start} -{" "}
              {workExperience.end}
            </Typography>
            {workExperience.technologies.length > 0 && (
              <CenteredTypography fontWeight="bold" variant="body2">
                {workExperience.technologies.join(" - ")}
              </CenteredTypography>
            )}
            {workExperience.descriptions.length > 0 && (
              <DescriptionsList>
                {workExperience.descriptions.map((description) => (
                  <Description key={description}>
                    <DescriptionListItemIcon>•</DescriptionListItemIcon>
                    <DescriptionListItemText>
                      <Typography key={description} variant="body2">
                        {description}
                      </Typography>
                    </DescriptionListItemText>
                  </Description>
                ))}
              </DescriptionsList>
            )}
          </WorkExperienceContainer>
        ))}
      </WorkExperiencesContainer>
    </MainContentContainer>
  );
};

export default MainContent;
