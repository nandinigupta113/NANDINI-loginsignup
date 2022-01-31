import react,{useState ,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../assets/Forgotpassw.css"
import psswd from "../assets/psswd.png";
import axios from 'axios';
function Forgotpassw(){
    const navigate = useNavigate();
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [submitform, setSubmitForm] = useState(false);


    const validation =(confrmuserid) => {
        let errors = {};
        if(!confrmuserid.userid){
            errors.userid = "UserId is required!"
        }
        return errors;
    }
    const [confrmuserid, setConfrmUserId] = useState({
        userid:""
    });



    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setConfrmUserId({
            ...confrmuserid,
            [event.target.name] : event.target.value,
        })
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(confrmuserid));
        setDataIsCorrect(true);
    }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            axios.post("/password-forgot", {
                email : confrmuserid.userid
             })
                 .then(response => {if(response.data){setSubmitForm(true)}console.log(response.data)})
                 .catch(error =>{console.log(error)})
        }
    }, [errors]);
    return(
      <div className="box">
          <div className="heading">
             <h1 className="head">Forgot Password</h1>
          </div>
          <p className="messg">
              Your password has been sent to your registered mobile no.
          </p>
          <div className="mbnoo">
                <h2>+91 XXXXXXXXXX</h2>
          </div>
          <div className="password" id="pp">
                <label className="label">Enter UserId</label>
               <div className="imag">
                <img src={psswd} alt="" />
                <input className="inputfield"type="text" autoComplete="off" name="userid" onChange={handleChange} value={confrmuserid.userid} placeholder="Confirm Your UserId"/>
                </div> 
            </div>
            {errors.userid && <p className="error">{errors.userid}</p>}
            <button className="bttns3" onClick={submitform ? navigate("/") : handleFormSubmit}>Redirect to Login Page</button>
      </div>
    )
}
export default Forgotpassw;