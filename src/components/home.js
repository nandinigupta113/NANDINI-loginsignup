import csilogo from "../assets/csilogo.png"
import "../assets/Home.css"
import {Link, useNavigate} from "react-router-dom";
function Home(){
    return(
      <div className="home">
      <div className="navbar">
        <div className="logo"><img src={csilogo} alt="" /></div>
        <div className="side">
          <div><h1>Home</h1></div>
          <div><h1>Dashboard</h1></div>
          <div><Link to={"/"}>Logout</Link></div>
      </div>
      </div>
      </div>
    )
}
export default Home;