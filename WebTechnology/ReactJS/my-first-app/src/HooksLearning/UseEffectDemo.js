import { useEffect } from "react";
const UseEffectDemo = () => {
  const newUpdate = useEffect(() => {
    alert("Hello");
  });
  return (
    <>
      <input type="text" name="userName" onChange="newUpdate" />
    </>
  );
};
export default UseEffectDemo;
