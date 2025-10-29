const EventComponent_04 = ()=>{

    const handleChange = (e)=>{
        // console.log("onChange...",e)
        const {name, value, type, checked} = e.target
        console.log(name,value,type,checked)
    }
    
    return (
        <div style={{border:"1px solid", margin:"5px 0", padding:"5px 0"}}>
            text : <input type="text" onChange={handleChange}/><br/>
            <input type="checkbox" onChange={handleChange}/>체크박스<br/>
           선택1 <input type="radio" name="radio" value="r1" onChange={handleChange}/><br/>
           선택2 <input type="radio" name="radio" value="r2" onChange={handleChange}/><br/>
        </div>
    )
}

export default EventComponent_04