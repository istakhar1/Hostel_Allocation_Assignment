import "./navbar.css";
import firebase from "firebase";
var provider = new firebase.auth.GoogleAuthProvider();

const navBar = (props) => {
  return (
    <div className="nav">
      <h2 className="logo">Newton School</h2>
      <div className="user-name" onClick={() => props.logOut(provider)}>
        {props.islogin && (
          <div className="tooltip">
            <span className="tooltiptext">Click to Logout</span>
            <img src={props.img} alt="Not found" />
          </div>
        )}
      </div>
    </div>
  );
};
export default navBar;
