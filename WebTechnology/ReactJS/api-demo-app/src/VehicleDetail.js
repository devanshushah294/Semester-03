import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const VehicleDetail = () => {
  const param = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      "https://630c662f53a833c53429c1c8.mockapi.io/Vehicles" + "/" + param.id
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <div>
        <div
          className="vehicle-sidebar"
          style={{ width: "30vw", float: "left" }}
        >
          <div
            className="card"
            // style={{ width: "18rem" }}
          >
            <img
              src={data.vehicleImage}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{data.VehicleName}</h5>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">{data.id}</li>
              <li className="list-group-item">
                Vehicle Model : {data.vehicleModel}
              </li>
              <li className="list-group-item">
                Manufacturer : {data.Manufacturer}
              </li>
            </ul>
          </div>
        </div>
        <div class></div>
      </div>
    </>
  );
};
export default VehicleDetail;
