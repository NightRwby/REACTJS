const EventComponent_03 = ()=>{
    const handleKeyUp = (e)=>{console.log("KeyUp",e.key)}
    const handleKeyDown = (e)=>{console.log("KeyDown",e.key)}
    const handleKeyPress = (e)=>{console.log("KeyPress",e.key)}

    return (
        <div>
            KEY UP : <input type="text" onKeyUp={handleKeyUp}></input><br/>
            KEY DOWN : <input type="text" onKeyDown={handleKeyDown}></input><br/>
            KEY PRESS : <input type="text" onKeyPress={handleKeyPress}></input><br/>
        </div>
    )
}

export default EventComponent_03