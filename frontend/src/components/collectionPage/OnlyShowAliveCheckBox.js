import React from "react";
import Styled from "styled-components";

const OnlyShowAliveCheckBox = ({
  onChangeHandler,
  isOnlyShowInStockChecked,
}) => {
  return (
    <Div>
      <label className="label">
      <input
        type="checkbox"
        checked={isOnlyShowInStockChecked}
        onChange={onChangeHandler}
      />
        Alive!</label>
    </Div>
  );
};

export default OnlyShowAliveCheckBox;

const Div = Styled.div`

display: flex;
gap: 0.5rem;
align-items: center;
border: 2px solid lightgray;
border-radius: 1rem;
padding: 0.7rem;

.label {
    font-size:1.2em;
    font-weight: 700;
    color: dimgray;
}


`;
