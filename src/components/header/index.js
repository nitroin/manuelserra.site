import React from "react";

import styled from "styled-components";

import colors from "../../commons/colors";
import Separator from "../separator";
import { Link } from "@reach/router";

const Wrapper = styled.div`
  background-color: ${colors.nero};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  max-width: 768px;
  margin: auto;
  padding: 16px;
  color: ${colors.white};
  transition: color 0.5s ease;

  &:hover {
    color: ${colors.pink};
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Header = () => (
  <StyledLink to="/">
    <Wrapper>
      <Container>
        <header>{`{ "Manuel": "Serra" }`}</header>
        <header>{`_# blog`}</header>
      </Container>
    </Wrapper>
    <Separator />
  </StyledLink>
);

export default Header;
