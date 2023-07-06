import React from "react";

const ChildComponent = (props) => {
  const { inputValue, setInputValue } = props;

  return (
    <div className="child">
      <h2>Child Component</h2>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        value={inputValue}
      />
    </div>
  );
};
export default ChildComponent;
