import React from "react";
import Styled from "styled-components";
import {BiTrash} from 'react-icons/bi'

const Order = ({ order, isDelitable, deleteHandler }) => {
  const { _id, tutorUsername, firstname, lastname, age, email, phone, classname, tutorFirstname, tutorLastname } = order;

  console.log('id', _id);
  return (
    <Tr>
      <td>{classname}</td>
      <td>{tutorFirstname + " " + tutorLastname}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{age}</td>
      <td>{email}</td>
      <td>{phone}</td>
      {isDelitable && <td className='delete-icon'><button className='delete-button' value={_id} onClick={deleteHandler}>delete</button></td>}
    </Tr>
  );
};

export default Order;

const Tr = Styled.tr`

.delete-icon {
  text-align: center;
}

.delete-button {
  font-size: 0.7em;
  box-shadow: none;
  padding: 0;
  margin: 0 auto;
  background: none;
  color: red;
}
`;
