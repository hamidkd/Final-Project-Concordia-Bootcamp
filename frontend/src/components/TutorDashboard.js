import React, { useEffect, useState, useContext } from "react";
import Styled from "styled-components";
import Orders from "./Orders";
import { useAuth } from "./AuthProvider";
import ClassInfoCard from "./ClassInfoCard";
import { themeVars } from "./GlobalStyles";

const TutorDashboard = ({}) => {
  const [orders, setOrders] = useState(null);

  const { currentUser } = useAuth();

  useEffect(() => {
    fetch("/api/orders/" + currentUser.username)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          setOrders(json.data);
        }
      });
  }, [currentUser]);

  return (
    <Div className="dashboard">
      <h2>Tutor Dashboard</h2>
      <ClassInfoCard theTutor={currentUser} isEditable={true}/>

      <Div className="sale-info">
        <h3>Sales Info</h3>
        {orders && <h4>Total Sale: {orders.length}</h4>}
        <p>Here are users bought your class:</p>
        {orders && <Orders orders={orders} />}
      </Div>
    </Div>
  );
};

export default TutorDashboard;

const Div = Styled.div`
background: thistle;
padding: 2rem;
gap: 2rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: stretch;

h2 {
  padding: 1rem;
  margin: 0;
}

p {
  color: dimgray;
}
h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

}


.sale-info {
  background: white;
  border-radius: 1rem;
  box-shadow: ${themeVars.boxShadow}    
}
`;
