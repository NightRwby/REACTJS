import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const About = () => {
    const location = useLocation()
    // console.log(location.search)
    const query = new URLSearchParams(location.search)
    console.log(query.get("name"), query.get("age"))
    return (
        <>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link>                      </li>
                    <li> <Link to="/about?name=timo&age=100">ABOUT1</Link> </li>
                    <li> <Link to="/about?name=yumi&age=50">ABOUT2</Link>  </li>
                    <li> <Link to="/contact">CONTACT</Link>                </li>
                </ul>
            </nav>
            <h2>ABOUT PAGE</h2>
            <span>
                Param : {query.get("name")} / {query.get("age")}
            </span>
        </>
    )
}

export default About