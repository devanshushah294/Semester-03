import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Laptops = () => {
  const apiurl = "https://630c662f53a833c53429c1c8.mockapi.io/Laptop";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(apiurl, { method: "GET" })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setData(res);
      });
  }, []);
  const formatedLaptop = data.map((lap) => {
    return (
      <>
        <Link
          to={"/laptopdetails" + "/" + lap.id}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <div className="background-aliceblue row border">
            <div className="col-3">
              <img
                className="card-img-top img-fluid"
                src={lap.LaptopImage}
                style={{ height: "90%", width: "90%", margin: "5%" }}
                alt="..."
              />
            </div>
            <div className="col-6">
              <div className="p-1 hover-color-blue" style={{ height: "20%" }}>
                <h4>{lap.LaptopName}</h4>
              </div>
              <div className="laptop-details">
                <ul>
                  <li>{lap.LaptopProcessor}</li>
                  <li>{lap.LaptopRAM} RAM</li>
                  <li>{lap.LaptopHD}</li>
                  <li>{lap.LaptopGraphicsCard}</li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <h4>&#8377; {lap.Price - lap.Price * 0.18}</h4>
              <div>
                <span style={{ textDecorationLine: "line-through" }}>
                  {lap.Price}
                </span>
                <span className="color-blue">18% off</span>
              </div>
              <div className="color-green">Free delivery</div>
              <div>
                Up to{" "}
                <span className="fw-bold">&#8377;{lap.Price * 0.33} </span>
                on exchance
              </div>
              <div className="fw-bold color-green">Bank offer</div>
            </div>
          </div>
        </Link>
      </>
    );
  });
  return (
    <>
      <div className="sale-logo text-center fw-bolder color-blue">
        18% Off Sale
      </div>
      <div className="row" style={{ padding: "0vh", margin: "0vh" }}>
        {formatedLaptop}
      </div>
    </>
  );
};

export default Laptops;
