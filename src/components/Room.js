import React, { useState } from "react";
import "./Room.css";

const Room = () => {
  const [state, setstate] = useState(false);
  const [grey, setgrey] = useState();
  const fun2 = () => {
    setgrey("grey1");
  };
  const fun1 = () => {
    alert(
      "Your room has booked sucessfully ! . Your Room Number is 3 in B4 building"
    );
  };
  return (
    <>
      <div className="room">
        <h3>Choose a floor</h3>
        <select className="slectv">
          <option value="grapefruit">1st Floor</option>
          <option value="grapefruit">2st Floor</option>
          <option value="grapefruit">3st Floor</option>
          <option value="grapefruit">4st Floor</option>
          <option value="grapefruit">5st Floor</option>
          <option value="grapefruit">6st Floor</option>
        </select>
        <div
          className="roombox"
          onClick={() => {
            setstate(true);
          }}
        >
          <div className="row1">
            <div className="val1">
              <h3>1</h3>
            </div>
            <div className="val1">
              <h3>2</h3>
            </div>
            <div className={`val1 ${grey}`} onClick={fun2}>
              <h3>3</h3>
            </div>
            <div className="val1">
              <h3>4</h3>
            </div>
          </div>
          <div className="row2">
            <div className="val1">
              <h3>5</h3>
            </div>
            <div className="val1">
              <h3>6</h3>
            </div>
          </div>
          <div className="row3">
            <div className="val1">
              <h3>7</h3>
            </div>
            <div className="val1">
              <h3>8</h3>
            </div>
            <div className="val1">
              <h3>9</h3>
            </div>
            <div className="val1">
              <h3>10</h3>
            </div>
          </div>
        </div>

        <button
          className="buttonr"
          onClick={fun1}
          style={state ? { display: "block" } : { display: "none" }}
        >
          Book Room
        </button>
      </div>
    </>
  );
};

export default Room;
