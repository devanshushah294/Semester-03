import { useState } from "react";
const HooksLearning2 = () => {
  const giveMessage = () => {
    alert("You are Typing");
  };
  const [name, setName] = useState();
  const updateName = (e) => {
    setName(e.target.value);
  };
  return (
    <>
      <span>Name: </span>
      <input type="text" onClick={giveMessage} onChange={updateName} />
      <div className="border bg-danger display-1 fw-bolder min-vh-80">
        Your name is {name}
      </div>
      {/* <div>name is of length {name.length}</div> */}
      <div>
        Father's name: {"\u00A0\u00A0\u00A0"}
        <input type="text" name="fatherName" />
      </div>
      <div>
        Mother's name: {"\u00A0\u00A0"}
        <input type="text" name="motherName" />
      </div>
    </>
  );
};

export default HooksLearning2;
