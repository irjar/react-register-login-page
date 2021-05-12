import React from "react";

function Form(props) {
  // if the user is not registered display the confrim password input field
  // display Register / Login text on the submit button depending
  // on whether the user is registered or not
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      <button type="submit">{props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
