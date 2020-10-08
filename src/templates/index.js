import React from "react";
import { Helmet } from "react-helmet";

import styled from "styled-components";

import Avatar from "../components/avatar";
import Footer from "../components/footer";
import Grouper from "../components/grouper";
import Separator from "../components/separator";
import PostLink from "../components/post-link";
import ProjectLink from "../components/project-link";

import colors from "../commons/colors";

import "../../static/style.css";

const Wrapper = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};

  min-height: 100vh;
`;

const Main = styled.div`
  max-width: 1200px;
  min-height: calc(100vh - 86px); /* 100vh minus Footer component */
`;

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Me = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 64px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 32px 16px;
  }
`;

const Section = styled.section`
  width: 100%;
`;

export default ({ pageContext: { title, content, posts = [], projects = [] } }) => (
  <Wrapper>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="description" content="Manuel Serra personal site" />
      <title>{title}</title>
    </Helmet>
    <Main>
      <Me>
        <Avatar description={content} />
      </Me>
      <Container>
        <Section>
          <Grouper title="blog" color={colors.pink}>
            {posts.map((post, index) => (
              <PostLink post={post} key={index} />
            ))}
          </Grouper>
        </Section>
        <Section>
          <Grouper title="projects" color={colors.orange}>
            {projects.map((project, index) => (
              <ProjectLink project={project} index={index} />
            ))}
          </Grouper>
        </Section>
      </Container>
    </Main>
    <Separator />
    <Footer />
  </Wrapper>
);
