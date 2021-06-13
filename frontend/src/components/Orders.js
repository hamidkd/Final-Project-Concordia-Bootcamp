import React from "react";
import Styled from "styled-components";
import Order from "./Order";

const Orders = ({ orders }) => {
  const tableHeaderOrder = {
    tutorUsername: "Tutor Username",
    firstname: "firstname",
    lastname: "lastname",
    age: "age",
    email: "email",
    phone: "phone",
  };
  return (
    <Div>
      
        <Order order={tableHeaderOrder} />
        {orders.map((order) => {
          return <Order order={order}></Order>;
        })}
    </Div>
  );
};

export default Orders;

const Div = Styled.div`
overflow-x: auto ;

border-radius: 1rem;

`;
