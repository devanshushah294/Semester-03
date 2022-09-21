import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const apiurl = "https://630c662f53a833c53429c1c8.mockapi.io/Laptop";
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(apiurl)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setdata(res);
      });
  }, []);
  const formatedData = data.map((lap) => {
    if (lap.id == 2 || lap.id == 5 || lap.id == 7 || lap.id == 9) {
      return (
        <Link
          to={"/laptopdetails/" + lap.id}
          className="col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2 text-decoration-none mt-4"
          style={{ color: "inherit" }}
        >
          <div className="card" style={{ height: "60vh" }}>
            <img
              src={lap.LaptopImage}
              className="card-img-top img-fluid"
              style={{ height: "90%", width: "90%", margin: "5%" }}
              alt="..."
            />
            <div className="card-body">
              <h6 className="card-title text-center">{lap.LaptopName}</h6>
              <p className="card-text"></p>
            </div>
            <div>
              <h4>&#8377; {lap.Price - lap.Price * 0.18}</h4>
              <div>
                <span style={{ textDecorationLine: "line-through" }}>
                  {lap.Price}
                </span>
                <span className="color-blue">18% off</span>
              </div>
            </div>
          </div>
        </Link>
      );
    } else {
      return null;
    }
  });
  console.log({ formatedData });
  return (
    <div className="min-height-80">
      <div className="text-center">
        <h1>Some Popular Laptops</h1>
      </div>
      <div className="row">{formatedData}</div>
    </div>
  );
};

export default Home;
