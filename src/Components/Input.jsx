import React from "react";
import { useForm, useFormContext } from "react-hook-form";

const Input = ({
  errors: errors,
  inputName: inputName,
  inputOjbName: inputObjName,
  type: type,
}) => {
  const { register } = useFormContext();
  return (
    <div className="relative">
      {errors[{ inputObjName }] ? (
        <img
          className="absolute right-4 top-4"
          src={require("../images/icon-error.svg").default}
          alt="error"
        />
      ) : (
        ""
      )}

      <input
        className="input"
        {...register(
          { inputObjName },
          {
            required: {
              value: true,
              message: `${inputName} cannot be empty`,
            },
          }
        )}
        type={type}
        placeholder={inputName}
      />
      <p className="error-message">
        {errors[{ inputObjName }] ? errors[{ inputObjName }]?.message : ""}
      </p>
    </div>
  );
};

export default Input;
