import React from "react";

import styled from "styled-components";

import Title from "../title";

import img from "../../../static/images/clock.svg";

const Container = styled.div`
  padding: 16px;
`;

const Clock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  align-items: center;
`;

const Fader = styled.div`
  & li {
    ${[1, 2, 3, 4, 5].map(
      x => `
      :nth-child(${x}) {
        animation: fade 0.5s ease ${0.5 * x}s both;
      }
    `
    )};
  }
`;

const Grouper = ({ title = "", color, children = [] }) => (
  <Container>
    <Title text={title} color={color} />
    {0 === children.length && (
      <Clock>
        <img src={img} alt="work in progress" />
        <p>Coming soon™</p>
      </Clock>
    )}
    <Fader>
      <ul>
        {React.Children.map(children, child => (
          <li>{child}</li>
        ))}
      </ul>
    </Fader>
  </Container>
);

export default Grouper;
