import React from "react";
import "./hostel.css";
const Hostel = () => {
  return (
    <>
      <div className="page">
        <h1>hostel roomes</h1>
        <div className="box_container">
          <div clasName="row1">
            <div className="box1">
              <h3>G1</h3>
            </div>
            <div className="box1">
              <h3>G2</h3>
            </div>
          </div>
          <div clasName="row1">
            <div className="box1">
              <h3>G3</h3>
            </div>
            <div className="box1">
              <h3>G4</h3>
            </div>
          </div>
          <div clasName="row1">
            <div className="box1">
              <h3>G5</h3>
            </div>
            <div className="box1">
              <h3>G6</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hostel;
