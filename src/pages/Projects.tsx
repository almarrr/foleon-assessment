import React, { useCallback, useEffect, useMemo, useState } from "react";

import api from "../api/_api";
import { IParams, IProject } from "../interfaces/interfaces";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/General/Title";
import Breadcrumb from "../components/General/Breadcrumb";

import { AnimatedSlideInElement } from "../components/General/Animated";

import LoadingBar from "react-top-loading-bar";

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<null | IProject[]>(null);

  const [progress, setProgress] = useState<number>(0);

  const params: IParams = useMemo(() => {
    return {
      page: 1,
      limit: 20,
      "order-by": [
        {
          field: "name",
          type: "field",
          direction: "ASC",
        },
      ],
    };
  }, []);

  const getProjects = useCallback(
    async (data: IParams) => {
      setProgress(50);
      const result = await api.projects.all(params);

      setProjects(result["_embedded"]["title"]);
      setProgress(100);
    },
    [params]
  );

  useEffect(() => {
    getProjects(params);
  }, [params, getProjects]);

  return (
    <>
      <LoadingBar
        transitionTime={100}
        loaderSpeed={200}
        waitingTime={300}
        color="var(--primary)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container my-32">
        <Breadcrumb items={[{ title: "Projects" }]} />
        <AnimatedSlideInElement>
          <Title title="Foleon's projects" subtitle="overzicht" />
        </AnimatedSlideInElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {projects != null &&
            projects.map((project, i: number) => {
              return (
                <ProjectCard delay={i * 100} key={project.id} {...project} />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Projects;
