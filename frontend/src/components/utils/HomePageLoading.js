import react, { useState, useEffect } from "react";
import styled from "styled-components";
import Loading from "./Loading";

const HomePageLoading = () => {
  const [isLate, setIsLate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLate(true);
    }, 3000);
  }, []);
  return (
    <Div>
      <Loading />
      {isLate && (
        <p>
          Sorry! It is slow becasue of Heroku free account. Thank You for your
          patient! 🤗"
        </p>
      )}
    </Div>
  );
};

export default HomePageLoading;

const Div = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 1rem;
    font-size: 1.5em;
    max-width: 40ch;
  }
`;
