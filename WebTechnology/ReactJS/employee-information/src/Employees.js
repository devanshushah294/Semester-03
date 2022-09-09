import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Employees = () => {
  const apiUrl = "https://630c662f53a833c53429c1c8.mockapi.io/Employee";
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setEmployees(res);
      });
  }, []);
  const formatedEmployees = employees.map((emp) => {
    return (
      <Link
        to={"../employee/" + emp.id}
        className="col-xl-3 col-lg-4 col-md-4 col-sm-6"
        style={{
          textDecoration: "none",
          color: "#FFFFFE",
          backgroundColor: "#FFC0CB",
        }}
      >
        <div
          className="card go-up"
          style={{
            backgroundColor: "#601e25",
            border: "1px solid black",
            margin: "1vh",
          }}
        >
          <div
            className="m-2 hower-shadow"
            style={{ border: "1px solid transparent" }}
          >
            <img
              src={emp.image}
              className="card-img-top p-2 img-fluid"
              style={{ height: "40vh" }}
              alt="..."
            />
            <div className="card-body" style={{ height: "15vh" }}>
              <h5 className="card-title">
                <span style={{ color: "#FFC0CB" }}>Name</span> :{" "}
                {emp.employeeName}
              </h5>
              <p className="card-text">{emp.shortDetail}</p>
            </div>
            <ul className=" p-0">
              <hr className="m-0 p-0" />
              <li className="list-group-item">
                <span style={{ color: "#FFC0CB", paddingLeft: "5%" }}>
                  Email
                </span>{" "}
                : {emp.email}
              </li>
              <hr className="m-0 p-0" />
              <li className="list-group-item">
                <span style={{ color: "#FFC0CB", paddingLeft: "5%" }}>
                  Phone Number
                </span>{" "}
                : {emp.phoneNumber}
              </li>
            </ul>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      <div
        style={{
          backgroundColor: "#FFC0CB",
          width: "100vw",
          height: "10vh",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFFFE",
            width: "30vw",
            height: "7vh",
            margin: "auto",
            position: "relative",
            top: "2vh",
            color: "#FFC0CB",
            textAlign: "center",
          }}
        >
          <h1>Employees</h1>
        </div>
      </div>
      <div className="row" style={{}}>
        {formatedEmployees}
      </div>
    </>
  );
};
export default Employees;
