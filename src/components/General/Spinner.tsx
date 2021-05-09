import React from "react";
import styled from "styled-components";

interface ISpinner {
  strokewidth?: number;
  width?: number;
  height?: number;
  color?: string;
}

const Spinner = (props: ISpinner) => {
  const { width = 50, height = 50, color = `#fff`, strokewidth = 4 } = props;
  return (
    <StyledSpinner
      color={color}
      height={height}
      width={width}
      viewBox="0 0 50 50"
    >
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth={strokewidth}
      />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.svg<ISpinner>`
  animation: rotate 1s linear infinite;
  width: ${(props) => (props.width === undefined ? 50 : `${props.width}px`)};
  height: ${(props) => (props.height === undefined ? 50 : `${props.height}px`)};

  & .path {
    stroke: ${(props) => props.color};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;
