import React from "react";

const button = {
  background:"rgb(160, 95, 125)",
  color:"white"
};

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn  float-right"
          style = {button}
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Form;
