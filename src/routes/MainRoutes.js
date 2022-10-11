import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../screen/Auth/Login/Login";
import SignUp from "../screen/Auth/SignUp/SignUp.jsx";
import LoginWithOtp from "../screen/Auth/LoginWithOtp/LoginWithOtp";
import RequestOtp from "../screen/Auth/RequestOtp/RequestOtp"
import PasswordRest from "../screen/Auth/PasswordRest/PasswordRest"
import PasswordRestOtp from "../screen/Auth/PasswordRestOtp/PasswordRestOtp"
import Auth from "../screen/Auth";
import NotFound from "../screen/Common/404/NotFound";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="auth" element={<Auth />}></Route>
        <Route path="/Login" element={<Login />} />

        
       
        <Route path="/*" element={<NotFound />} />
        <Route path="/auth/sign-up" element={<SignUp />} />
        <Route path="LoginWithOtp" element={<LoginWithOtp />} />
        <Route path="RequestOtp" element={<RequestOtp />} />
        <Route path="PasswordRest" element={<PasswordRest />} />
        <Route path="PasswordRestOtp" element={<PasswordRestOtp />} />
      </Routes>
    </BrowserRouter>
  )
}
