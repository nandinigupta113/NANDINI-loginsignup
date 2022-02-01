import csilogo from "../assets/csilogo.png"
import "../assets/Home.css"
import {Link, useNavigate} from "react-router-dom";
function Home(){
    return(
      <div className="home">
      <div className="navbar">
        <div className="logo"><img src={csilogo} alt="" /></div>
        <div className="side">
          <div><Link style={{color: "white",textDecoration: "none"}} to={"/home"}>Home</Link></div>
          <div><Link style={{color: "white",textDecoration: "none"}} to={"/dashboard"}>Dashboard</Link></div>
          <div><Link style={{color: "white",textDecoration: "none"}} to={"/"}>Logout</Link></div>
        </div>
      </div>
      <div className="box3">
        <div className="mainhead">
          <h1>Welcome To</h1>
        </div>
        <div className="mainhead">
          <h1>Home Page</h1>
        </div>
        <div id="ani">
          <h2 className="logo"><img src={csilogo} alt="" /> Team CSI</h2>
        </div>
      </div>
      </div>
    )
}
export default Home;