import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Styled from "styled-components";
import Loading from "./Loading";
import Form from "./Form";
import Input from "./Input";

const ReserveClass = () => {
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const [tutor, setTutor] = useState(null);
  const [formData, setFormData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch("/api/tutors/" + query.get("tutor"))
      .then((res) => res.json())
      .then((json) => {
        switch (json.status) {
          case 500:
            alert("Something went wrong!");
            break;
          case 400:
            alert("there is no such a tutor");
            break;
          case 200:
            setTutor(json.data);
            break;
          default:
            break;
        }
      });
  }, [query.get("tutor")]);

  const handleFormDataCahnge = (event) => {
    console.log("Faking handleing change");
    const key = event.target.name;
    const value = event.target.value;
    setFormData(() => {
      return { ...formData, [key]: value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Clciked");

    fetch("/api/orders/" + tutor.username, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          history.push("/reserve-class/confirmation");
        }
      });
  };

  return (
    <Div>
      {!tutor && <Loading />}
      {tutor && (
        <>
          <Div className="class-info">
            <h3>Class:</h3>
            <p>
              {tutor.classname} with {tutor.firstname} {tutor.lastname}
            </p>
            <p className="price">session price: ${tutor.price}</p>
            <p className="session">
              session duration: {tutor.sessionDuration} minutes
            </p>
          </Div>
          <Form submitHandler={submitHandler}>
            <h3>Number of Sessions</h3>
            <div>
              <Input
                title="Number of sessions"
                name="numberOfSessions"
                type="number"
                min="1"
                steps="1"
                required={true}
                changeHandler={handleFormDataCahnge}
              />
              {formData?.numberOfSession && (
                <p className="total-price">
                  <span>total: </span>
                  <span>
                    {formData.numberOfSession} * ${tutor.price} = $
                    {formData.numberOfSession * tutor.price}
                  </span>
                </p>
              )}
            </div>
            <h3>Student Info</h3>
            <p>Please fill out the form beloow</p>
            <Input
              name="firstname"
              type="text"
              required={true}
              changeHandler={handleFormDataCahnge}
            />
            <Input
              name="lastname"
              type="text"
              required={true}
              changeHandler={handleFormDataCahnge}
            />
            <Input
              title="Student age if under 18"
              name="age"
              type="number"
              min="0"
              max="17"
              steps="1"
              required={true}
              changeHandler={handleFormDataCahnge}
            />
            <Input
              name="email"
              type="email"
              required={true}
              changeHandler={handleFormDataCahnge}
            />
            <Input
              name="phone"
              type="tel"
              required={true}
              changeHandler={handleFormDataCahnge}
            />
            <button className="primary-button">Submit</button>
          </Form>
        </>
      )}
    </Div>
  );
};

export default ReserveClass;

const Div = Styled.div`

padding: 2rem;
border-radius: 1rem;

.total-price {
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  color: gray;
}

.class-info {
  margin: 0 auto;
  max-width: 50ch;
}

`;
