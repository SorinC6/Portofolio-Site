import React from "react";
import { ProjectPreview } from "./HomeStyle";
import { Element, Link } from "react-scroll";

export default function ProjectPreviewComp({ title, top }) {
  return (
    <Link to="Projects">
      <ProjectPreview top={top}>
        <h4>{title}</h4>
      </ProjectPreview>
    </Link>
  );
}
