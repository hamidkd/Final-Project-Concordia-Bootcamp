import React, { useEffect, useState, useContext } from "react";
import Styled from "styled-components";
import Orders from "./Orders";
import { AppContext } from "./AppProvider";
import { useAuth } from "./AuthProvider";

const TutorDashboard = ({ tutor }) => {
  const [orders, setOrders] = useState(null);
  const { currentUser } = useAuth();
  useEffect(() => {
    fetch("/api/orders/" + currentUser.username)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.status === 200) {
          setOrders(json.data);
        }
      });
  }, [currentUser]);

  console.log("Orders", orders);
  return (
    <Div>
      <h2>Tutor Dashboard</h2>
      {orders && <Orders orders={orders} />}
    </Div>
  );
};

export default TutorDashboard;

const Div = Styled.div`

padding: 1rem;

`;
