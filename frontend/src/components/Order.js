import React from "react";
import Styled from "styled-components";

const Order = ({ order }) => {
  const { tutorUsername, firstname, lastname, age, email, phone } = order;

  return (
    <Div>
      <p>{tutorUsername}</p>
      <p>{firstname}</p>
      <p>{lastname}</p>
      <p>{age}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </Div>
  );
};

export default Order;

const Div = Styled.div`

padding: 0.8rem;
background: ghostwhite;
overflow-x: auto ;

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
/* gap: 1rem; */

p {
    font-size: 0.8em;
}
`;
