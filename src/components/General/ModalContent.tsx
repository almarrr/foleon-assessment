import React, { useEffect, useState } from "react";
import api from "../../api/_api";
import { IPublication } from "../../interfaces/interfaces";
import Flex from "./Flex";
import Title from "./Title";

interface IModalContent {
  id: string;

  onClose: () => void;
}

const ModalContent: React.FC<IModalContent> = (props) => {
  const { id, onClose } = props;

  const [publication, setPublication] = useState<null | IPublication>(null);

  const image: string = `https://images.unsplash.com/photo-1617484038571-c999581a7f12?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80`;

  const content = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus perspiciatis dolore optio cumque, exercitationem sint? Eum perferendis suscipit fugiat architecto.`;

  useEffect(() => {
    const getPublication = async () => {
      const result = await api.publication.get({ id });

      setPublication(result);
    };

    getPublication();
  }, []);

  if (publication === null) {
    return <React.Fragment></React.Fragment>;
  }

  return (
    <div
      className="bg-white container px-0 my-40 rounded-lg shadow-theme overflow-hidden"
      style={{ maxWidth: 800 }}
    >
      <img
        style={{ height: 400 }}
        src={image}
        className="w-full object-cover object-center"
      />
      <div className="pt-24 px-16 pb-24">
        <div className="mx-auto px-16">
          <Title
            title={publication.name}
            subtitle={
              publication.category
                ? publication.category.replace(`_`, ` `)
                : undefined
            }
          />
          <p>{content}</p>
        </div>
        <Flex className="justify-center items-center pt-16">
          <button
            style={{ outline: `none` }}
            onClick={onClose}
            className="bg-light rounded-full px-12 py-4"
          >
            <Flex className="opacity-60 hover:opacity-100 font-bold items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
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
              <span>Close</span>
            </Flex>
          </button>
        </Flex>
      </div>
    </div>
  );
};

export default ModalContent;
