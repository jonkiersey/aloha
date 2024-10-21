import { Box, styled, Typography } from "@mui/material";

const SkillsBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 0,
});

type Props = {
  skills: string[];
};

const Skills = ({ skills }: Props) => {
  return (
    <SkillsBox>
      {skills.map((skill) => (
        <Typography key={skill} variant="body2" fontWeight="bold">
          {skill}
        </Typography>
      ))}
    </SkillsBox>
  );
};

export default Skills;
