import './App.css';
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Otpverif from './components/Otpverif';
import Forgotpassw from './components/Forgotpassw';
// import ProtectedRoutes from "./components/ProtectedRoutes";
import {
  BrowserRouter as 
  Router, Routes, Route
} from "react-router-dom";
function App() {
  return (
  <>
  <div className="cart">
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        {/* <Route element={<ProtectedRoutes/>}> */}
        <Route path="/home" element={<Home/>}/>
        <Route path="/otpverify" element={<Otpverif/>}/>
        <Route path="/forgotpassw" element={<Forgotpassw/>}/>
        {/* </Route> */}
      </Routes>
    </Router>
    </div>
  </>
  );
}

export default App;
