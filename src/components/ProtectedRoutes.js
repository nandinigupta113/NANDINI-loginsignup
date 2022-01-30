// import { Navigate, Outlet } from "react-router-dom";
// import { useState } from "react";
// import Login from "./Login";


// function ProtectedRoutes(){
//     const [loggedIn, setLoggedIn] = useState(false);
//        <Login loggedIn = {loggedIn} setLoggedIn ={setLoggedIn}/>
//           const useAuth = () =>{
//                     const user = { loggedIn };
//                     return user && user.loggedIn;
//            };

//           const ProtectedRoutes = () => {
//                     const isAuth = useAuth();
//                     return isAuth ? <Outlet/> : <Navigate to="/"/>
//            };
// }
// export default ProtectedRoutes;