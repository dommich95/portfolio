import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import Projects from "@/components/Projects";
import Link from "next/link";
import styled from "styled-components";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <Box>
      <StyledMobileBox>
        <Flex gap="4" style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <StyledLink href={"#about"}>
            <Text size={{ initial: "4", sm: "5" }} weight="medium">
              About
            </Text>
          </StyledLink>
          <StyledLink href={"#skills"}>
            <Text size={{ initial: "4", sm: "5" }} weight="medium">
              Skills
            </Text>
          </StyledLink>
          <StyledLink href={"#projects"}>
            <Text size={{ initial: "4", sm: "5" }} weight="medium">
              Projects
            </Text>
          </StyledLink>
          <StyledLink href={"#contact"}>
            <Text size={{ initial: "4", sm: "5" }} weight="medium">
              Contact
            </Text>
          </StyledLink>
          <StyledLink href={"cv.pdf"} target="_blank">
            <Text size={{ initial: "4", sm: "5" }} weight="medium">
              Resume
            </Text>
          </StyledLink>
        </Flex>
      </StyledMobileBox>
      <Box
        style={{
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollBehavior: "smooth",
          height: "100vh",
          top: "120px",
        }}
      >
        <Box
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            color: "white",
          }}
        >
          <Box style={{ height: "100vh", overscrollBehavior: "contain" }}>
            <Flex
              direction="column"
              justify="center"
              align="center"
              px="4"
              style={{
                height: "100%",
                scrollSnapAlign: "start",
                width: "100%",
              }}
            >
              <Text mb="5" align="center" size="9" weight="bold">
                Hey,
              </Text>
              <Text mb="5" align="center" size="9" weight="bold">
                I&apos;m Dominik Michel
              </Text>
              <Text mb="3" align="center" size="8" weight="bold">
                and I&apos;m a
              </Text>
              <Text mb="2" align="center" size="9" weight="bold">
                Frontend Developer
              </Text>
              <Text mb="5" align="center" size="9" weight="bold"></Text>
              <Text align="center" size="8" weight="bold">
                and I hope to please your eyes with what you see!
              </Text>
            </Flex>
          </Box>
          <Box
            id="about"
            style={{
              minHeight: "100vh",
              scrollSnapAlign: "start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: "80px",
              paddingBottom: "80px",
            }}
          >
            <Box
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              <Text>About</Text>
            </Box>
            <About />
          </Box>
          <Box
            id="skills"
            style={{
              minHeight: "100vh",
              scrollSnapAlign: "start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingTop: "80px",
              paddingBottom: "120px",
            }}
          >
            <Box
              style={{
                textAlign: "center",
                fontSize: "40px",
                fontWeight: "bold",
              }}
            >
              <Text>Skills</Text>
            </Box>
            <Skills />
          </Box>
          <Box
            style={{
              height: "100vh",
              overscrollBehavior: "contain !important",
            }}
          >
            <Box
              id="projects"
              pt={{ initial: "0", sm: "9" }}
              style={{
                height: "100%",
                width: "100%",
                scrollSnapAlign: "start",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                overscrollBehavior: "contain",
                borderRadius: "40px",
              }}
            >
              <Box
                display={{ initial: "none", sm: "block" }}
                style={{
                  textAlign: "center",
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                <Text>Projects</Text>
              </Box>
              <Projects />
            </Box>
          </Box>
          <Box
            style={{
              paddingTop: "80px",
              height: "100vh",
              scrollSnapAlign: "start",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            id="contact"
          >
            <Flex align="center">
              <ContactForm />
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const StyledMobileBox = styled(Box)`
  position: absolute;
  top: 0;
  height: 80px;
  width: 100%;

  background-color: rgba(2, 6, 23, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 4;
  }
`;
