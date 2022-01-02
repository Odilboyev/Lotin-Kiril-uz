import React from "react";
import InputFieldStyles from "./styled";

const InputField = ({ input, changeCallback, label, hint }) => {
  return (
    <InputFieldStyles>
      <label for="text-field" className="form-label">
        {label}
      </label>
      <textarea
        onChange={changeCallback}
        value={input}
        className="form-control"
        id="text-field"
        rows="10"
        placeholder={hint}
      ></textarea>
    </InputFieldStyles>
  );
};

export default InputField;
