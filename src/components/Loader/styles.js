import styled, { keyframes } from "styled-components";

const loaderSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .loader-logo {
    animation: ${loaderSpin} infinite 2.5s linear;
    height: 3rem;
    fill: #7159c1;
  }
`;
