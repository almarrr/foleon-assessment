import React, { memo, useMemo, useState } from "react";

import { IPublication } from "../interfaces/interfaces";
import { AnimatedSlideInElement } from "./General/Animated";

import Modal from "./General/Modal";
import ModalContent from "./General/ModalContent";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface IProps extends IPublication {
  delay?: number;
}

const PublicationCard: React.FC<IProps> = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const image: string = useMemo(
    () =>
      `https://images.unsplash.com/photo-1617484038571-c999581a7f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80`,
    []
  );

  const { delay = 100 } = props;

  return (
    <>
      {modalOpen === true && (
        <Modal>
          <ModalContent
            id={props.id}
            onClose={() => {
              setModalOpen(!modalOpen);
            }}
          />
        </Modal>
      )}
      <AnimatedSlideInElement overflow={true} delay={delay}>
        <button
          onClick={() => setModalOpen(!modalOpen)}
          className="relative hover:opacity-75"
          style={{ height: 250 }}
        >
          <LazyLoadImage
            style={{ borderRadius: 8 }}
            className="h-full w-full object-center object-cover shadow-theme mb-4"
            src={image}
          />

          {props.status === `draft` && (
            <div className="absolute bottom-0 right-0 pr-3 pb-3 ">
              <div className="bg-white rounded-full px-3 py-1 uppercase text-size-12 font-bold">
                {props.status}
              </div>
            </div>
          )}
        </button>
        <button
          className="text-left hover:opacity-75"
          onClick={() => setModalOpen(!modalOpen)}
        >
          <h3 className="text-size-20">{props.name}</h3>
          {props.category !== null && (
            <span
              className="bg-light uppercase rounded-full text-size-12 font-bold px-3 py-2"
              style={{ letterSpacing: 1.5 }}
            >
              {props.category !== undefined && (
                <span className="opacity-50">
                  {props.category.replace(`_`, ` `)}
                </span>
              )}
            </span>
          )}
        </button>
      </AnimatedSlideInElement>
    </>
  );
};

export default memo(PublicationCard);
