import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "../pages/SplashScreen";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

export default function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Splash />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/home" element={<Home />} />

      </Routes>

    </BrowserRouter>

  );
}