import React from "react";

import convert from "htmr";
import styled from "styled-components";

import { randomFluo } from "../../commons/colors";

import imagePath from "../../../static/images/me.webp";
import imagePathFallback from "../../../static/images/me.jpg";

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

const Picture = styled.picture`
  position: absolute;
  width: 132px;
  height: 132px;
`;

const Image = styled.img`
  position: absolute;
  border-radius: 64px;
  margin: 2px;
  width: 128px;
`;

const Border = styled.div`
  width: 128px;
  height: 128px;
  border-width: 4px;
  border-style: inset;
  border-color: ${randomFluo()};
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
      <Picture>
        <source srcset={imagePath} type="image/webp" />
        <Image src={imagePathFallback} />
      </Picture>
    </Container>
    <Description>{convert(description)}</Description>
  </Wrapper>
);

export default Avatar;
