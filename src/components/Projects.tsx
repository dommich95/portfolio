import React, { useState, useRef, RefObject } from "react";
import { Box, Button, Flex, Grid, Text } from "@radix-ui/themes";
import styled from "styled-components";
import "@radix-ui/themes/styles.css";
import Data from "../projectInfos.json";
import Image from "next/image";
import { ChevronUpIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { InView } from "react-intersection-observer";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [overlayInView, setOverlayInView] = useState(true);
  const scrollContainterRef: RefObject<HTMLDivElement> = useRef(null);

  return (
    <Box
      ref={scrollContainterRef}
      style={{
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <StyledProjectContainer>
        <StyledGrid
          align={{ initial: "stretch", sm: "start" }}
          columns={{ initial: "1", sm: "2" }}
          rows="1"
        >
          <ImageFlexMain>
            <MobileOptimizedImage
              src={`${Data.projects[selectedProject].image}`}
              alt="test"
              fill={true}
            />
          </ImageFlexMain>
          <InView
            onChange={(inView) => setOverlayInView(inView)}
            threshold={0.1}
          >
            {({ ref }) => (
              <TextFlexMain>
                <Box
                  style={{
                    flex: "0 0 100%",
                    minHeight: "100vh",
                    zIndex: "2",
                  }}
                >
                  <Box
                    px="4"
                    style={{ flex: "0 0 100%", minHeight: "100%", zIndex: 2 }}
                  >
                    <Box mt="4" mb="6">
                      <Text
                        weight="medium"
                        size="9"
                        style={{
                          lineHeight: 1,
                          color: "white",
                        }}
                      >
                        {Data.projects[selectedProject].name}
                      </Text>
                    </Box>
                    <Box pr="6" pb="8">
                      <Text
                        weight="regular"
                        style={{ fontSize: "20px", color: "white" }}
                      >
                        {Data.projects[selectedProject].description}
                      </Text>
                    </Box>
                    <Box mb="5" style={{ textAlign: "center" }}>
                      <Text size="6" weight="bold">
                        Tech-stack used in this project
                      </Text>
                    </Box>
                    <Box mx="auto" pb={{ initial: "8", sm: "0" }}>
                      <Grid
                        columns={{ initial: "2", xs: "3" }}
                        justify="start"
                        gap="7"
                        style={{ maxWidth: "fit-content" }}
                        mx="auto"
                      >
                        {Data.projects[selectedProject].techStack.map(
                          (stack, index) => (
                            <Flex
                              direction="column"
                              align="center"
                              gap="2"
                              key={index}
                            >
                              <Image
                                src={`/Logos/${stack.toLowerCase()}.png`}
                                alt={stack}
                                width={80}
                                height={80}
                              />
                              <Text>{stack}</Text>
                            </Flex>
                          )
                        )}
                      </Grid>
                    </Box>
                  </Box>
                </Box>
                <Box
                  ref={ref}
                  display={{ sm: "none" }}
                  style={{
                    zIndex: 1,
                    flex: "0 0 100%",
                    transform: "translateX(-100%)",
                    backgroundColor: "rgba(2, 6, 23, 0.8)",
                    opacity: 0.9,
                  }}
                />
                <Box
                  display={{ sm: "none" }}
                  style={{
                    flex: "0 0 100%",
                    transform: "translateX(-200%)",
                    backdropFilter: "grayscale(100%) blur(2.5px)",
                  }}
                />
              </TextFlexMain>
            )}
          </InView>
          {!overlayInView ? (
            <StyledButtonBox>
              <Flex justify="center" gap="5">
                <Box
                  style={{
                    visibility: selectedProject === 0 ? "hidden" : "visible",
                  }}
                >
                  <ProjectButtons
                    onClick={() => {
                      setSelectedProject(selectedProject - 1);
                      if (scrollContainterRef.current) {
                        scrollContainterRef.current.scrollTop = 0;
                      }
                    }}
                  >
                    <ChevronUpIcon width="34px" height="34px" />
                  </ProjectButtons>
                </Box>
                <Box
                  style={{
                    visibility:
                      selectedProject === Data.projects.length - 1
                        ? "hidden"
                        : "visible",
                  }}
                >
                  <ProjectButtons
                    onClick={() => {
                      setSelectedProject(selectedProject + 1);
                      if (scrollContainterRef.current) {
                        scrollContainterRef.current.scrollTop = 0;
                      }
                    }}
                  >
                    <ChevronDownIcon width="34px" height="34px" />
                  </ProjectButtons>
                </Box>
              </Flex>
            </StyledButtonBox>
          ) : null}
        </StyledGrid>
      </StyledProjectContainer>
    </Box>
  );
}

const StyledProjectContainer = styled(Box)`
  max-height: 100vh;
  width: 100%;
  padding 0;
  margin : 0;
  border-radius: 30px;
  overscroll-behavior: contain;
  position: relative;


  @media (min-width: 768px) {
    max-height: 80vh;
    width: 100%;
    max-width: 1200px;
    border-radius: 20px;
    display: flex;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const StyledGrid = styled(Grid)`
  position: relative;
  align-items: stretch;
  width: 100%;
  border-radius: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 400px 1fr;
    justify-items: center;
    align-items: start;
    overflow: scroll;
  }
`;

const ImageFlexMain = styled(Flex)`
  height: 100vh;
  width: 100%;
  position: sticky;
  top: 0;
  background-color: rgba(2, 6, 23);

  @media (min-width: 768px) {
    width: 100%;
    max-width: 800px;
    height: 80vh;
    grid-column: 2 / 3;
    margin: 0 auto;
  }
`;

const MobileOptimizedImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const TextFlexMain = styled(Flex)`
    position: relative;
    top: -100vh;
    left: 0;
    width: 100%;
    min-height: 100vh;
    padding-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
    background-color: rgba(2, 6, 23, 0.6);

    @media (min-width: 768px) {
      position: unset;
      grid-column: 1 / 2;
      width: 400px;
      margin: 0 auto;
      min-height: 100vh;
      height: '100%'
`;

const StyledButtonBox = styled(Box)`
  position: sticky;
  bottom: 20px;
  z-index: 5;
  @media (min-width: 768px) {
    position: fixed;
    bottom: 10px;
    right: 0;
    left: 0;
  }
`;

const ProjectButtons = styled(Button)`
  all: unset;
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
