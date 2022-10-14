import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';

function ForgetPassWord() {
  const [sEmail, setsEmail] = useState('');

  const [ErrEmail, setErrEmail] = useState(false);
  const [toggle, setToggle] = useState(false);
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
      <div className="grid grid-cols-12 font-[inter]">
        {/* ----------------- left sidebar  section start-------------------------------*/}
        <div className="col-span-5 bg-[#FFF6F2] h-[100%] ">
          <div className="flex flex-col justify-start items-start w-[100%] h-[100%] ">
            <img src="../../images/Frame.svg" alt="im" className="mt-[42px] ml-[54px]" />
            <img src="../../images/g1.svg" alt="im" className="mt-[15%] w-[80%] ml-[10%]" />
          </div>
        </div>
        {/* ----------------- left sidebar  section start-------------------------------*/}

        {/* ----------------- left sidebar  section end-------------------------------*/}
        <div className="col-span-7 flex justify-center items-start pt-[10%] ">
          {/* --------------------------------right sidebar------------------------ */}
          <div className="w-[55%]">
            <div>
              <h1 className="text-[#4C4C4A] leading-[59px] font-[48px] font-[700] text-[48px]">
                Password <span className="text-[#F3733D]">Reset</span>
              </h1>

              {/* enter your email or mobile */}
              <div className="flex flex-col justify-start items-start mt-[30px]">
                <label className="text-[#7F7F7C] leading-[22px] font-[18px] font-[500] font-[Inter] text-[18px]">Email or Mobile</label>
                <div className="mt-[12px] relative w-[100%]">
                  <img src="../../images/person_filled.svg" alt="i" className=" absolute mt-[16px] ml-[16px] " />

                  <input
                    type="text"
                    placeholder="Enter your Email ID"
                    className=" w-[100%] max-w-[623px] pl-[48px] text-[19px] font-[Inter] text-[#4C4C4A] shadow-lg h-[48px] outline-none bg-[#FFFFFF] border-[1px] rounded-[63px] border-solid border-[#F2F2EC] "
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
                  <form className="flex justify-center items-center mt-[12px] gap-[28px] max-w-[623px] ">
                    <input
                      type="text"
                      maxLength={1}
                      name="firstOtp"
                      onChange={event => {
                        setFirstOtp(event.target.value);
                      }}
                      className="font-[Inter] text-[#4C4C4A] text-[16px] font-[400] font-[24px] leading-[29px] text-center outline-none w-[48px] h-[48px] bg-[#FFF6F2] border-solid rounded-[8px] border-[0.5px] border-[#F3733D] border-[0.5px solid #F3733D]"
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
              {/* ...............................................sachin otp toggle bar end here.................................................... */}

              {/* create account button */}
              <div className="mt-[42px]">
                {toggle === false ? (
                  <button
                    onClick={() => {
                      setToggle(true);
                    }}
                    className="bg-primary-400 max-w-[623px] shadow-lg shadow-primary-400/50 text-white text-[18px] p-[13px] leading-[21.78px] rounded-full w-full font hover:bg-[#FA5916] bg-[#FA5916]"
                  >
                    {' '}
                    Request OTP
                  </button>
                ) : (
                  ''
                )}
                {/* <NavLink to="/RequestOtp"></NavLink> */}
              </div>
              {/* ---------------------------------------------------add confirm continue to Reset start------------------------------------------------------ */}
              {toggle === true ? (
                <section className="flex justify-center items-center w-[100%]">
                  <NavLink to="/CreatePassWord" className="w-[100%]">
                    <button
                      onClick={event => {
                        apiHandler(event);
                      }}
                      className="hover:bg-[#FA5916] max-w-[623px] text-[18px] font-[inter] shadow-primary-400/50 leading-[22px] font-[18px] font-[400] text-[#FFFFFF] shadow-md bg-[#F3733D] text-center w-[100%] py-[13px] rounded-[63px]"
                    >
                      Continue to Reset
                    </button>
                  </NavLink>
                </section>
              ) : (
                ''
              )}

              {/* ---------------------------------------------------add confirm continue to Reset end------------------------------------------------------ */}
            </div>
          </div>
          {/* --------------------------------right sidebar------------------------ */}
        </div>
      </div>
    </>
  );
}

export default ForgetPassWord;
