import React, { useState } from "react";
import "./hostel.css";
import Room from "./Room";
const Hostel = () => {
  const [r, setR] = useState(false);
  const fun1 = () => {
    // alert("room SuccessFul , Your Room is B3");
    setR(true);
  };
  return (
    <>
      {!r && (
        <div>
          <div className="page">
            <h1>hostel roomes</h1>
            <div className="box_container" onClick={fun1}>
              <div clasName="row1">
                <div className="box1">
                  <h3>B1</h3>
                </div>
                <div className="box1">
                  <h3>B2</h3>
                </div>
              </div>
              <div clasName="row1">
                <div className="box1">
                  <h3>B3</h3>
                </div>
                <div className="box1">
                  <h3>B4</h3>
                </div>
              </div>
              <div clasName="row1">
                <div className="box1">
                  <h3>B5</h3>
                </div>
                <div className="box1">
                  <h3>B6</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {r && <Room></Room>}
    </>
  );
};

export default Hostel;
