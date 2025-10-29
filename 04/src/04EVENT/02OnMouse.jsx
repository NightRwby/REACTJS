import { useState } from "react"

const EventComponent_02 = ()=>{

    const [str,setStr] = useState("INIT")

    const handleMouseEnter = (e)=>{
        console.log("Entered...",e)
        setStr("MOUSE ENTER")
    }
    const handleMouseLeave = (e)=>{
        console.log("Leaved...",e)
        setStr("MOUSE LEAVE")
    }
    return (
        <div 
        className="box1"
        style={{width:"150px",height:"150px",border:"1px solid"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        </div>
    )
}

export default EventComponent_02