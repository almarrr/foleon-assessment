import React, { useEffect, useState } from "react";
import styled from "styled-components";

import useInView from "react-cool-inview";

const animationTime = `.25s`;

const AnimatedWrapper = styled.div<{ loading?: boolean; delay?: number }>`
  position: relative;
  transform: ${(props) =>
    props.loading ? "translateY(5rem)" : "translateY(0)"};
  opacity: ${(props) => (props.loading ? 0 : 1)};
  transform-origin: bottom center;
  transition: transform ${animationTime} cubic-bezier(0.77, 0, 0.175, 1) 0s,
    opacity ${animationTime} cubic-bezier(0.77, 0, 0.175, 1) 0s,
    -webkit-transform ${animationTime} cubic-bezier(0.77, 0, 0.175, 1) 0s;

  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
`;

interface IProps {
  children: any;
  delay?: number;
  overflow?: boolean;
}

export const AnimatedSlideInElement = (props: IProps) => {
  const { children, delay = 0, overflow = false } = props;

  const [loading, setLoading] = useState(true);

  const { ref, inView } = useInView<any>({
    threshold: 0.01,
  });

  useEffect(() => {
    if (inView === true) {
      setTimeout(() => {
        setLoading(false);
      }, delay);
    }
  }, [inView, delay]);

  return (
    <div className={overflow === false ? `overflow-hidden` : ``} ref={ref}>
      <AnimatedWrapper loading={loading}>{children}</AnimatedWrapper>
    </div>
  );
};
