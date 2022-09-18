import React from "react";

const FormInput = ({
  inputLabel,
  inputType,
  inputPlaceholder,
  inputId,
  inputName,
  handleChange,
}) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">{inputLabel}</label>
        <input
          step="0.0001"
          type={inputType}
          className="form-control"
          id={inputId}
          name={inputName}
          placeholder={inputPlaceholder}
          onChange={(e) => handleChange(e, inputName)}
          required={true}
        />
      </div>
    </>
  );
};

export default FormInput;
