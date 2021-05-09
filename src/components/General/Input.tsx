import styled from "styled-components";

const Input = styled.input`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(255, 255, 255);

  border: 1px solid rgb(255, 255, 255);
  width: 100%;
  appearance: none;
  transition: all 0.2s ease-in-out 0s;
  box-shadow: rgb(21 0 64 / 6%) 0px 4px 88px,
    rgb(21 0 64 / 2%) 0px 30.1471px 24.1177px,
    rgb(21 0 64 / 2%) 0px 12.52px 10px, rgb(21 0 64 / 2%) 0px 4.5288px 3.62304px;
  outline: none !important;

  &:focus {
    box-shadow: rgb(21 0 64 / 6%) 0px 4px 88px,
      rgb(21 0 64 / 6%) 0px 30.1471px 24.1177px,
      rgb(21 0 64 / 6%) 0px 12.52px 10px,
      rgb(21 0 64 / 6%) 0px 4.5288px 3.62304px;
  }
`;

export default Input;
