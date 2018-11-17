import React from "react";

import styled from "styled-components";

import colors from "../../commons/colors";

const TextTitle = styled.h2`
  display: inline-block;
  margin: 0 16px;
  padding: 8px 16px;
  color: ${props => props.color};
  background-color: ${colors.black};
  z-index: 1;
`;

const Container = styled.div`
  display: flex;
  align-items: baseline;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  top: 20px;
  height: 2px;
  background-color: ${props => props.color};
  font-size: 32px;

  @keyframes anime {
    from {
      width: 5%;
    }
    to {
      width: 100%;
    }
  }

  animation: anime 1s ease 1s both;
`;

const Title = ({ text, color = colors.white }) => (
  <Container>
    <TextTitle color={color}>{text}</TextTitle>
    <Line color={color} />
  </Container>
);

export default Title;
