import React from "react";
import { useFormContext } from "react-hook-form";

const CustomInput = ({
  inputName: inputName,
  inputOjbName: inputObjName = "test",
  type: type,
  specialRule,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  console.log(errors);
  return (
    <div className="relative">
      {errors[inputObjName] ? (
        <img
          className="absolute right-4 top-4"
          src={require("../images/icon-error.svg").default}
          alt="error"
        />
      ) : (
        ""
      )}

      <input
        className={`input ${
          errors[inputObjName]
            ? "border-Red border-2"
            : "border-[1px] border-neutralGray focus:border-neutralDarkBlue"
        }`}
        {...register(inputObjName, {
          required: {
            value: true,
            message: `${inputName} cannot be empty`,
          },
          specialRule,
        })}
        type={type}
        placeholder={errors[inputObjName] ? "" : inputName}
      />
      <p className="error-message">
        {errors[inputObjName] ? errors[inputObjName]?.message : ""}
      </p>
    </div>
  );
};

export default CustomInput;
