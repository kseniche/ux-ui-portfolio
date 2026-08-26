import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import PromptlyPage from "./PromptlyPage";
import BeautyCRMPage from "./BeautyCRMPage";
import { getProject } from "../data/projects";

const PROJECT_PAGES = {
  promptly: PromptlyPage,
  crm: BeautyCRMPage,
};

function ProjectPage() {
  const { id } = useParams();
  const project = getProject(id);
  const Page = PROJECT_PAGES[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project || !Page) {
    return <Navigate to="/" replace />;
  }

  return <Page project={project} />;
}

export default ProjectPage;
