import React, { useState } from "react";

const FormUseState = () => {
  const handlerFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(person);
  };
  const [person, setPerson] = useState({ name: "", age: 0 });

  return (
    <form onSubmit={handlerFormSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, name: event.target.value });
          }}
          id="name"
          value={person.name}
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) => {
            setPerson({ ...person, age: parseInt(event.target.value) });
          }}
          id="age"
          value={person.age}
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormUseState;
