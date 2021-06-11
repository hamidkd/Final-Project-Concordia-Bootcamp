import React, { useContext, useState } from "react";
import Styled from "styled-components";
import { AppContext } from "./AppProvider";
import { themeVars } from "./GlobalStyles";

import GoogleLogin from "react-google-login";

import Input from "./Input";

const Comp = () => {
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const [formData, setFormData] = useState(null);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSumbit = () => {
    fetch("/api/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };


  const responseSuccessGoogle = (res) => {
    console.log("RES from Google Login", res);

    fetch("/api/googlelogin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenId: res.tokenId }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          setCurrentUser(json.data);
        } else if (json.status === 500) {
          window.alert("Error! somethig went wrong!");
        } else {
          window.alert("No such a user!");
        }
      });
  };

  const responseErrorGoogle = (res) => {
    console.log("Error RES from Google Login", res);
  };

  return (
    <Div>
      {/* <form className="form" onSubmit={handleSumbit}>
        <Input
          name="username"
          type="text"
          required={true}
          handleChange={handleChange}
        />
        <Input name="password" type="password" required={true} />

        <button className="button" type="submit">
          Sign In
        </button>

        
      </form> */}
      <GoogleLogin
          clientId="970981967092-8kp9jcceesje46te9fnr24hq2mff22ad.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
    </Div>
  );
};

export default Comp;

const Div = Styled.div`

padding: 1rem;
border-radius: 1rem;
margin: auto 0;
display: flex;
flex-direction: column;
align-items: center;



.button {
    background: ${themeVars.accentColor};
    border: none;
    border-radius: 500px;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    width: 100%;
}

`;