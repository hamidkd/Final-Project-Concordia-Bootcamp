import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Orders from "./Orders";

const AdminDashboard = () => {
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.status === 200) {
          setOrders(json.data);
        }
      });
  }, []);

  console.log("Orders", orders);
  return (
    <Div>
      <h2>Admin Dashboard</h2>
      {orders && <Orders orders={orders} />}
    </Div>
  );
};

export default AdminDashboard;

const Div = Styled.div`

padding: 2rem;

`;
