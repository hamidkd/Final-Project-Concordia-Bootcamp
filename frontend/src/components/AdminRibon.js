import React from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const AdminRibon = () => {
  return (
    <Div>
      <p>this is admin ribon.</p>
      <p>
        <Link to="/admin-dashboard">Go to Admin Dashboard</Link>
      </p>
    </Div>
  );
};

export default AdminRibon;

const Div = Styled.div`

background: purple;
padding: 0.5rem;
padding-inline: 2rem;

display: flex;
justify-content: space-between;
`;
