import { React, useEffect, useState } from "react";
import { Component } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";

const root = createRoot(document.getElementById("root"));

function GetAllFaculty() {
  const navigate = useNavigate();
  const apiUrl = "https://630c330f53a833c534258a78.mockapi.io/faculties";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const formatedData = data.map((fac) => {
    return (
      <h1
        onClick={() => {
          navigate("/faculties/" + fac.id);
        }}
      >
        {fac.FacultyName}
      </h1>
    );
  });

  return <>{formatedData}</>;
}

function DetailFaculty() {
  const navigate = useNavigate();
  const param = useParams();

  const apiUrl = "https://630c330f53a833c534258a78.mockapi.io/faculties";

  const [data, setData] = useState({});

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <>
      <h1>FacultyName : {data.FacultyName} </h1>
      <h1>FacultySalary : {data.FacultySalary} </h1>
      <img src={data.FacultyImage} />
      <button
        onClick={() => {
          fetch(apiUrl + "/" + param.id, { method: "DELETE" }).then((res) => {
            navigate("/faculties");
          });
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          navigate("../faculties/edit/" + param.id);
        }}
      >
        Edit
      </button>
    </>
  );
}

function AddFaculty() {
  const navigate = useNavigate();
  const apiUrl = "https://630c330f53a833c534258a78.mockapi.io/faculties";

  const [data, setData] = useState({ FacultyName: "" });
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, FacultyName: e.target.value });
        }}
      />

      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, FacultyImage: e.target.value });
        }}
      />

      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, FacultyDepartment: e.target.value });
        }}
      />

      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, FacultySalary: e.target.value });
        }}
      />

      <input
        type="button"
        value="Add Faculty"
        onClick={() => {
          fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            navigate("/faculties");
          });
        }}
      />
    </>
  );
}

function EditFaculty() {
  const param = useParams();
  const navigate = useNavigate();
  const apiUrl = "https://630c330f53a833c534258a78.mockapi.io/faculties";

  useEffect(() => {
    fetch(apiUrl + "/" + param.id, { method: "GET" })
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  const [data, setData] = useState({});
  return (
    <>
      <input
        type="text"
        value={data.FacultyName}
        onChange={(e) => {
          setData({ ...data, FacultyName: e.target.value });
        }}
      />

      <input
        type="text"
        value={data.FacultyImage}
        onChange={(e) => {
          setData({ ...data, FacultyImage: e.target.value });
        }}
      />

      <input
        type="text"
        value={data.FacultyDepartment}
        onChange={(e) => {
          setData({ ...data, FacultyDepartment: e.target.value });
        }}
      />

      <input
        type="text"
        value={data.FacultySalary}
        onChange={(e) => {
          setData({ ...data, FacultySalary: e.target.value });
        }}
      />

      <input
        type="button"
        value="Edit Faculty"
        onClick={() => {
          fetch(apiUrl + "/" + param.id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          }).then((res) => {
            //console.log(res);
            navigate("/faculties");
          });
        }}
      />
    </>
  );
}

function Layout() {
  return (
    <>
      <Link to="/"> Home </Link>{" "}
      <Link to="/faculties"> Display All Faculty </Link>{" "}
      <Link to="/faculties/add"> Add Faculty </Link> <br />
      <Outlet />
      <h1>Footer</h1>
    </>
  );
}

root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/faculties" element={<GetAllFaculty />} />
          <Route path="/faculties/:id" element={<DetailFaculty />} />
          <Route path="/faculties/add" element={<AddFaculty />} />
          <Route path="/faculties/edit/:id" element={<EditFaculty />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);
