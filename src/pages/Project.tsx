import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/_api";
import { IGetProjectPublications } from "../api/project";
import { AnimatedSlideInElement } from "../components/General/Animated";
import Breadcrumb from "../components/General/Breadcrumb";
import Flex from "../components/General/Flex";
import Title from "../components/General/Title";
import Pagination from "../components/Pagination";
import PublicationCard from "../components/PublicationCard";
import { CONFIG } from "../config/config";
import { IProject, IPublication } from "../interfaces/interfaces";

import LoadingBar from "react-top-loading-bar";

interface ParamTypes {
  id: string;
}

const Project = () => {
  const [project, setProject] = useState<null | IProject>(null);

  const [publications, setPublications] = useState<null | any>(null);

  const [categories, setCategories] = useState<null | string[]>(null);

  const [activeCategory, setActiveCategory] = useState<null | string>(null);

  const [activePage, setActivePage] = useState<number>(1);

  const [progress, setProgress] = useState<number>(0);

  const [limit] = useState(6);

  const { id } = useParams<ParamTypes>();

  const getProject = async () => {
    const result = await api.request({
      endpoint: `${CONFIG.API.ENDPOINTS.PROJECT.get}${id}`,
      method: `GET`,
    });

    setProject(result);
  };

  useEffect(() => {
    setCategories([
      "branded_content",
      "brochure",
      "ebook",
      "newsletter",
      "pitch_deck",
      "whitepaper",
    ]);
  }, []);

  const getPublications = useCallback(async () => {
    setProgress(50);
    if (project !== null) {
      const params: IGetProjectPublications = {
        id: project.id.toString(),
        limit: 6,
        page: activePage,
        category: activeCategory !== null ? activeCategory : undefined,
      };
      const result = await api.project.publications(params);

      setPublications(result);

      setProgress(100);
    }
  }, [project, activePage, activeCategory]);

  // const getPublications = async () => {
  //   setProgress(50);
  //   if (project !== null) {
  //     const params: IGetProjectPublications = {
  //       id: project.id.toString(),
  //       limit: 6,
  //       page: activePage,
  //       category: activeCategory !== null ? activeCategory : undefined,
  //     };
  //     const result = await api.project.publications(params);

  //     setPublications(result);

  //     setProgress(100);
  //   }
  // };

  useEffect(() => {
    getPublications();
  }, [project, activePage, activeCategory, getPublications]);

  useEffect(() => {
    if (id !== undefined) {
      getProject();
    }
  }, [id]);

  return (
    <section className="my-32">
      <LoadingBar
        transitionTime={100}
        loaderSpeed={200}
        waitingTime={300}
        color="var(--primary)"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <div className="container">
        <Breadcrumb
          items={[
            { title: "Projects" },
            {
              title: project !== null ? project.name : ``,
            },
          ]}
        />
        {project !== null ? (
          <AnimatedSlideInElement delay={200}>
            <Title title={project.name} subtitle="Project" />
          </AnimatedSlideInElement>
        ) : (
          <Title title={""} subtitle="" />
        )}

        {categories !== null && (
          <Flex className="justify-center space-x-4 items-center mb-24">
            <AnimatedSlideInElement overflow={true}>
              <button
                style={{ outline: `none`, letterSpacing: 2 }}
                className={`${
                  activeCategory === null
                    ? `bg-white shadow-theme`
                    : `opacity-50 hover:opacity-100`
                } px-8 py-2 rounded-full font-bold text-size-14 uppercase outline-none`}
                onClick={() => setActiveCategory(null)}
              >
                Alles
              </button>
            </AnimatedSlideInElement>
            {categories.map((category, i: number) => {
              return (
                <AnimatedSlideInElement
                  overflow={true}
                  key={category}
                  delay={i * 50}
                >
                  <button
                    style={{ outline: `none`, letterSpacing: 2 }}
                    className={`${
                      activeCategory === category
                        ? `bg-white shadow-theme`
                        : `opacity-50 hover:opacity-100`
                    } px-8 py-2 rounded-full font-bold text-size-14 uppercase outline-none`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category.replace(`_`, ` `)}
                  </button>
                </AnimatedSlideInElement>
              );
            })}
          </Flex>
        )}

        {publications !== null && (
          <>
            {publications.page_count > 1}

            <Pagination
              render={(page: { selected: number }) => {
                setActivePage(page.selected + 1);
              }}
              recordsPerPage={limit}
              activePage={activePage}
              totalPages={publications.page_count}
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
              {publications["_embedded"]["edition"].map(
                (publication: IPublication, i: number) => {
                  return (
                    <PublicationCard
                      delay={i * 100}
                      key={publication.identifier}
                      {...publication}
                    />
                  );
                }
              )}
            </div>

            <Pagination
              render={(page: { selected: number }) => {
                setActivePage(page.selected + 1);
              }}
              recordsPerPage={limit}
              activePage={activePage}
              totalPages={publications.page_count}
            />

            {publications.total_items === 0 && (
              <div className="text-center my-40">
                <div className="opacity-50 mb-8">
                  Sorry, no content available...
                </div>
                <Flex className="justify-center">
                  <button
                    style={{ outline: `none`, letterSpacing: 2 }}
                    className={`bg-white shadow-theme px-8 py-2 rounded-full font-bold text-size-14 uppercase outline-none`}
                    onClick={() => setActiveCategory(null)}
                  >
                    <Flex className="items-center space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <span>Clear filter</span>
                    </Flex>
                  </button>
                </Flex>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Project;
