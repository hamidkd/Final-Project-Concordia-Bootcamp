import React from "react";
import Styled from "styled-components";
import Order from "./Order";

const Orders = ({ orders, isDelitable, deleteHandler }) => {
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
      <table className="table">
        <tr>
          <th>Class</th>
          <th>Tutor</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Email</th>
          <th>Phone</th>
          {isDelitable && <th>Delete</th>}
        </tr>
        {orders.map((order) => {
          return (
            <Order
              order={order}
              isDelitable={isDelitable}
              deleteHandler={deleteHandler}
            ></Order>
          );
        })}
      </table>
    </Div>
  );
};

export default Orders;

const Div = Styled.div`
overflow-x: auto ;


.table {
  border-collapse: collapse;
  width: 100%;

  tr {

    th {
      padding: 8px;
      border: 1px solid #ddd;
      text-align: left;
      }

    td{
      border: 1px solid #ddd;
      padding: 8px;
      }
  }

  tr:nth-child(even){background-color: #f2f2f2;}
}
`;
