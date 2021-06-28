import React, { useContext, useState } from "react";
import Styled from "styled-components";
import { AppContext } from "./AppProvider";
import { themeVars } from "./GlobalStyles";

import GoogleLogin from "react-google-login";

import Input from "./Input";
import { useAuth } from "./AuthProvider";

const GoogleLoginButton = () => {
  const { currentUser, setCurrentUser } = useAuth();

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
       

        if (json.status === 200 || json.status === 201) {
          setCurrentUser(json.data);
          localStorage.setItem("currentUser", JSON.stringify(json.data));
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
    <GoogleLogin
      clientId="970981967092-8kp9jcceesje46te9fnr24hq2mff22ad.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseSuccessGoogle}
      onFailure={responseErrorGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default GoogleLoginButton;

const Div = Styled.div`


.button {
    background: ${themeVars.accentColor};
    border: none;
    border-radius: 500px;
    padding-block: 0.5rem;
    padding-inline: 1rem;
    width: 100%;
}

`;
