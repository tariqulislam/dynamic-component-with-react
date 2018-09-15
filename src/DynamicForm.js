import React from "react";
import "./styles.css";

const DynamicForm = props => {
  return (
    <div className={"dynamic-form"}>
      <input
        onChange={e => {
          const inputData = {
            formSerial: props.formSerial,
            value: e.target.value
          };
          props.onChangeComponentData(inputData);
        }}
        placeholder={`Enter Text ${props.formSerial}`}
        type="text"
      />
      <button
        onClick={() => props.removeFormButtonClick(props.formSerial)}
        type="button"
      >
        Cancel
      </button>
    </div>
  );
};

export default DynamicForm;
