import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Operations from "./Operations";

const EmployeeDetail = () => {
  const param = useParams();
  const [emp, setEmployee] = useState({});
  useEffect(() => {
    fetch("https://630c662f53a833c53429c1c8.mockapi.io/Employee/" + param.id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setEmployee(res);
      });
  }, [param.id]);
  return (
    <>
      <div style={{ width: "30vw", float: "left", margin: "1vw" }}>
        <div className="card border-transparent bg-transparent">
          <div className="m-2 border hower-shadow">
            <img src={emp.image} className="card-img-top p-2" alt="..." />
            <div className="card-body" style={{ height: "15vh" }}>
              <h5 className="card-title">
                <span style={{ color: "red" }}>Name</span> : {emp.employeeName}
              </h5>
              <p className="card-text">{emp.shortDetail}</p>
            </div>
            <ul className="list-group list-group-flush p-0">
              <hr className="m-0 p-0" />
              <li
                className="list-group-item"
                style={{ backgroundColor: "transparent", color: "white" }}
              >
                <span style={{ color: "red" }}>Email</span> : {emp.email}
              </li>
              <li
                className="list-group-item"
                style={{ backgroundColor: "transparent", color: "white" }}
              >
                <span style={{ color: "red" }}>Phone Number</span> :{" "}
                {emp.phoneNumber}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{ width: "60vw", height: "80vh", float: "left", margin: "2vw" }}
        className="border"
      >
        <Operations />
        <div className="text-center">
          <h3 style={{ color: "red" }}>Profile</h3>
        </div>
        <div className="details" style={{ fontSize: "2vh" }}>
          {emp.details}
        </div>
      </div>
    </>
  );
};
export default EmployeeDetail;
