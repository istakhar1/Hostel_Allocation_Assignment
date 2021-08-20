import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Hostel from "./Hostel";
// import Hostel from "./Hostel";
import "./page2.css";
import HostelG from "./HostelG";

const Page2 = () => {
  const [b, setB] = useState(false);
  const [g, setG] = useState(false);

  const fun2 = () => {
    setB(true);
    setG(false);
  };
  const fun1 = () => {
    setG(true);
    setB(false);
  };

  return (
    <div>
      {!b && !g && (
        <div className="page">
          <h1>Choose Your Hostel</h1>
          <div className="container1">
            {/* <Link to="/Hostel"> */}
            <div className="Ghostel" onClick={fun1}>
              <div className="gimage">
                <img
                  src="https://www.kindpng.com/picc/m/180-1801006_girls-clipart-black-and-white-student-clipart-black.png"
                  alt="girl"
                ></img>
              </div>
              <h3>Girls Hostel</h3>
            </div>
            {/* </Link> */}
            {/* <Link to="/Hostel"> */}
            <div className="Bhostel" onClick={fun2}>
              <div className="gimage">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGSyl0khTnQ4Yg6LsH16R4PQwhpz2-n5MNv02Q0U1uo0rJGNqqfMjnP-8S2bu95shXXI&usqp=CAU"
                  alt="girl"
                ></img>
              </div>
              <h3>Boys Hostel</h3>
            </div>
            {/* </Link> */}
          </div>
        </div>
      )}

      {b && <Hostel></Hostel>}
      {g && <HostelG></HostelG>}
    </div>
  );
};

export default Page2;
