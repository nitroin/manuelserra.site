import React from "react";

import styled from "styled-components";

import colors from "../../commons/colors";

import github from "../../../static/images/github.svg";
import instagram from "../../../static/images/instagram.svg";
import linkedin from "../../../static/images/linkedin.svg";
import twitter from "../../../static/images/twitter.svg";

const Container = styled.footer`
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  padding: 8px 0;
`;

const Link = styled.a`
  margin: 8px 16px;
  height: auto;
  color: white;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  padding: 8px;
  border-width: 2px;
  border-color: ${colors.charcoal};
  border-style: solid;
  transition: border-color 0.45s ease;

  animation: fade 0.6s ease ${props => `${props.delay}`}s both;

  &:hover {
    background-color: ${colors.charcoal};
    border-color: ${props => props.color};
    transform: translateY(0);
  }
`;

const socials = [
  {
    to: "https://github.com/nitroin",
    imgPath: github,
    alt: "github",
    color: colors.pink
  },
  {
    to: "https://www.instagram.com/manuel.serra.88/",
    imgPath: instagram,
    alt: "instagram",
    color: colors.white
  },
  {
    to: "https://www.linkedin.com/in/manuel-serra-05830694/",
    imgPath: linkedin,
    alt: "linkedin",
    color: colors.linkedin
  },
  {
    to: "https://twitter.com/nitroin",
    imgPath: twitter,
    alt: "twitter",
    color: colors.twitter
  }
];

const SocialButton = ({ to, imgPath, alt, color, delay }) => (
  <Link href={to} rel="noopener" target="_blank">
    <ImageContainer color={color} delay={delay}>
      <img src={imgPath} alt={alt} width={24} height={24} />
    </ImageContainer>
  </Link>
);

export default () => (
  <Container>
    {socials.map((social, index) => (
      <SocialButton key={index} delay={0.3 + 0.15 * index} {...social} />
    ))}
  </Container>
);
