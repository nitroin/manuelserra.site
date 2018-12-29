import React from "react";

import convert from "htmr";
import readingTime from "reading-time";

import styled from "styled-components";

import Title from "../title";

import colors from "../../commons/colors";

import "./style/theme.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 768px;
  width: 100%;
  margin: 16px 0;
`;

const Padder = styled.div`
  padding: 0 16px;
`;

const Subtitle = styled.h3`
  text-align: justify;
  animation: fade 0.5s ease both;

  &:before {
    content: "";
  }
`;

const Subtle = styled.div`
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};

  font-size: 0.9em;
  color: ${colors.silver};
  margin: 40px 0;
  animation: fade 0.5s ease 0.15s both;
`;

const Content = styled.main`
  text-align: justify;
  animation: fade 0.5s ease 0.3s both;

  & {
    h2 {
      color: ${colors.yellow};
    }

    h3 {
      color: ${colors.pink};
    }

    img {
      width: 100%;
    }

    pre {
      background-color: ${colors.nero};
      border-width: 2px;
      border-color: ${colors.charcoal};
      border-style: solid;
      border-radius: 8px;
      padding: 8px;
    }

    code {
      font-size: 1em;
      line-height: 1.5;
      justify-content: start;
      overflow: auto;
    }

    blockquote {
      border-left: 4px solid ${colors.silver};
      padding: 4px 24px;
      font-style: italic;
    }
  }
`;

const BlogPost = ({ title, description, date, content = {} }) => {
  const time = readingTime(content);

  return (
    <Wrapper>
      <Container>
        <Padder>
          <Title color={colors.orange} text={title} />
          <Subtitle>{description}</Subtitle>
          <Subtle justify="space-between">
            <span>{time.text}</span>
            <span>{new Date(date).toLocaleDateString()}</span>
          </Subtle>
          <Content>{convert(content)}</Content>
          <Subtle>:wq</Subtle>
        </Padder>
      </Container>
    </Wrapper>
  );
};

export default BlogPost;
