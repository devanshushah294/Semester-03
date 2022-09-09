import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Vehicles = () => {
  const nevigate = useNavigate();
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("https://630c662f53a833c53429c1c8.mockapi.io/Vehicles")
      .then((res) => res.json())
      .then((res) => setVehicles(res));
  }, []);
  const formatedVehicle = vehicles.map((veh) => {
    return (
      <div
        onClick={() => {
          nevigate("/VehicleDetail/" + veh.id);
        }}
        className="card col-xl-3 col-lg-3 col-md-4 col-sm-6 p-3 "
        // style={{ width: "18rem" }}
      >
        <img
          src={veh.vehicleImage}
          className="card-img-top img-fluid"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{veh.VehicleName}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{veh.id}</li>
          <li className="list-group-item">
            Vehicle Model : {veh.vehicleModel}
          </li>
          <li className="list-group-item">Manufacturer : {veh.Manufacturer}</li>
        </ul>
      </div>
    );
  });
  return <div className="row">{formatedVehicle}</div>;
};
