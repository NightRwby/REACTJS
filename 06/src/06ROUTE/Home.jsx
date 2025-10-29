import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
            <nav>
                <ul>
                    <li> <Link to="/">Home</Link>                          </li>
                    <li> <Link to="/about?name=timo&age=100">ABOUT1</Link> </li>
                    <li> <Link to="/about?name=yumi&age=50">ABOUT2</Link>  </li>
                    <li> <Link to="/contact">CONTACT</Link>                </li>
                </ul>
            </nav>
            <h2>HOME PAGE</h2>

        </>
    )
}

export default Home