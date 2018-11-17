import React from "react";

import { Link } from "gatsby";

const ProjectLink = ({ slug, title, description }) => (
  <Link to={slug}>{`${title} - ${description}`}</Link>
);

export default ProjectLink;
