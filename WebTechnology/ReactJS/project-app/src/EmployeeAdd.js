import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EmployeeAdd.css";
const EmployeeAdd = () => {
  const param = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    if (param.id > 0) {
      fetch("https://630c662f53a833c53429c1c8.mockapi.io/Employee/" + param.id)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setData(res);
        });
    }
  }, [param.id]);
  return (
    <div className="pink-background height-100">
      <div className="background-white edit-add-window text-center">
        <h1 className="m-0" style={{ height: "10%" }}>
          {param.id > 0 && "Edit "}
          {!(param.id > 0) && "Add "}
          Employee
        </h1>
        <div className="m-0" style={{ height: "90%" }}>
          <div>
            <div className="input-group mb-3">
              {" "}
              <span
                className="input-group-text dark-pink-color border-pink"
                id="inputGroup-sizing-default"
              >
                Name
              </span>
              <input
                type="text"
                className="form-control border-pink"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={data.employeeName}
                onChange={(e) => {
                  setData({ ...data, employeeName: e.target.value });
                }}
              />
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text dark-pink-color border-pink"
                id="inputGroup-sizing-default"
              >
                Last Name
              </span>
              <input
                type="text"
                className="form-control border-pink"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={data.employeeLastName}
                onChange={(e) => {
                  setData({ ...data, employeeLastName: e.target.value });
                }}
              />
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text dark-pink-color border-pink"
                id="inputGroup-sizing-default"
              >
                Image Address
              </span>
              <input
                type="text"
                className="form-control border-pink"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={data.image}
                onChange={(e) => {
                  setData({ ...data, image: e.target.value });
                }}
              />
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text dark-pink-color border-pink"
                id="inputGroup-sizing-default"
              >
                Phone Number
              </span>
              <input
                type="text"
                className="form-control border-pink"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={data.phoneNumber}
                onChange={(e) => {
                  setData({ ...data, phoneNumber: e.target.value });
                }}
              />
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text dark-pink-color border-pink"
                id="inputGroup-sizing-default"
              >
                Email Id
              </span>
              <input
                type="text"
                className="form-control border-pink"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={data.email}
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text dark-pink-color border-pink"
                id="inputGroup-sizing-default"
              >
                Department
              </span>
              <input
                type="text"
                className="form-control border-pink"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={data.department}
                onChange={(e) => {
                  setData({ ...data, department: e.target.value });
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text dark-pink-color border-pink"
                id="inputGroup-sizing-default"
              >
                Post
              </span>
              <input
                type="text"
                className="form-control border-pink"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={data.post}
                onChange={(e) => {
                  setData({ ...data, post: e.target.value });
                }}
              />
            </div>
            <div className="input-group mb-3">
              <span
                className="input-group-text dark-pink-color border-pink"
                id="inputGroup-sizing-default"
              >
                Short Details
              </span>
              <input
                type="text"
                className="form-control border-pink"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                value={data.shortDetail}
                onChange={(e) => {
                  setData({ ...data, shortDetail: e.target.value });
                }}
              />
            </div>

            <div className="input-group mb-3">
              <span
                className="input-group-text dark-pink-color border-pink"
                id="inputGroup-sizing-default"
              >
                Details
              </span>
              <textarea
                value={data.details}
                cols={100}
                rows={3}
                onChange={(e) => {
                  setData({ ...data, details: e.target.value });
                }}
              />
            </div>

            <button
              className="btn dark-pink-color hover-white"
              style={{ marginBottom: "10px" }}
              onClick={() => {
                if (param.id > 0) {
                  fetch(
                    "https://630c662f53a833c53429c1c8.mockapi.io/Employee/" +
                      param.id,
                    {
                      method: "PUT",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  ).then(navigate("/employee/" + param.id));
                } else {
                  fetch(
                    "https://630c662f53a833c53429c1c8.mockapi.io/Employee/",
                    {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  ).then(navigate("/employee/" + param.id));
                }
              }}
            >
              {param.id > 0 && "Edit "}
              {!(param.id > 0) && "Add "}
              Faculty
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EmployeeAdd;
