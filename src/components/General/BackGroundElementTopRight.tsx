import React from "react";

interface IProps {
  delay?: number;
  height?: string | number;
  className?: string;
}

const BackGroundElementTopRight = (props: IProps) => {
  const { delay = 0, height = `160vh` } = props;

  return (
    <div
      className={` ${
        props.className !== undefined && props.className
      } absolute pointer-events-none z-0 w-screen right-0 top-0`}
    >
      <div
        style={{
          filter: `hue-rotate(25deg)`,
          opacity: 0.4,
          maxHeight: 1500,
          height,
          background:
            "linear-gradient(219.59deg, rgba(4, 205, 193, 0.2) 0%, rgba(39, 58, 229, 0.075) 16.16%, rgba(39, 58, 229, 0.075) 29.2%, rgba(93, 27, 202, 0.025) 44.68%, rgba(93, 27, 202, 0) 50.05%)",
        }}
      />
    </div>
  );
};

export default BackGroundElementTopRight;
