import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { googleProvider } from "../config/authMethod";
import Page2 from "./Page2";

import "./startPage.css";

const StartPage = (props) => {
  return (
    <>
      <div>
        <div className="mainCp">
          <h3>Hostel Allocation</h3>
          <p>Please sign-in:</p>

          <button
            onClick={() => props.signIn(googleProvider)}
            className="btn--1"
          >
            <div className="gBtn">
              <div className="gicon">
                <FcGoogle />
              </div>
              <div>sign with Google</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default StartPage;
