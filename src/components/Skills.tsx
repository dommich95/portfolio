import { Box, Flex, Grid, Text } from "@radix-ui/themes";
import React from "react";
import Image from "next/image";
import styled from "styled-components";

const skillList = [
  "React",
  "Next",
  "JavaScript",
  "TypeScript",
  "GraphQl",
  "HTML",
  "CSS",
  "Tailwind",
  "GitHub",
  "Firebase",
  "React Native",
];

export default function Skills() {
  return (
    <Box px="3">
      <Grid columns={{ initial: "2", sm: "3" }} gap="2">
        {skillList.map((skill) => (
          <StyledFlex direction="column" key={skill} align="center" gap="5">
            <Image
              src={`/Logos/${skill.toLowerCase()}.png`}
              alt={skill}
              width={80}
              height={80}
            />
            <Text>{skill}</Text>
          </StyledFlex>
        ))}
      </Grid>
    </Box>
  );
}

const StyledFlex = styled(Flex)`
  max-width: 300px;
  height: 150px;
  padding: 10px;
  background-color: rgba(2, 6, 23, 0.4);
  border-radius: 15px;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;
