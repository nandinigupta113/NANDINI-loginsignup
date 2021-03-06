import axios from "axios";
import react,{useState ,useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../assets/Otpverify.css"
window.onunload = function() {debugger;}

function Otpverif(props){
    const navigate = useNavigate();
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const [result, setResult] = useState({
        otp: ""
    });

    const validation =(isotp) => {
        let errors = {};
        if(!isotp.otp1){
            errors.otp1 = "4 digits are required!"
        }
        if(!isotp.otp2){
            errors.otp2 = "4 digits are required!"
        }
        if(!isotp.otp3){
            errors.otp3 = "4 digits are required!"
        }
        if(!isotp.otp4){
            errors.otp4 = "4 digits are required!"
        }
        return errors;
    }

    const [isotp, setisOtp] = useState({
       otp1:"",
       otp2:"",
       otp3:"",
       otp4:"",
    });

    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setisOtp({
            ...isotp,
            [event.target.name] : event.target.value,
        })
    }
    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setErrors(validation(isotp));
        setDataIsCorrect(true);
    }
    useEffect(() => {  

        if(Object.keys(errors).length === 0 && dataIsCorrect){
            axios.get("/register")  
            .then(response => {
                const data = response.data[response.data.length - 1]
                console.log(data);
                console.log(data.otp_val);
                const res = data.otp_val;
                setResult({
                   otp: res
                });
                console.log(result)
            })
            .catch(error =>{console.log(error)})
            var val = parseInt(isotp.otp1)*1000 + parseInt(isotp.otp2)*100 +parseInt(isotp.otp3)*10 +parseInt(isotp.otp4);
            if( val === result.otp){
                    navigate("/home");
                    }

            // if(parseFloat(parseInt(isotp.otp1)*1000 + parseInt(isotp.otp2)*100 +parseInt(isotp.otp3)*10 +parseInt(isotp.otp4)) === props.otpchk){
            //      setSubmitForm(true);
            //     }
        }
    }, [errors]);

    return(
        <div className="box">
            <div className="heading">
            <h1 className="head">OTP Veification</h1>
            </div>
            <div className="insidebox">
            <div className="msg">
                <h2>Enter the otp sent to</h2>
            </div>
            <div className="mbno">
                <h2>+91 XXXXXXXXXX</h2>
            </div>
            </div>
            <div className="otp">
            <div>
                <input className="otpdig" name="otp1" autoComplete="off" onChange={handleChange} value={isotp.otp1} type="text" maxLength="1"/>
                <input className="otpdig" name="otp2" autoComplete="off" onChange={handleChange} value={isotp.otp2}type="text" maxLength="1"/>
                <input className="otpdig" name="otp3" autoComplete="off" onChange={handleChange} value={isotp.otp3}type="text" maxLength="1"/>
                <input className="otpdig" name="otp4" autoComplete="off" onChange={handleChange} value={isotp.otp4}type="text" maxLength="1"/>
            </div>
            {errors.otp1 || errors.otp2 || errors.otp3 || errors.otp4 && <p>{errors.otp1}</p>}
            </div>
            <div className="resend">
              <h2 className="rsnd">Resend OTP?</h2>
            </div>
            <button className="bttns2"onClick={handleFormSubmit}>Verify & Proceed</button>
        </div>
    )
}
export default Otpverif;