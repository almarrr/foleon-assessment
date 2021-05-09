import React, { memo } from "react";

interface IProps {
  title: string;
  subtitle?: string;
  align?: "text-center" | "text-right";
}

const Title = (props: IProps) => {
  return (
    <React.Fragment>
      {props.subtitle !== undefined && (
        <div className="text-center text-primary font-bold pb-2">
          {props.subtitle}
        </div>
      )}
      <h1
        className="text-size-30 lg:text-size-35 text-center pb-2 mb-16"
        style={{ lineHeight: 1.1 }}
      >
        {props.title}
      </h1>
    </React.Fragment>
  );
};

export default memo(Title);
