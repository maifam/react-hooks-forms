import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");


  return (
    <form>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
