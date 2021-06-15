import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import Orders from "./Orders";
import { themeVars } from "./GlobalStyles";
import ClassInfoCard from "./ClassInfoCard";

const AdminDashboard = () => {
  const [orders, setOrders] = useState(null);
  const [tutors, setTutors] = useState(null);
  const [selectedTutor, setSelectedTutor] = useState(null);

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

  useEffect(() => {
    fetch("/api/tutors")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.status === 200) {
          setTutors(json.data);
        }
      });
  }, []);

  const handleChange = (event) => {
    const selectedTutorUsername = event.target.value;
    const st = tutors.find((tutor) => {
      return tutor.username === selectedTutorUsername;
    });

    setSelectedTutor(() => st);
  };

  console.log("Orders", orders);
  console.log("tutors", tutors);

  return (
    <Div>
      <h2>Admin Dashboard</h2>
      <Div className="card">
        <h2>Total Sale</h2>
        {orders && <Orders orders={orders} />}
      </Div>
      <Div className="card">
        <h2>Edit Classes</h2>
        <p>Select a tutor:</p>
        <Select onChange={handleChange}>
          <option selected disabled>
            Select a tutor
          </option>
          {tutors &&
            tutors.length > 1 &&
            tutors.map((tutor) => {
              return (
                <option value={tutor.username}>
                  {tutor.firstname + " " + tutor.lastname}
                </option>
              );
            })}
        </Select>
        {selectedTutor && (
          <ClassInfoCard theTutor={selectedTutor} isEditable={true} />
        )}
      </Div>
    </Div>
  );
};

export default AdminDashboard;

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

.card {
  background: white;
  box-shadow: ${themeVars.boxShadow};
  border-radius: 1rem;
  gap: 1rem;

}
`;

const Select = Styled.select`

    padding: 0.7rem;
    border-radius: 0.7rem;
    /* border: 3px solid gray; */
    border: none;
    background: ${themeVars.accent2Color};
    appearance: none;
    /* background: ; */
    color: white;
    font-size:1.2em;
    font-weight: 700;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    position: relative;

    option {
      /* padding: 1rem; */
      color: white;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 1rem;

    
    }
    `;
