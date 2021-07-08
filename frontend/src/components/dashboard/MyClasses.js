import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import Orders from "./Orders";
import { useAuth } from "../auth/AuthProvider";
import Modal from "../utils/Modal";
import Form from "../utils/Form";
import ReactStars from "react-rating-stars-component";
import { themeVars } from "../GlobalStyles";
import Loading from "../utils/Loading";

const MyClasses = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState(null);
  const [isReviewModalVisible, setIsReviewModalVisible] = useState(false);
  const [stars, setStars] = useState(0);
  const [formData, setFormData] = useState(null);
  const [usernameOfReviewdTutor, setUsernameOfReviewdTutor] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("api/orders/email/" + currentUser.email)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          setOrders(json.data);
        }
      });
  }, [currentUser]);

  const reviewHandler = (event) => {
    setUsernameOfReviewdTutor(() => event.target.value);
    setIsReviewModalVisible((isReviewModalVisible) => !isReviewModalVisible);
  };

  const submitReviewHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch("/api/tutors/" + usernameOfReviewdTutor + "/add-review", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          setMessage("Review Added.");
        } else {
          setMessage("Sorry. Something went wrong!");
        }
        setIsLoading(false);
      });
  };

  const handleFormDataCahnge = (event) => {
    const value = event.target.value;
    const key = event.target.name;
    setFormData((formData) => {
      return { ...formData, [key]: value };
    });
  };

  const handleRatingChange = (newRating) => {
    setFormData((formData) => {
      return { ...formData, stars: newRating };
    });
  };

  return (
    <>
      {" "}
      {currentUser.role !== "user" ? (
        <Redirect to="/404" />
      ) : (
        <>
          <Div>
            <h2>Here are classes you bought:</h2>
            {orders && (
              <Orders
                orders={orders}
                isReviewable={true}
                reviewHandler={reviewHandler}
              />
            )}
          </Div>
          <Modal
            isVisible={isReviewModalVisible}
            close={() => {
              setIsReviewModalVisible(false);
              setMessage(null);
            }}
          >
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {message ? (
                  <Div className="padded">
                    <h3>{message}</h3>
                  </Div>
                ) : (
                  <Form submitHandler={submitReviewHandler}>
                    <ReactStars
                      count={5}
                      edit={true}
                      value={stars}
                      size={24}
                      isHalf={true}
                      activeColor="#ffd700"
                      onChange={handleRatingChange}
                    />
                    <textarea
                      className="textarea"
                      onChange={handleFormDataCahnge}
                      name="text"
                    ></textarea>
                    <button type="submit" className="primary-button">
                      Submit
                    </button>
                  </Form>
                )}
              </>
            )}
          </Modal>
        </>
      )}
    </>
  );
};

export default MyClasses;

const Div = Styled.div`

padding :2rem;

.padded {
    padding: 2rem;
}


`;
