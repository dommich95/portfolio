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
            I believe we can create a better world thanks to technologies. I
            want to make a difference by building platforms that will empower
            people and make businesses successful tomorrow. Thanks to my “start
            anywhere, go everywhere” approach and multicultural background I’m
            able to build high-impact software using new technologies. After 8
            years of working as a pipe fitter and welder, I have decided to face
            a new challenge that would align with my values, and involve new
            ways of thinking and a life-long learning process. Hard work and
            determination are key aspects in defining who I am. I solve problems
            with an entrepreneurial mindset. I am eager to hear about potential
            career opportunities, so I would be pleased to chat about job
            openings in the software development sphere.
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
