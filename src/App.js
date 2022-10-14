import React from 'react';
import './index.css';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';
import LoginWithOtp from './component/LoginWithOtp';
import ForgetPassWord from './component/ForgetPassWord/ForgetPassWord';
import CreatePassWord from './component/ForgetPassWord/CreatePassword';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/LoginWithOtp" element={<LoginWithOtp />}></Route>
          <Route path="/ForgetPassWord" element={<ForgetPassWord />}></Route>
          <Route path="/CreatePassWord" element={<CreatePassWord />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
