import { useState } from "react";

const NewContactForm = ({ handleNewContact, handleInputChange, input}) => {

  return (
    <form onSubmit={handleNewContact}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="text"
          value={input.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="number"> Number: </label>
        <input
          id="number"
          type="text"
          value={input.number}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">ADD</button>
    </form>
  );
};
export default NewContactForm;
