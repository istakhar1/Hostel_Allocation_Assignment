import "./CardPage.css";

const CardPage = (props) => {
  const roomNum = 3;
  const hstlNum = "B4";
  return (
    <div className="top-con">
      <div className="container">
        <h1 className="welcome-msg">Welcome {props.userName}</h1>
        <p>You Have already Booked your Room</p>
        <h3>Your Room Details are as follows : </h3>
        <div>
          <p>
            Hostel No. <span className="red">{hstlNum}</span>{" "}
          </p>
          <p>
            Room No. <span className="red">{roomNum}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardPage;
