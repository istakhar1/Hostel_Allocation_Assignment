import React, { useState, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page2 from "./components/Page2";
import "./App.css";
import Hostel from "./components/Hostel";
import Navbar from "./components/Navbar";
import socialMediaAuth from "./service/auth";
import CardPage from "./components/CardPage";
import firebase from "firebase";
import StartPage from "./components/StartPage";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const userData = [];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState();
  const [userImage, setUserImage] = useState();
  const [booking, setBooking] = useState(false);

  if (localStorage.getItem(`${userName}`) === "1") {
    setBooking(true);
  }

  const handleClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
    setIsLoggedIn(true);
    setUserName(res.displayName);
    userData.push(userName);
    setUserImage(res.photoURL);
  };

  const logoutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(
        function () {
          setIsLoggedIn(false);
          userData.pop();
        },
        function (error) {
          console.log("Signout Failed");
        }
      );
    setBooking(true);
  };
  return (
    <Fragment>
      <div>
        <Navbar img={userImage} logOut={logoutHandler} islogin={isLoggedIn} />
        {isLoggedIn && booking && <CardPage userName={userName} />}
        {!isLoggedIn && (
          <StartPage signIn={handleClick} book={booking}></StartPage>
        )}
        {isLoggedIn && !booking && <Page2></Page2>}
      </div>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={StartPage} /> */}
          <Route exact path="/Hostel" component={Hostel} />
          {/* <Route exact path="/Room" component={Room} /> */}
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
