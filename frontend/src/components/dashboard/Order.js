import React from "react";
import Styled from "styled-components";
import { BiTrash } from "react-icons/bi";

const Order = ({
  order,
  isDelitable,
  deleteHandler,
  isReviewable,
  reviewHandler,
}) => {
  const {
    _id,
    tutorUsername,
    firstname,
    lastname,
    age,
    email,
    phone,
    classname,
    tutorFirstname,
    tutorLastname,
  } = order;

  return (
    <Tr>
      <td>{classname}</td>
      <td>{tutorFirstname + " " + tutorLastname}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>{phone}</td>
      {isDelitable && (
        <td className="delete-icon">
          <button className="delete-button" value={_id} onClick={deleteHandler}>
            Delete
          </button>
        </td>
      )}
      {isReviewable && (
        <td>
          <button className="review-button" value={tutorUsername} onClick={reviewHandler}>
            Review
          </button>
        </td>
      )}
    </Tr>
  );
};

export default Order;

const Tr = Styled.tr`

.delete-icon {
  text-align: center;
}

.delete-button, .review-button {
  font-size: 0.9em;
  box-shadow: none;
  padding: 0;
  margin: 0 auto;
  background: none;
  color: red;
}

.review-button {
  color: green;
}

`;
