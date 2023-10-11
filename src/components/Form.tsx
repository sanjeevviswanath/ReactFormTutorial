//USE OF useForm REACT HOOK
// for useForm - npm i react-hook-form@7.43
// import React from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData {
  name: String;
  age: number;
}
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setFocus,
    resetField,
  } = useForm<FormData>();
  const onFormSubmit = (data: FieldValues) => {
    console.log(data);
    resetField("name");
    resetField("age");
    setFocus("name");
  };
  //   console.log(formState.errors);
  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The name field must be at least 3 characters
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { required: true, valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age?.type === "required" && (
          <p className="text-danger">The age field is required</p>
        )}
        {errors.age?.type === "valueAsNumber" && (
          <p className="text-danger">The age field must be a number</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
