import React, { useEffect, useState, useContext } from "react";
import Styled from "styled-components";
import Orders from "./Orders";
import { AppContext } from "./AppProvider";
import { useAuth } from "./AuthProvider";
import { Link } from "react-router-dom";

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
    <Div className='dashboard'>
      <h2>Tutor Dashboard</h2>
      <Div className="class-Info">
        <h3>Class Info</h3>
        <h4>
          Title:{" "}
        </h4>
          <p className="classname"> {currentUser.classname}</p>
        <h4>Description:</h4>
        <p>{currentUser.description}</p>
        <h4>Tutor Bio:</h4>
        <p>{currentUser.bio}</p>
        <h4>Price:</h4>
        <p>${currentUser.price}</p>
        <h4>category:</h4>
        <p>{currentUser.category}</p>
        <Link className="button" to="/edit-class">
          Edit Class Info
        </Link>
      </Div>
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
padding: 2rem;
margin: 1rem;
border-radius: 1rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;



.class-Info {

  .button {
    background: skyblue;
  }
  
}

p {
  color: dimgray;
}

border: 1px solid gray;
h3 {
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

}


.sale-info {
}
`;
