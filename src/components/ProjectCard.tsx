import React, { memo, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { IProject } from "../interfaces/interfaces";
import { AnimatedSlideInElement } from "./General/Animated";

interface IProps extends IProject {
  delay?: number;
}

const ProjectCard: React.FC<IProps> = (props) => {
  const url = `/project/${props.id}/${props.identifier}`;

  const [image, setImage] = useState(
    `https://images.unsplash.com/photo-1598832517527-7e5b15ee1b2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3086&q=80`
  );

  const { delay = 100 } = props;

  useEffect(() => {
    switch (props.name) {
      case `Amsterdam`:
        setImage(
          `https://images.unsplash.com/photo-1534352267890-0c7d8e0630bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80`
        );
        break;

      case `Brochure`:
        setImage(
          `https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80`
        );
        break;

      case `Ebooks`:
        setImage(
          `https://images.unsplash.com/photo-1506953752663-add60014e80e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80`
        );
        break;

      case `Playground`:
        setImage(
          `https://images.unsplash.com/photo-1620215140243-2f5c4361566a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80`
        );
        break;

      case `Test`:
        setImage(
          `https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80`
        );
        break;

      case `Test my stuff`:
        setImage(
          `https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80`
        );
        break;
    }
  }, [props.name]);

  return (
    <AnimatedSlideInElement overflow={true} delay={delay}>
      <Link to={url} className="hover:opacity-75">
        <LazyLoadImage
          style={{ height: 250, borderRadius: 7 }}
          src={image}
          className="w-full object-cover object-center shadow-theme"
        />
      </Link>
      <div>
        <Link to={url} className="block pt-4 hover:opacity-75">
          <h3 className="text-size-26 font-extrabold">{props.name}</h3>
        </Link>

        <div className="opacity-60">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, quod!
        </div>
      </div>
    </AnimatedSlideInElement>
  );
};

export default memo(ProjectCard);
