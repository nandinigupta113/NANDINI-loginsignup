import userid from "../assets/userid.png";
import psswd from "../assets/psswd.png";
import Recaptcha from "react-recaptcha";
import "../assets/Login.css";
import react,{useState ,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [submitform, setSubmitForm] = useState(false);

    const validation =(isverified) => {
        let errors = {};
        if(!isverified.userid){
            errors.userid = "UserID is required!"
        }
        if(!isverified.password){
            errors.password = "Password is required!"
        }
        if(isverified.isverify === false){
            errors.isverify = "checking captcha is required!"
        }
        return errors;
    }


    const [isverified, setisVerified] = useState({
        isverify: false,
        password:"",
        userid:"",
    });


    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setisVerified({
            ...isverified,
            [event.target.name] : event.target.value,
        })
        setDataIsCorrect(true);
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            setSubmitForm(true);
        }
       }, [errors]);
    

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(isverified));
    }

    
    
    var Recaptcha = require('react-recaptcha');
    var callback = () => {
        console.log("captcha loaded")
    };
    var verifyCallback = (response) => {            
        setisVerified({
           ...isverified,
                isverify : true
            })
    };

    return(
        <div className="box">
        <h1 className="heading">Login</h1>
        <form action="">
            <div className="userid">
                <label className="label">UserID</label>
               <div className="imag">
                <img src={userid} alt="" />
                <input className="inputfield" autoComplete="off" name="userid" onChange={handleChange} value={isverified.userid} type="text"placeholder="Enter userId"/>
                </div> 

            </div>
            {errors.userid && <p className="error">{errors.userid}</p>}
            <div className="password">
                <label className="label">Password</label>
               <div className="imag">
                <img src={psswd} alt="" />
                <input className="inputfield" autoComplete="off" name="password" onChange={handleChange} value={isverified.password} type="text"placeholder="Enter password"/>
                </div> 
            </div>
            {errors.password && <p className="error">{errors.password}</p>}
            <div className="forgot">
                <Link to="/forgotpassw">Forgot Password?</Link>
            </div>
            <div className="captcha">
               <Recaptcha
                    sitekey="6LeqXj8eAAAAAKwljxyqxBYCJ5f84Ad_IZ3kT4jp"
                    render="explicit"
                    onloadCallback={callback}
                    verifyCallback={verifyCallback}
              />
            </div>
            {isverified.isverify === false && <p className="error">{errors.isverify}</p>}
            <button className="bttns"onClick={submitform ? navigate("/home") : handleFormSubmit}>Login</button>
            <button className="bttns" onClick={() => navigate("/Signup")}>Sign Up</button>
        </form>
        </div>
    )

}

export default Login;