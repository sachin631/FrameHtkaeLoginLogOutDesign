import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SwitchButton from '../Resuable/Switchbutton';

function SignUp() {
  const [ErrName, setErrName] = useState(false);
  const [ErrEmail, setErrEmail] = useState(false);
  const [ErrPassword, setErrPassword] = useState(false);
  const [passVisible, setPassVisible] = useState('password');
  const [sName, setsName] = useState('');
  const [sEmail, setsEmail] = useState('');
  const [sPassword, setsPassword] = useState('');
  console.log({ sName, sEmail, sPassword });

  // api post data of email and password
  function userData() {
    fetch('http://ec2-52-66-165-70.ap-south-1.compute.amazonaws.com:3000/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ sName, sEmail, sPassword }),
    }).then(result => {
      result.json().then(response => {
        console.log(response);
      });
    });
  }

  return (
    <div className="grid md:grid-cols-12 grid-cols-1 font-[inter]">
      {/* ----------------- left sidebar  section start-------------------------------*/}
      <div className="col-span-5 bg-[#FFF6F2] h-[100%] ">
        <div className="flex flex-col justify-start items-start w-[100%] h-[100%] ">
          <img src="../../images/Frame.svg" alt="im" className="mt-[42px] ml-[54px]" />
          <img src="../../images/downframe.svg" alt="im" className="mt-[10%] w-[80%]" />
        </div>
      </div>

      {/* ----------------- left sidebar  section end-------------------------------*/}
      <div className="col-span-7 flex justify-center items-center pt-[10%] ">
        {/* --------------------------------right sidebar------------------------ */}
        <div className="min-w-[223px] w-[55%] max-w-[623px]">
          <div>
            <h1 className="text-[#4C4C4A] leading-[59px] font-[48px] font-[700] text-[48px]">
              Sing <span className="text-[#F3733D]">Up</span>
            </h1>
            <div className="text-[#7F7F7C] leading-[22px] font-[18px] font-[400] w-[100%] text-[22px]">
              Already have an account?{' '}
              <span className="text-[#F3733D] cursor-pointer animate-pulse">
                <NavLink to="/login">Log In</NavLink>
              </span>
            </div>
            {/* enter your name */}
            <div className="flex flex-col justify-start items-start mt-[60px] ">
              <label className="text-[#7F7F7C] leading-[22px] font-[18px] font-[500] font-[Inter] text-[18px]">Name</label>
              <div className="mt-[12px] relative w-[100%]">
                <img src="../../images/person_filled.svg" alt="i" className=" absolute mt-[16px] ml-[16px] " />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="max-w-[623px] w-[100%] min-w-[256px] pl-[48px] text-[19px] font-[Inter] text-[#4C4C4A] shadow-[#7F7F7C] shadow-md h-[48px] outline-none bg-[#FFFFFF] border-[1px] rounded-[63px] border-solid border-[#F2F2EC] "
                  onChange={event => {
                    const item = event.target.value;
                    setsName(item);
                    if (item.length < 3) {
                      setErrName(true);
                    } else {
                      setErrName(false);
                    }
                  }}
                />
              </div>
            </div>
            {/* wrong name toggle */}
            {ErrName === true ? (
              <div className="flex justify-start items-center mt-[14px] gap-2">
                <img src="../../images/error.svg" alt="simg" />
                <p className="text-[#FF2E00] leading-[19px] text-16px font-[400] font-[Inter]">Wrong Name</p>
              </div>
            ) : (
              ''
            )}
            {/* enter your email or mobile */}
            <div className="flex flex-col justify-start items-start mt-[30px]">
              <label className="text-[#7F7F7C] leading-[22px] font-[18px] font-[500] font-[Inter] text-[18px]">Email or Mobile</label>
              <div className="mt-[12px] relative w-[100%]">
                <img src="../../images/mail.svg" alt="i" className=" absolute mt-[16px] ml-[16px] " />

                <input
                  type="text"
                  placeholder="Enter your Email ID"
                  className="max-w-[623px] w-[100%] min-w-[256px]  pl-[48px] text-[19px] font-[Inter] text-[#4C4C4A] shadow-[#7F7F7C] shadow-md h-[48px] outline-none bg-[#FFFFFF] border-[1px] rounded-[63px] border-solid border-[#F2F2EC] "
                  onChange={event => {
                    const mailRegExp = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
                    setsEmail(event.target.value);

                    // const phoneregexp = /^w{2,}@w{2,}.w{2,4}$/;

                    if (mailRegExp.test(sEmail) === false) {
                      setErrEmail(true);
                    } else {
                      setErrEmail(false);
                    }
                  }}
                />
              </div>
            </div>
            {ErrEmail === true ? (
              <div className="flex justify-start items-center mt-[14px] gap-2">
                <img src="../../images/error.svg" alt="simg" />
                <p className="text-[#FF2E00] leading-[19px] text-16px font-[400] font-[Inter]">Wrong Email</p>
              </div>
            ) : (
              ''
            )}
            {/* enter password */}
            <div className="flex flex-col justify-start items-start mt-[30px]">
              <label className="text-[#7F7F7C] leading-[22px] font-[18px] font-[500] font-[Inter] text-[18px]">Password</label>
              <div className="mt-[12px] relative w-[100%] max-w-[623px]">
                <img src="../../images/lock.svg" alt="i" className=" absolute mt-[16px] ml-[16px] w-[16px]  h-[21px] border-[#CCCCC6]" />
                <img
                  src="../../images/visibility.svg"
                  alt="i"
                  className=" absolute ml-[90%] mt-[16px] border-[#CCCCC6]"
                  onClick={() => {
                    if (passVisible == 'password') {
                      setPassVisible('text');
                    } else if (passVisible == 'text') {
                      setPassVisible('password');
                    }
                    setTimeout(() => {
                      setPassVisible('password');
                    }, 4000);
                  }}
                />
                <input
                  type={passVisible}
                  placeholder="Password"
                  className="cursor-pointer w-[100%] min-w-[256px] pl-[48px] text-[19px] font-[Inter] text-[#4C4C4A] shadow-[#7F7F7C] shadow-md h-[48px] outline-none bg-[#FFFFFF] border-[1px] rounded-[63px] border-solid border-[#F2F2EC] "
                  onChange={event => {
                    const item = event.target.value;
                    setsPassword(item);
                    if (item.length < 8) {
                      setErrPassword(true);
                    } else {
                      setErrPassword(false);
                    }
                  }}
                />
              </div>
            </div>
            {ErrPassword === true ? (
              <div className="flex justify-start items-center mt-[14px] gap-2">
                <img src="../../images/error.svg" alt="simg" />
                <p className="text-[#FF2E00] leading-[19px] text-16px font-[400] font-[Inter]">Wrong Password</p>
              </div>
            ) : (
              ''
            )}

            {/* check box */}
            <div className="flex flex-col justify-start items-start mt-[30px]">
              <div className="mt-[8px] flex gap-[9px]">
                <SwitchButton />
                {/* <input
                  type="checkbox"
                  className="cursor-pointer pl-[48px] text-[19px] font-[Inter] text-[#4C4C4A] shadow-lg  outline-none bg-[#FFFFFF] border-[1px]  border-solid border-[#F2F2EC] "
                /> */}
                <label className="ml-[6px] text-[#B2B2AE] leading-[19px] text-[16px] font-[16px] font-[400]">
                  I agree to <span className="text-[#F3733D]">Platform Term</span> and services and <span className="text-[#F3733D]">privacy policy</span>
                </label>
              </div>
            </div>
            {/* create account button */}
            <button
              onClick={() => {
                userData();
              }}
              className="max-w-[623px] shadow-[#7F7F7C] shadow-md hover:bg-orange-600 text-[#FFFFFF] w-[100%] h-[48px] rounded-[63px] bg-[#F3733D]  mt-[42px]"
            >
              Create Account
            </button>
            {/* or divider */}
            <div className="flex justify-start items-center mt-[50px] w-[100%] max-w-[623px]">
              <hr className="w-[50%]" />
              <div className="text-[#B2B2AE]">Or</div>
              <hr className="w-[50%]" />
            </div>

            {/* Sign Up with  */}
            <div className="flex justify-start items-center space-x-[18px] mt-[39px]">
              <button className="flex items-center shadow-[#7F7F7C] shadow-sm p-[10px] rounded">
                <img src="/images/Google.svg" className="mr-[10px]" />
                <span className="mr-[13px] text-[14px] text-[#7F7F7C]">Sign up with Google</span>
              </button>
              <button className="flex items-center justify-center shadow-[#7F7F7C] shadow-sm p-[10px]  rounded">
                <img src="/images/vector.svg" className="mr-[10px]" />
                <span className="text-[14px] mr-[13px] text-[#7F7F7C] ">Sign up with Facebook</span>
              </button>
            </div>
          </div>
        </div>
        {/* --------------------------------right sidebar------------------------ */}
      </div>
    </div>
  );
}

export default SignUp;
