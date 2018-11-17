import React from "react";

import convert from "htmr";
import styled from "styled-components";

import colors from "../../commons/colors";

import imagePath from "../../../static/images/me.webp";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  position: absolute;
  border-radius: 64px;
  padding: 2px;
  width: 128px;
`;

const Border = styled.div`
  width: 128px;
  height: 128px;
  border-width: 4px;
  border-style: inset;
  border-color: ${colors.blue};
  border-radius: 68px;
  animation: pulse 2.5s ease infinite, rotate 4.33s ease infinite both;
`;

const Description = styled.div`
  text-align: justify;
  max-width: 540px;
  margin-top: 32px;
`;

const Avatar = ({ description }) => (
  <Wrapper>
    <Container>
      <Border />
      <Image src={imagePath} alt="hello me!" />
    </Container>
    <Description>{convert(description)}</Description>
  </Wrapper>
);

export default Avatar;
