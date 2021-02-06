import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsetter, setNewsetter] = useState(false)



  return (
    <form>
      <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      <label htmlFor="newsletter">Subscribe to Our Newsletter</label>
      <input type="checkbox" checked={newsetter} onChange={(e) => setNewsetter(e.target.checked)}/>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
