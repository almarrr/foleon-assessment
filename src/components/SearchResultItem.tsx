import React, { memo, useState } from "react";
import { IPublication } from "../interfaces/interfaces";
import Column from "./General/Column";
import Flex from "./General/Flex";
import Modal from "./General/Modal";
import ModalContent from "./General/ModalContent";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SearchResultItem: React.FC<IPublication> = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const image: string = `https://images.unsplash.com/photo-1617484038571-c999581a7f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80`;

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

      <button
        onClick={() => setModalOpen(!modalOpen)}
        className="px-6 text-left py-6 border-b border-light hover:opacity-75"
      >
        <Flex className="space-x-4">
          <LazyLoadImage
            style={{ width: 50, height: 50 }}
            src={image}
            className="rounded-lg"
          />
          <Column>
            <div style={{ lineHeight: 1.2 }} className="font-bold text-size-18">
              {props.name}
            </div>
            <div>
              {props.category !== null && (
                <span
                  className="bg-light uppercase rounded-full text-size-12 font-bold px-3 py-2"
                  style={{ letterSpacing: 1.5 }}
                >
                  <span className="opacity-50">{props.category}</span>
                </span>
              )}
            </div>
          </Column>
        </Flex>
      </button>
    </>
  );
};

export default memo(SearchResultItem);
