import './App.css';
import Signup from "./components/Signup";
import Home from "./components/Home";
import Login from "./components/Login";
import Otpverif from './components/Otpverif';
import Forgotpassw from './components/Forgotpassw';
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
        <Route path="/home" element={<Home/>}/>
        <Route path="/otpverify" element={<Otpverif/>}/>
        <Route path="/forgotpassw" element={<Forgotpassw/>}/>
      </Routes>
    </Router>
    </div>
  </>
  );
}

export default App;
