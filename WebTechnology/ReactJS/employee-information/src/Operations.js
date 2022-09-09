import { useNavigate, useParams } from "react-router-dom";
const Operations = () => {
  const navigate = useNavigate();
  const param = useParams();
  return (
    <div className="border" style={{ height: "10vh" }}>
      <button
        type="button"
        className="btn btn-danger btn-lg m-3"
        onClick={() => {
          fetch(
            "https://630c662f53a833c53429c1c8.mockapi.io/Employee/" + param.id,
            { method: "DELETE" }
          ).then(() => {
            navigate("/employees");
          });
        }}
      >
        Delete
      </button>
      <button
        type="button"
        className="btn btn-success btn-lg m-3"
        onClick={() => {
          navigate("../../employees/edit/" + param.id);
        }}
      >
        Edit
      </button>
    </div>
  );
};
export default Operations;
