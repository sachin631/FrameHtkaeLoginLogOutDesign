import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SingUp from "../screen/Auth/SignUp/SingUp";
import Auth from "../screen/Auth";
import NotFound from "../screen/Common/404/NotFound";

export default function MainRoutes() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="auth" element={<Auth />}>
            <Route path="sign-up" element={<SingUp />} />
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  )
}
