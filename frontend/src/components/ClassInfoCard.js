import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import { Link } from "react-router-dom";
import { themeVars } from "./GlobalStyles";
import Modal from "./Modal";
import EditClassInfo from "./EditClassInfo";

const ClassInfoCard = ({ tutor, isEditable }) => {
  const [isInEditMode, setIsInEditeMode] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("click", handleClick);

  //     return () => {
  //       window.removeEventListener("click", handleClick);
  //     };
  //   }, [isInEditMode]);

  const handleClick = (event) => {
    console.log("targe type", Object.keys(event.target));
    if (isInEditMode) {
      setIsInEditeMode(false);
    }
  };

  return (
    <>
      {tutor && (
        <Div className="class-Info">
          <h3>Class Info</h3>
          <h4>Title: </h4>
          <p className="classname"> {tutor.classname}</p>
          <h4>Description:</h4>
          <p>{tutor.description}</p>
          <h4>Tutor Bio:</h4>
          <p>{tutor.bio}</p>
          <h4>Price:</h4>
          <p>${tutor.price}</p>
          <h4>category:</h4>
          <p>{tutor.category}</p>
          <h4>Number of Sessions:</h4>
          <p>{tutor.numberOfSessions}</p>
          <h4>Session Duration:</h4>
          <p>{tutor.sessionDuration} minutes</p>
          {isEditable && (
            <button className="button" onClick={() => setIsInEditeMode(true)}>
              {isInEditMode ? "Editting" : "Edit Class Info"}
            </button>
          )}
          <Modal isVisible={isInEditMode} close={() => setIsInEditeMode(false)}>
            <EditClassInfo tutor={tutor} />
          </Modal>
        </Div>
      )}
    </>
  );
};

export default ClassInfoCard;

const Div = Styled.div`
background: white;

display: flex;
flex-direction: column;
gap: 1rem;
padding: 2rem;
border-radius: 1rem;
justify-content: flex-start;
align-items: flex-start;
box-shadow: ${themeVars.boxShadow};


h2 {
    margin: 0;
    padding: 0;
}

.button {
    background: skyblue;
  }
`;
