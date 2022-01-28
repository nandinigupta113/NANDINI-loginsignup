import react,{useState ,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import validation from "./validation";
import Recaptcha from "react-recaptcha";
import "../assets/Signup.css"

function Signup() {
    const navigate = useNavigate();
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [submitform, setSubmitForm] = useState(false);

    const [values, setValues] = useState({
        fullname:"",
        email: "",
        password:"",
        userid:"",
        address:"",
        year:"1 year",
        branch:"CS",
        gender:"Male",
        contact:"",
        isverify: false,
    });

    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name] : event.target.value,
        })
    }
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(values));
        setDataIsCorrect(true);
    }
    useEffect(() => {
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            setSubmitForm(true);
        }
    }, [errors]);


    var Recaptcha = require('react-recaptcha');
    var callback = () => {
        console.log("captcha loaded")
    };
    var verifyCallback = (response) => {       
        setValues({
           ...values,
                isverify : true
            })
    };

    return (
     <div className="box2">
         <div className="heading">
              <h1 className="head">Sign Up</h1>
         </div>
      <form>
          <div className="insidd">
          <div className="boxess">
              <input type="text"autoComplete="off" placeholder="Name" name="fullname" onChange={handleChange} value={values.fullname}/>
              {errors.fullname && <p className="error">{errors.fullname}</p>}
          </div>

          <div className="boxess">
              <input type="text"autoComplete="off"  placeholder="UserId" name="userid" onChange={handleChange} value={values.userid}/>
              {errors.userid && <p className="error">{errors.userid}</p>}
          </div>
          <div className="boxess">
              <select name="branch"onChange= {handleChange}>
                  <option value="CS">Computer Science</option>
                  <option value="IT">Information Technology</option>
                  <option value="CSIT">CSIT</option>
                  <option value="CSE">Computer Science Engineering</option>
                  <option value="ME">Mechanical Engineering</option>
                  <option value="EN">Electrical</option>
                  <option value="EC">Electronics</option>
              </select>
          </div>

     
          <div className="boxess">
              <input onChange={handleChange} autoComplete="off" value={values.address} placeholder="Address"name="address"></input>
              {errors.address && <p className="error">{errors.address}</p>}
          </div>

          <div className="boxess">
              <input onChange={handleChange}autoComplete="off"  placeholder="E-mail" value={values.email} name="email" type="email"/>
              {errors.email && <p className="error">{errors.email}</p>}
          </div>
  
          <div className="gender">
              <label>Gender:</label>
               <label>Male</label><input autoComplete="off"  type="radio" value="Male" name="gender" checked={values.gender === "Male"} onChange={handleChange} />
               <label>Female</label><input autoComplete="off" type="radio" value="Female" name="gender"checked={values.gender === "Female"} onChange= {handleChange} />
          </div>


          <div className="boxess">
              <select name="year"onChange={handleChange}>
                  <option value="1 year">1 Year</option>
                  <option value="2 year">2 Year</option>
                  <option value="3 year">3 Year</option>
                  <option value="4 year">4 Year</option>
              </select>
          </div>
 
          <div className="captcha2">
               <Recaptcha
                    sitekey="6LeqXj8eAAAAAKwljxyqxBYCJ5f84Ad_IZ3kT4jp"
                    render="explicit"
                    onloadCallback={callback}
                    verifyCallback={verifyCallback}
              />
               {values.isverify === false && <p className="error">{errors.isverify}</p>}
            </div>

          <div className="boxess">
              <input type="text" autoComplete="off" placeholder="Contact no." name="contact" onChange={handleChange} value={values.contact}/>
              {errors.contact && <p className="error">{errors.contact}</p>}
          </div>
          </div>

          <div className="boxess">
              <input type="password" autoComplete="off" placeholder="Password" name="password" onChange={handleChange} value={values.password}/>
              {errors.password && <p className="error">{errors.password}</p>}
          </div>
        
          <button className="bttns" onClick={submitform ? navigate("/otpverify") : handleFormSubmit}>Sign Up</button>
      </form>
    </div>
    );
  }
  
  export default Signup;