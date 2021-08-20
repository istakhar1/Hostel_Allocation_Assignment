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
            <div className="box1"><h3>G1</h3></div>
            <div className="box1"><h3>G2</h3></div>
            
            </div>
            <div clasName="row1">
            <div className="box1"><h3>G2</h3></div>
            <div className="box1"><h3>G3</h3></div>
            </div>
            <div clasName="row1">
            <div className="box1"><h3>G4</h3></div>
            <div className="box1"><h3>G5</h3></div>
        
            </div>
            
        </div>
        </Link>
        </div>
        </>
    )
}

export default Hostel
