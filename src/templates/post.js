import React from "react";
import { Helmet } from "react-helmet";

import styled from "styled-components";

import Footer from "../components/footer";
import Header from "../components/header";
import Separator from "../components/separator";
import BlogPost from "../components/blog-post";

import colors from "../commons/colors";

import "../../static/style.css";

const Wrapper = styled.div`
  background-color: ${colors.black};
  color: ${colors.white};

  min-height: 100vh;
`;

const Main = styled.div`
  min-height: calc(100vh - 86px); /* 100vh minus Footer component */
`;

export default ({ pageContext: { title, description, date, content } }) => (
  <Wrapper>
    <Helmet>
      <html lang="en" />
      <meta charSet="utf-8" />
      <meta name="description" content="Manuel Serra personal site" />
      <title>Manuel Serra | {title}</title>
    </Helmet>
    <Main>
      <Header />
      <BlogPost title={title} description={description} date={date} content={content} />
    </Main>
    <Separator />
    <Footer />
  </Wrapper>
);
