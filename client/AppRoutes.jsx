import  { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/views/app/Home/Home";
import Login from "./src/views/auth/Login";

const AppRoutes = () => {
  const [token, settoken] = useState('');

  useEffect(()=>{
    const token = localStorage.getItem('token')
    settoken(token)
  },[])
  
  if(!token){
    return <Login setToken={settoken}/>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
      </Routes>
      <Routes>
        <Route path="/upload" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
