import React, { useEffect, useState } from "react";
import Styled from "styled-components";
import { themeVars } from "../GlobalStyles";
import { Link } from "react-router-dom";

const FeaturedClass = ({ tutorUsername }) => {
  const [tutor, setTutor] = useState(null);

  useEffect(() => {
    fetch("/api/tutors/" + tutorUsername)
      .then((res) => res.json())
      .then((json) => {
        if (json.status === 200) {
          setTutor(json.data);
        }
      });
  }, []);
  return (
    <>
      {tutor && (
        <Div>
          <Link to={"/tutors/" + tutor.username}>
            <div className="wrapper">
              <div className="banner"></div>
              <img
                className="banner"
                src={"/images/banners/" + tutor.username + ".jpg"}
                alt="banner picture for the class"
                width="400px"
                height="400px"
              />
              <div className="card-body">
                <h2>{tutor.classname}</h2>
                <p className="bio">{tutor.bio.slice(0, 180) + "..."}</p>
                <div className="tutor-name-avatar">
                  <img
                    className="avatar"
                    src={"/images/tutors/" + tutor.username + ".jpg"}
                    alt="profile-picture"
                  />
                  <div className="tutor">
                    <p>taught by </p>
                    <span className="tutor-name">
                      {tutor.firstname} {tutor.lastname}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Div>
      )}
    </>
  );
};

export default FeaturedClass;

const Div = Styled.div`
box-shadow: ${themeVars.boxShadow};

&:hover {
  box-shadow: ${themeVars.boxShadowHover};
}
background: white;
border-radius: 1rem;
overflow: hidden;
.wrapper {

display: flex;


.banner {
/* flex: 50%; */
/* object-fix: cover; */
/* height: 100%; */
/* aspect-ratio: 1/1; */
/* max-width: 40%; */
}

@media only screen and (max-width: 800px) {
  flex-direction: column;
  max-width: 400px;
  .banner {
    /* max-width: 40rem; */
/* max-width: 100%; */
/* aspect-ratio: 1/1; */
  }
}
.card-body {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding: 1.5rem;
}

h2 {
  text-align: left;
  padding: 0;
  margin: 0;
  line-height: 1.4;
}
p {
  color: gray;
}
.bio {
  margin-block: auto;
  overflow: hidden;
}

.tutor-name-avatar {
  margin-top: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.avatar {
  margin-top: auto;
  /* justify-self: flex-end; */
  max-width: 4rem;
  aspect-ration: 1/1;
  border-radius: 30rem;
}

.tutor-name {
  font-weight: 700;
  color: dimgray;
}
}

`;
