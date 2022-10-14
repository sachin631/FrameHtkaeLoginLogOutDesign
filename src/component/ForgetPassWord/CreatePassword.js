import React, { useState } from 'react';

function CreatePassWord() {
  const [Password, setPassword] = useState('');
  const [ErrPass, SetErrPass] = useState(false);
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

        {/* ----------------- left sidebar  section end-------------------------------*/}
        <div className="col-span-7 flex justify-center items-start pt-[10%] ">
          {/* --------------------------------right sidebar------------------------ */}
          <div className="w-[67%]">
            <div>
              <h1 className="text-[#4C4C4A] leading-[59px] font-[48px] font-[700] text-[48px]">
                Create <span className="text-[#F3733D]">Password </span>
              </h1>

              {/*confirm password first */}
              <div className="flex flex-col justify-start items-start mt-[30px]">
                <label className="text-[#7F7F7C] leading-[22px] font-[18px] font-[500] font-[Inter] text-[18px]">New Password</label>
                <div className="mt-[12px] relative w-[100%]">
                  <img src="../../images/lock.svg" alt="i" className=" absolute mt-[16px] ml-[16px] " />

                  <input
                    onChange={event => {
                      setPassword(event.target.value);
                    }}
                    type="password"
                    placeholder="password"
                    className=" w-[100%] pl-[48px] text-[19px] font-[Inter] text-[#4C4C4A] shadow-lg h-[48px] outline-none bg-[#FFFFFF] border-[1px] rounded-[63px] border-solid border-[#F2F2EC] "
                  />
                </div>
              </div>

              {/*confirm password re-match*/}
              <div className="flex flex-col justify-start items-start mt-[30px]">
                <label className="text-[#7F7F7C] leading-[22px] font-[18px] font-[500] font-[Inter] text-[18px]">Re-Enter Password</label>
                <div className="mt-[12px] relative w-[100%]">
                  <img src="../../images/lock.svg" alt="i" className=" absolute mt-[16px] ml-[16px] " />

                  <input
                    onChange={event => {
                      if (Password == event.target.value) {
                        SetErrPass(false);
                      } else {
                        SetErrPass(true);
                      }
                    }}
                    type="password"
                    placeholder="password"
                    className=" w-[100%] pl-[48px] text-[19px] font-[Inter] text-[#4C4C4A] shadow-lg h-[48px] outline-none bg-[#FFFFFF] border-[1px] rounded-[63px] border-solid border-[#F2F2EC] "
                  />
                </div>
              </div>
              {ErrPass === true ? (
                <div className="flex justify-start items-center mt-[14px] gap-2">
                  <img src="../../images/error.svg" alt="simg" />
                  <p className="text-[#FF2E00] leading-[19px] text-16px font-[400] font-[Inter]">Not match..</p>
                </div>
              ) : (
                ''
              )}
              <section className="flex justify-center items-center mt-[28px]">
                <button className="hover:bg-[#FA5916] text-[18px] font-[inter] shadow-primary-40050 shadow-[#7F7F7C] leading-[22px] font-[18px] font-[400] text-[#FFFFFF] shadow-md bg-[#F3733D] text-center w-[523px] py-[13px] rounded-[63px]">
                  Create Password
                </button>
              </section>
            </div>
          </div>
          {/* --------------------------------right sidebar end------------------------ */}
        </div>
      </div>
    </>
  );
}

export default CreatePassWord;
