
const EventComponent_05 = () => {

    const handleScroll = (e) => {
        console.log(e.target.scrollTop)
    }

    return (
        <div onScroll={handleScroll} style={{ height: "500px", border: "1px solid", backgroundColor: "greenyellow" , overflow:"scroll"}}>
            <div
                style={{height: "1500px"}}
                onScroll={handleScroll}
            >
            </div>
        </div>
    )
}

export default EventComponent_05

