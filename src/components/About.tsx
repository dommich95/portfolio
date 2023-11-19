import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Box, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function About() {
  return (
    <Box
      style={{
        maxWidth: "1200px",
        width: "100%",
        height: "fit-content",
        borderRadius: "30px",
        backgroundColor: "rgba(2, 6, 23, 0.8)",
        padding: "40px",
        textAlign: "center",
        lineHeight: "1.8rem",
        color: "white",
        overflowY: "scroll",
      }}
    >
      <Flex
        direction={{ initial: "column", sm: "row" }}
        justify="center"
        align="center"
        gap="9"
      >
        <Box>
          <Text size="5">
            I believe in the transformative power of technology to create a
            better world. My goal is to contribute to this vision by building
            platforms that empower individuals and drive the success of
            businesses in the future. With my start anywhere, go everywhere
            approach and a multicultural background, I have the ability to craft
            high-impact software solutions using cutting-edge technologies.
            <br style={{ marginBottom: "15px" }} />
            After spending 8 years working as a pipe fitter and welder, I
            decided to embark on a new challenge that aligns with my values and
            involves innovative thinking and continuous learning. My journey
            into software development has been driven by hard work,
            determination, and an entrepreneurial mindset.
            <br style={{ marginBottom: "15px" }} />
            With 1 year of experience as a frontend developer, I bring a fresh
            perspective and a passion for solving problems through code. I am
            actively seeking career opportunities in the software development
            sphere and would be delighted to discuss potential openings.
            Let&apos;s connect and explore how I can contribute to your team and
            make a meaningful impact.
          </Text>
        </Box>
        <Flex
          direction={{ initial: "row", sm: "column" }}
          gap={{ initial: "8", sm: "0" }}
        >
          <StyledIcon href={"https://github.com/dommich95"} target="_blank">
            <GitHubLogoIcon width="38px" height="38px" />
          </StyledIcon>
          <StyledIcon
            href={"https://www.linkedin.com/in/dominik-michel/"}
            target="_blank"
          >
            <LinkedInLogoIcon width="38px" height="38px" />
          </StyledIcon>
          <StyledIcon href={"mailto:dominikmichel1995@gmail.com"}>
            <EnvelopeClosedIcon width="38px" height="38px" />
          </StyledIcon>
          <StyledIcon href={"cv.pdf"} target="_blank">
            <PersonIcon width="38px" height="38px" />
          </StyledIcon>
        </Flex>
      </Flex>
    </Box>
  );
}

const StyledIcon = styled(Link)`
  marginleft: 20px;
  color: white;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 120px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }

  &:hover {
    transform: scale(1.5);
  }
`;
