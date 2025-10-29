
const EventComponent_05 = ()=>{

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Submit...")
    }

    return (
        <div style={{border:"1px solid", margin:"5px 0", padding:"5px 0"}}>
            <form onSubmit={handleSubmit} action="/test.jsp">
                <input type="text"/><br/>
                <button type="submit">전송</button>
            </form>
        </div>
    )
}

export default EventComponent_05

