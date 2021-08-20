import React from 'react'
import {Link} from "react-router-dom/cjs/react-router-dom.min";
import Room from './Room'
import './hostel.css'
const Hostel=()=> {
    return (
        <>
        <div className="page">
            <h1>hostel roomes</h1>
            <Link to="/Room" style={{ textDecoration: 'none' }} >
        <div className="box_container">
            <div clasName="row1">
            <div className="box1"><h3>B1</h3></div>
            <div className="box1"><h3>B2</h3></div>
            
            </div>
            <div clasName="row1">
            <div className="box1"><h3>B2</h3></div>
            <div className="box1"><h3>B3</h3></div>
            </div>
            <div clasName="row1">
            <div className="box1"><h3>B4</h3></div>
            <div className="box1"><h3>B5</h3></div>
        
            </div>
            
           

        </div>
        </Link>

        </div>
        </>
    )
}

export default Hostel
