import React from "react";
import { Link } from "gatsby";

import styled from "styled-components";

import colors, { randomFluo } from "../../commons/colors";

const Text = styled.span`
  padding: 0.25rem;
  color: ${colors.silver};
  transition: color 0.3s ease;
`;

const Container = styled(Link)``;

const When = styled(Text)`
  ${Container}:hover & {
    color: ${colors.white};
  }
`;

const Title = styled(Text)`
  color: ${props => props.color};

  ${Container}:hover & {
    color: ${props => props.hoverColor};
  }
`;

const Emmet = styled(Text)`
  color: ${colors.white};

  ${Container}:hover & {
    color: ${colors.silver};
  }
`;

const PostLink = ({ post }) => (
  <Container to={post.slug}>
    <When>{new Date(post.date).toLocaleDateString()}</When>
    <Title color={randomFluo()} hoverColor={randomFluo()}>
      <strong>~ {post.title} ~</strong>
    </Title>
    <Emmet>
      <em>{post.description}</em>
    </Emmet>
  </Container>
);

export default PostLink;
