import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Styled from "styled-components";
import Orders from "./Orders";
import { useAuth } from "./AuthProvider";

const MyClasses = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetch("api/orders/email/" + currentUser.email)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          setOrders(json.data);
        }
      });
  }, [currentUser]);

  return (
    <>
      {" "}
      {currentUser.role !== "user" ? (
        <Redirect to="/404" />
      ) : (
        <Div>
          <h2>Here are classes you bought:</h2>
          {orders && <Orders orders={orders} />}
        </Div>
      )}
    </>
  );
};

export default MyClasses;

const Div = Styled.div`

padding :2rem;


`;
