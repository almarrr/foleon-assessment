import React from "react";
import { createPortal } from "react-dom";

const Modal: React.FC = ({ children }) => {
  const modalelement = document.getElementById("modal");

  if (modalelement === null) {
    return <></>;
  }

  return createPortal(
    <>
      <div
        className="fixed top-0 left-0 z-30 w-screen h-screen"
        style={{ backdropFilter: `blur(10px)` }}
      >
        <div className="z-0 bg-black h-full w-full absolute top-0 left-0 opacity-50"></div>
        <div className="relative h-full w-full overflow-y-auto">{children}</div>
      </div>
    </>,
    modalelement
  );
};

export default Modal;
