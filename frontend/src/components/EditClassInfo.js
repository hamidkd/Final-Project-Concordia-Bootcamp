import React, { useEffect, useState, useContext } from "react";
import { useHistory } from "react-router";
import Styled from "styled-components";
import { AppContext } from "./AppProvider";
import ClassInfoCard from "./ClassInfoCard";
import Form from "./Form";
import { themeVars } from "./GlobalStyles";
import Input from "./Input";
import Loading from "./Loading";
import { useAuth } from "./AuthProvider";

const EditClassInfo = ({ tutor, updateTutor }) => {
  const [formData, setFormData] = useState(null);
  const [status, setStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser, setCurrentUser } = useAuth();

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch("/api/tutors/" + tutor.username + "/update", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log("here");
        if (json.status === 200) {
          if (currentUser.role === "tutor") {
            setCurrentUser(json.data);
            localStorage.setItem("currentUser", JSON.stringify(json.data));
          }
          updateTutor(json.data);
          setStatus("Successfully Updated!");
          setIsLoading(false);
        } else {
          setStatus("Sorry. Something went wrong. Try again later.");
          setIsLoading(false);
        }
      });
  };

  const handleFormDataCahnge = (event) => {
    console.log("Faking handleing change");
    const key = event.target.name;
    const value = event.target.value;
    setFormData(() => {
      return { ...formData, [key]: value };
    });
  };

  return (
    <>
      <Div>
        {isLoading ? (
          <div className="padded">
            <Loading />
          </div>
        ) : (
          <>
            {status ? (
              <div className="padded">
                <h3>{status}</h3>
              </div>
            ) : (
              <Form submitHandler={submitHandler}>
                <h2>Edit Class Info</h2>
                <Input
                  name="classname"
                  type="text"
                  placeholder="Class Title"
                  changeHandler={handleFormDataCahnge}
                  defaultValue={tutor.classname}
                />
                <Input
                  name="bio"
                  type="text"
                  placeholder="Tutor Bio"
                  changeHandler={handleFormDataCahnge}
                  defaultValue={tutor.bio}
                />
                <Input
                  name="price"
                  type="text"
                  placeholder="price of Each Session in CAD"
                  inputmode="numeric"
                  min="0"
                  steps="1"
                  pattern="[0-9]+"
                  changeHandler={handleFormDataCahnge}
                  defaultValue={tutor.price}
                />
                <Input
                  name="numberOfSessions"
                  type="text"
                  placeholder="Number Of Sessions"
                  inputmode="numeric"
                  steps="1"
                  min="0"
                  pattern="[0-9]+"
                  changeHandler={handleFormDataCahnge}
                  defaultValue={tutor.numberOfSessions}
                />
                <Input
                  name="sessionDuration"
                  type="text"
                  placeholder="Duration of Ech Session"
                  inputmode="numeric"
                  steps="1"
                  min="0"
                  pattern="[0-9]+"
                  changeHandler={handleFormDataCahnge}
                  defaultValue={tutor.sessionDuration}
                />
                <button type="submit" className="primary-button">
                  Update
                </button>
              </Form>
            )}
          </>
        )}
      </Div>
    </>
  );
};

export default EditClassInfo;

const Div = Styled.div`

display: flex;
flex-direction: column;
justify-content:center;
align-items:center;

.padded {
    padding: 2rem;
}

`;
