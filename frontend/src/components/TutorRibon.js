import React from 'react';
import Styled from "styled-components";
import { Link } from 'react-router-dom';

const TutorRibon = () => {
    return (
        <Div>
        <p>this is tutor ribon.</p>
        <p>
          <Link to="/tutor-dashboard">Go to tutor Dashboard</Link>
        </p>
      </Div>
    )
}

export default TutorRibon;



const Div = Styled.div`

background: teal;
padding: 0.5rem;
padding-inline: 2rem;

display: flex;
justify-content: space-between;

`