import React ,{useState} from 'react'
import './Room.css'


const Room=()=> {
    const [state, setstate] = useState(false)
    return (
        <>
        
        <div className="room">
        <h3>Choose a floor</h3>
        <select className="slectv"  >
            <option value="grapefruit">1st Floor</option>
            <option value="grapefruit">2st Floor</option>
            <option value="grapefruit">3st Floor</option>
            <option value="grapefruit">4st Floor</option>
            <option value="grapefruit">5st Floor</option>
            <option value="grapefruit">6st Floor</option>
           
          </select>
                <div className="roombox"  onClick={()=>{
                    setstate(true)
                }}>
                    <div className="row1">
                        <div className="val1" ><h3>1</h3></div>
                        <div className="val1" ><h3>2</h3></div>
                        <div className="val1" ><h3>3</h3></div>
                        <div className="val1" ><h3>4</h3></div>
                        
                    </div>
                    <div className="row2">
                    <div className="val1" ><h3>4</h3></div>
                    <div className="val1" ><h3>4</h3></div>

                    </div>
                    <div className="row3">
                    <div className="val1" ><h3>4</h3></div>
                    <div className="val1" ><h3>4</h3></div>
                    <div className="val1" ><h3>4</h3></div>
                    <div className="val1" ><h3>4</h3></div>

                    </div>
                </div>

                <button className="buttonr" style={state?{display:"block"}:{display:"none"}}>Book Room</button>


        </div>
        </>
    )
}

export default Room
