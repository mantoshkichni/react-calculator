import { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState("");
  function evalresult(e) {
    setResult(result.concat(e.target.innerText));
  }
  function calresult() {
    setResult(eval(result).toString());
  }
  function clear() {
    setResult("");
  }
  return (
    <div>
      <h1 className="display-2 text-allign-center ">Calculator</h1>
      <div
        className="container mt-5 border border-dark "
        style={{
          width: "350px",
          height: "510px",
          backgroundColor: "lightGrey"
        }}
      >
        <div className="row">
          <div className="col-12 mt-2 border rounded-circle ">
            <div
              className="form-control display-4 "
              style={{
                height: "75px",
                fontSize: "40px",
                backgroundColor: "bisque"
              }}
            >
              {result}
            </div>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              7
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              8
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              9
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              *
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              6
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              5
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              4
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              /
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              3
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              2
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              1
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              -
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              .
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              0
            </button>
          </div>
          <div className="col-3">
            <button
              className=" btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={clear}
            >
              C
            </button>
          </div>
          <div className="col-3">
            <button
              className="btn-primary font-weight-bold form-control mt-2 border rounded-circle"
              style={{ height: "75px", fontSize: "40px" }}
              onClick={evalresult}
            >
              +
            </button>
          </div>
          <div className="col">
            <button
              className="btn-primary font-weight-bold form-control mt-2 mb-2"
              style={{ height: "70px", fontSize: "50px" }}
              onClick={calresult}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
