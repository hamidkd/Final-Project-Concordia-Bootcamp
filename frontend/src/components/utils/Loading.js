import react from "react";
import styled, { keyframes } from "styled-components";
import { CgSpinner } from "react-icons/cg";

const Loading = () => {
  return (
    <Div className="spinner-div">
      <CgSpinner size="60" className="spinner" />
    </Div>
  );
};

export default Loading;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Div = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    animation: ${rotate} 1s linear infinite;
  }
`;
