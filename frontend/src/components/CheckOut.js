import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Styled from "styled-components";
import Loading from "./Loading";
import Form from "./Form";
import Input from "./Input";

const CheckOut = () => {
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
          history.push("/confirmation");
        }
      });
  };

  return (
    <Div>
      {!tutor && <Loading />}
      {tutor && (
        <>
          <Div className="class-info">
            <h3>Summary:</h3>
            <p>
              {tutor.classname} with {tutor.firstname} {tutor.lastname}
            </p>
            <p className="price">
              total: ${tutor.price * tutor.numberOfSessions}
            </p>
            <p className="session"></p>
          </Div>
          <Form submitHandler={submitHandler}>
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
              required={false}
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
              inputmode="numeric"
              pattern="[0-9\s]{10}"
              maxlength="10"
            />
            <h3>Credit Card Info</h3>
            <p>Please fill out the form beloow</p>
            <Input
              name="creditCard"
              placeholder="Credit Card"
              type="tel"
              required={true}
              inputmode="numeric"
              pattern="[0-9\s]{13,19}"
              maxlength="19"
              changeHandler={handleFormDataCahnge}
            />
            <Input
              name="expirationDate"
              placeholder="Expiration Date"
              type="tel"
              required={true}
              inputmode="numeric"
              pattern="[0-9\s]{4}"
              maxlength="4"
              changeHandler={handleFormDataCahnge}
            />
            <button type="submit" className="primary-button">
              Submit
            </button>
          </Form>
        </>
      )}
    </Div>
  );
};

export default CheckOut;

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
