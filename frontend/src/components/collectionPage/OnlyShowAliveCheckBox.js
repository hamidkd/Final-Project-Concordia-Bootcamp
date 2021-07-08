import React from "react";
import Styled from "styled-components";

const OnlyShowAliveCheckBox = ({
  onChangeHandler,
  isOnlyShowInStockChecked,
}) => {
  return (
    <Div>
      <input
        type="checkbox"
        checked={isOnlyShowInStockChecked}
        onChange={onChangeHandler}
      />
      <label className="label">Alive!</label>
    </Div>
  );
};

export default OnlyShowAliveCheckBox;

const Div = Styled.div`

display: flex;
gap: 0.5rem;
align-items: center;

.label {
    font-size:1.2em;
    font-weight: 700;
    color: dimgray;
}


`;
