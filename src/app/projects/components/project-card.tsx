import { Box, Card, Link, styled, Typography } from "@mui/material";
import Image, { StaticImageData } from "next/image";

const ContainerCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  display: "flex",
  flexDirection: "column",
  padding: 16,
  gap: 16,
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    maxWidth: 800,
    justifyContent: "space-between",
  },
}));

const ProjectImage = styled(Image)({
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
});

const InfoBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    maxWidth: `calc(100% - 250px)`,
  },
}));

export type ProjectCardProps = {
  image?: StaticImageData;
  title: string;
  description: string;
  link?: string;
  sourceLinks?: { label: string; link: string }[];
};
const ProjectCard = ({
  image,
  title,
  description,
  link,
  sourceLinks,
}: ProjectCardProps) => {
  return (
    <ContainerCard>
      <InfoBox>
        <Typography variant="h3">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        {link !== undefined && (
          <Typography variant="body1">
            See this project live{" "}
            <Link href={link} target="_blank">
              here.
            </Link>
          </Typography>
        )}
        {sourceLinks !== undefined && (
          <Typography variant="body1">
            Check out the source code:{" "}
            {sourceLinks.map(({ label, link }, index, array) => (
              <Link href={link} target="_blank">
                {label}
                {index + 1 !== array.length && ", "}
              </Link>
            ))}
          </Typography>
        )}
      </InfoBox>
      {image !== undefined && (
        <ProjectImage alt={`Project Image for ${title}`} src={image} />
      )}
    </ContainerCard>
  );
};

export default ProjectCard;
