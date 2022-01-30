
const validation =(values) => {
    let errors = {};
    if(!values.name){
        errors.name = "Name is required"
    }
    if(!values.email){
        errors.email = "Email is required"
    }   else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "Email is invalid"
    }
    if(!values.password){
        errors.password = "Password is required"
    }  else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(values.password)){
        errors.password = "8 charlong,a special char,UC,LC and num is must"
    }
    if(!values.phone){
        errors.phone = "contact no. is required"
    }
    if(!values.rollnum){
        errors.rollnum = "UserId is required"
    }
    if(!values.address){
        errors.address = "Address is required"
    }
    if(values.isverify === false){
        errors.isverify = "checking captcha is required!"
    }
    if(!values.confirmpassword){
        errors.confirmpassword = "Password Confirmation is required";
    } else if(values.confirmpassword !== values.password ){
        errors.confirmpassword = "password is not matching";
    }
    return errors;
}
export default validation;