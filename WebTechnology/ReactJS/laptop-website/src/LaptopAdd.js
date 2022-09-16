import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LaptopAdd = () => {
  const params = useParams();
  const navigate = useNavigate();
  const apiurl = "https://630c662f53a833c53429c1c8.mockapi.io/Laptop";
  const [lap, setLap] = useState({});
  useEffect(() => {
    if (params.id > 0) {
      fetch(apiurl + "/" + params.id)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          setLap(res);
        });
    }
  }, [params.id]);
  return (
    <div>
      <div className="m-0 pt-3" style={{ height: "90%" }}>
        <div className="input-group mb-3">
          <span
            className="col-2 text-light bg-primary input-group-text  "
            id="inputGroup-sizing-default"
          >
            Laptop Name
          </span>
          <input
            type="text"
            className="form-control "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={lap.LaptopName}
            onChange={(e) => {
              setLap({ ...lap, LaptopName: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="col-2 text-light bg-primary input-group-text  "
            id="inputGroup-sizing-default"
          >
            Laptop Image
          </span>
          <input
            type="text"
            className="form-control "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={lap.LaptopImage}
            onChange={(e) => {
              setLap({ ...lap, LaptopImage: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="col-2 text-light bg-primary input-group-text  "
            id="inputGroup-sizing-default"
          >
            Laptop RAM
          </span>
          <input
            type="text"
            className="form-control "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={lap.LaptopRAM}
            onChange={(e) => {
              setLap({ ...lap, LaptopRAM: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="col-2 text-light bg-primary input-group-text  "
            id="inputGroup-sizing-default"
          >
            Laptop HardDisk
          </span>
          <input
            type="text"
            className="form-control "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={lap.LaptopHD}
            onChange={(e) => {
              setLap({ ...lap, LaptopHD: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="col-2 text-light bg-primary input-group-text  "
            id="inputGroup-sizing-default"
          >
            Laptop Graphics Card
          </span>
          <input
            type="text"
            className="form-control "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={lap.LaptopGraphicsCard}
            onChange={(e) => {
              setLap({ ...lap, LaptopGraphicsCard: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="col-2 text-light bg-primary input-group-text  "
            id="inputGroup-sizing-default"
          >
            Laptop Processor
          </span>
          <input
            type="text"
            className="form-control "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={lap.LaptopProcessor}
            onChange={(e) => {
              setLap({ ...lap, LaptopProcessor: e.target.value });
            }}
          />
        </div>
        <div className="input-group mb-3">
          <span
            className="col-2 text-light bg-primary input-group-text  "
            id="inputGroup-sizing-default"
          >
            Laptop Price
          </span>
          <input
            type="text"
            className="form-control "
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            value={lap.Price}
            onChange={(e) => {
              setLap({ ...lap, Price: e.target.value });
            }}
          />
        </div>
      </div>
      <button
        className="btn btn-primary"
        style={{ marginBottom: "10px" }}
        onClick={() => {
          if (params.id > 0) {
            fetch(apiurl + "/" + params.id, {
              method: "PUT",
              body: JSON.stringify(lap),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(navigate("/laptopdetails/" + params.id));
          } else {
            fetch(apiurl, {
              method: "POST",
              body: JSON.stringify(lap),
              headers: {
                "Content-Type": "application/json",
              },
            }).then(navigate("/laptops"));
          }
        }}
      >
        {params.id > 0 && "Edit "}
        {!(params.id > 0) && "Add "}
        Laptop
      </button>
    </div>
  );
};

export default LaptopAdd;
