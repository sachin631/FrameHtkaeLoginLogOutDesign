import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SwitchButton from '../Resuable/Switchbutton';

function LoginWithOtp() {
  const [sEmail, setsEmail] = useState('');
  const [toggle, setToggle] = useState(false);
  const [ErrEmail, setErrEmail] = useState(false);

  //   otp verification store data
  const [firstOtp, setFirstOtp] = useState('');
  const [secondOtp, setSecondOtp] = useState('');
  const [thirdOtp, setThirdOtp] = useState('');
  const [fourthOtp, setFourthOtp] = useState('');
  console.log({ firstOtp, secondOtp, thirdOtp, fourthOtp });

  const apiHandler = () => {
    fetch('http://52.66.165.70:3000/user/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sEmail, firstOtp, secondOtp, thirdOtp, fourthOtp }),
    }).then(result => {
      result.json().then(response => {
        console.log(response);
      });
    });
  };
  return (
    <>
      <div className="grid md:grid-cols-12 grid-cols-1 font-[inter]">
        {/* ----------------- left sidebar  section start-------------------------------*/}
        <div className="col-span-5 bg-[#FFF6F2] h-[100%] ">
          <div className="flex flex-col justify-start items-start w-[100%] h-[100%] ">
            <img src="../../images/Frame.svg" alt="im" className="mt-[42px] ml-[54px]" />
            <img src="../../images/loginimage.svg" alt="im" className="mt-[10%] w-[80%]" />
          </div>
        </div>
        {/* ----------------- left sidebar  section start-------------------------------*/}

        {/* ----------------- left sidebar  section end-------------------------------*/}
        <div className="col-span-7 flex justify-center items-center pt-[10%] ">
          {/* --------------------------------right sidebar------------------------ */}
          <div className="min-w-[223px] w-[55%] max-w-[623px]">
            <div>
              <h1 className="text-[#4C4C4A] leading-[59px] font-[48px] font-[700] text-[48px]">
                Log <span className="text-[#F3733D]">In</span>
              </h1>
              <div className="text-[#7F7F7C] leading-[22px] font-[18px] font-[400] max-w-[623px] w-[100%] text-[22px]">
                Don`t have an account?{' '}
                <span className="text-[#F3733D] cursor-pointer">
                  <NavLink to="/">Sign Up</NavLink>
                </span>
              </div>
              {/* enter your email or mobile */}
              <div className="flex flex-col justify-start items-start mt-[30px]">
                <label className="text-[#7F7F7C] leading-[22px] font-[18px] font-[500] font-[Inter] text-[18px]">Email or Mobile</label>
                <div className="mt-[12px] relative w-[100%]">
                  <img src="../../images/mail.svg" alt="i" className=" absolute mt-[16px] ml-[16px] " />

                  <input
                    type="text"
                    placeholder="Enter your Email ID"
                    className="max-w-[623px] w-[100%] pl-[48px] text-[19px] font-[Inter] text-[#4C4C4A] shadow-md shadow-[#7F7F7C] h-[48px] outline-none bg-[#FFFFFF] border-[1px] rounded-[63px] border-solid border-[#F2F2EC] "
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
              {/* ---------------------------------------------sachin otp toggle bar start here------------------------------------------------ */}
              {toggle === true ? (
                <section className="mt-[30px]">
                  <h1 className="font-[Inter]  font-[500] font-[18px] leading-[21.78px] text-[#7F7F7C]">OTP</h1>
                  <form className="flex justify-center items-center mt-[12px] gap-[28px] max-w-[623px]">
                    <input
                      type="text"
                      maxLength={1}
                      name="firstOtp"
                      onChange={event => {
                        setFirstOtp(event.target.value);
                      }}
                      className="font-[Inter] shadow-[#7F7F7C] shadow-md text-[#4C4C4A] text-[16px] font-[400] font-[24px] leading-[29px] text-center outline-none w-[48px] h-[48px] bg-[#FFF6F2] border-solid rounded-[8px] border-[0.5px] border-[#F3733D] border-[0.5px solid #F3733D]"
                    ></input>
                    <input
                      type="text"
                      maxLength={1}
                      name="secondOtp"
                      onChange={event => {
                        setSecondOtp(event.target.value);
                      }}
                      className="font-[Inter] text-center outline-none w-[48px] h-[48px] bg-[#FFF6F2] border-solid rounded-[8px] border-[0.5px] border-[#F3733D] border-[0.5px solid #F3733D]"
                    ></input>
                    <input
                      type="text"
                      maxLength={1}
                      name="thirdOtp"
                      onChange={event => {
                        setThirdOtp(event.target.value);
                      }}
                      className="font-[Inter] text-center outline-none w-[48px] h-[48px] bg-[#FFF6F2] border-solid rounded-[8px] border-[0.5px] border-[#F3733D] border-[0.5px solid #F3733D]"
                    ></input>
                    <input
                      type="text"
                      maxLength={1}
                      name="fourthOtp"
                      onChange={event => {
                        setFourthOtp(event.target.value);
                      }}
                      className="font-[Inter] text-center outline-none w-[48px] h-[48px] bg-[#FFF6F2] border-solid rounded-[8px] border-[0.5px] border-[#F3733D] border-[0.5px solid #F3733D]"
                    ></input>
                  </form>
                </section>
              ) : (
                ''
              )}

              {/* check box */}
              <div className="flex flex-col justify-start items-start mt-[30px] w-[100%]">
                <div className="mt-[8px] flex justify-between w-[100%]">
                  <div className="flex justify-start gap-[9px] items-center">
                    <SwitchButton />
                    {/* <input
                      type="checkbox"
                      className="cursor-pointer pl-[48px] text-[19px] font-[Inter] text-[#4C4C4A] shadow-lg  outline-none bg-[#FFFFFF] border-[1px]  border-solid border-[#F2F2EC] "
                    /> */}
                    <label className="ml-[6px] text-[#B2B2AE] leading-[19px] text-[16px] font-[16px] font-[400] ">Remember me</label>
                  </div>
                  {/* <div className="text-[#B2B2AE]">Forget Password</div> */}
                </div>
              </div>
              {/* create account button */}
              {/* ---------------------------------------------------------------sachin toggle otp button request start here--------------------------------------------------- */}
              <div className="mt-[42px]">
                {toggle === false ? (
                  <button
                    onClick={() => {
                      setToggle(true);
                    }}
                    className="max-w-[623px] bg-primary-400 shadow-md shadow-[#7F7F7C]  text-white text-[18px] p-[13px] leading-[21.78px] rounded-full w-full font hover:bg-[#FA5916] bg-[#FA5916]"
                  >
                    {' '}
                    Request OTP
                  </button>
                ) : (
                  ''
                )}
                <NavLink to="/RequestOtp"></NavLink>
              </div>

              {/* ---------------------------------------------------add confirm continue to Reset start------------------------------------------------------ */}
              {toggle === true ? (
                <section className="flex justify-start items-center">
                  <button
                    onClick={event => {
                      apiHandler(event);
                    }}
                    className="hover:bg-[#FA5916] text-[18px] font-[inter] shadow-primary-400/50 leading-[22px] font-[18px] font-[400] text-[#FFFFFF] shadow-md bg-[#F3733D] text-center w-[100%] max-w-[623px] py-[13px] rounded-[63px]"
                  >
                    Continue to Reset
                  </button>
                </section>
              ) : (
                ''
              )}

              {/* ---------------------------------------------------add confirm continue to Reset end------------------------------------------------------ */}

              {/*----------------- ------------------------------------sachin toggle otp button request end here------------------------------------------------- */}
              <NavLink to="/Login">
                <button className="text-[#F3733D] shadow-md shadow-[#7F7F7C] max-w-[623px]  text-center leading-[22px] text-[18px] font-[400] w-[100%] h-[48px] rounded-[63px] bg-[#FFFFFF]   mt-[30px] border-[2px] border-solid border-[#F3733D]">
                  Login With Password
                </button>
              </NavLink>
              {/* or divider */}
              <div className="flex justify-start items-center mt-[50px] max-w-[623px]">
                <hr className="w-[50%]" />
                <div className="text-[#B2B2AE]">Or</div>
                <hr className="w-[50%]" />
              </div>
              {/* Sign Up with  */}
              <div className="flex justify-start items-center space-x-[38px] mt-[30px]">
                <button className="flex items-center shadow-[#7F7F7C] shadow-sm p-[1px] rounded">
                  <img src="/images/Google.svg" className="mr-[10px]" />
                  <span className="mr-[13px] text-[14px] text-[#7F7F7C]">Sign up with Google</span>
                </button>
                <button className="flex items-center justify-center shadow-[#7F7F7C] shadow-sm p-[10px] rounded">
                  <img src="/images/vector.svg" className="mr-[10px]" />
                  <span className="text-[14px] mr-[13px] text-[#7F7F7C]">Sign up with Facebook</span>
                </button>
              </div>
            </div>
          </div>
          {/* --------------------------------right sidebar------------------------ */}
        </div>
      </div>
    </>
  );
}

export default LoginWithOtp;
