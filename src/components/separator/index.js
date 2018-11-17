import React from "react";

import styled from "styled-components";

import colors from "../../commons/colors";

const Hr = styled.hr`
  border: 1px solid ${props => props.color};
  margin: 0;
`;

const Separator = ({ color = colors.charcoal }) => <Hr color={color} />;

export default Separator;
