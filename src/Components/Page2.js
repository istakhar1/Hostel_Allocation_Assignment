import React from 'react'
import {Link} from "react-router-dom/cjs/react-router-dom.min";
import Hostel from "./Hostel"
import './page2.css'
const Page2=()=> {
    return (
        <div className="page">
            <h1>Choose Your Hostel</h1>
            <div className="container" >
            <Link to="/Hostelg"style={{ textDecoration: 'none' }}  >
            <div className="Ghostel" >
                <div className="gimage">
                  <img src="https://www.kindpng.com/picc/m/180-1801006_girls-clipart-black-and-white-student-clipart-black.png" alt="girl"></img>
                </div>
                <h3>Girls Hostel</h3>
                
            </div>
            </Link>
            <Link to="/Hostel" style={{ textDecoration: 'none' }}  >
            <div className="Bhostel">
            <div className="gimage">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGSyl0khTnQ4Yg6LsH16R4PQwhpz2-n5MNv02Q0U1uo0rJGNqqfMjnP-8S2bu95shXXI&usqp=CAU" alt="girl"></img>
                  </div>
                  <h3>Boys Hostel</h3>

            </div>
            </Link>
            </div>
           
        </div>
    )
}

export default Page2
