import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from './Components/LandingPage/Landing';
import { Login } from './Components/Login/Login';
import { Sign } from './Components/SignUp/Sign';
import { User } from './Components/UserPage/User';
import { Offers } from './Components/LandingCompany/Offers';
import { Admin } from './Components/Admin/Admin';
import { Ad } from './Components/AdminOffers/Ad';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Sign/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/LandingCompany" element={<Offers/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/adminOffers" element={<Ad/>}/>
    </Routes>
  </BrowserRouter>
     
    </>
  );
}

export default App;
