import React from 'react';
import './index.css';
import Login from './component/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './component/SignUp';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <div>
        {/* <SignUp /> */}
      {/* <Login /> */}
      {/* </div>  */}
    </>
  );
};
export default App;
