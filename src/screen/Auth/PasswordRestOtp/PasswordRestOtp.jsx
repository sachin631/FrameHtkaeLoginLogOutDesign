import React from 'react'
import { NavLink } from "react-router-dom";
import './PasswordRestOtp.css'

export default function SingUp() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-white">
    <div className="lg:hidden">
      <img src='/assets/Frame.svg' className='mt-[1]'/>
    </div>
      <div className='sign-up-form-input-shadow container mx-auto bg-white grid grid-cols-10 rounded-xl overflow-hidden'>
        <div className="flex flex-col justify-between col-span-4 bg-[#FFF6F2] overflow-hidden">
          <div className="">
            <img src='/assets/framehatke.svg' className='mt-[42px] ml-[52px]'/>
          </div>
          <div className="mb-8">
            <img src='/assets/undraw_authentication_re_svpt .svg' className='px-[64px] mt-[334px] bottom-0'/>
          </div>
        </div>
        <div className="col-span-6 flex justify-center  items-center">
          <div className="p-8 w-full max-w-[523px] mt-[-400px]">
            <h1 className='font-bold text-[48px] leading-[58px] text-[#4C4C4A]'>Password <span className='text-primary-400'>Reset</span></h1>
            
            <form action="" className='w-full mt-[48px] space-y-[30px]'>
             
              <div>
                <label htmlFor="name" className='text-[18px] leading-[21.5px] font-medium text-[#7F7F7C] ml-[6px]'>Email or Mobile</label>
                <div className="p-[16px]  mt-[12px] flex items-center border border-[#F2F2EC] rounded-full sign-up-form-input-shadow w-full">
                <span className='icon'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.25278 8C7.20931 8 6.31603 7.60833 5.57295 6.825C4.82987 6.04167 4.45833 5.1 4.45833 4C4.45833 2.9 4.82987 1.95833 5.57295 1.175C6.31603 0.391667 7.20931 0 8.25278 0C9.29625 0 10.1895 0.391667 10.9326 1.175C11.6757 1.95833 12.0472 2.9 12.0472 4C12.0472 5.1 11.6757 6.04167 10.9326 6.825C10.1895 7.60833 9.29625 8 8.25278 8ZM0.663889 16V13.2C0.663889 12.6333 0.802386 12.1123 1.07938 11.637C1.35574 11.1623 1.72317 10.8 2.18167 10.55C3.1619 10.0333 4.15794 9.64567 5.16979 9.387C6.18164 9.129 7.20931 9 8.25278 9C9.29625 9 10.3239 9.129 11.3358 9.387C12.3476 9.64567 13.3437 10.0333 14.3239 10.55C14.7824 10.8 15.1498 11.1623 15.4262 11.637C15.7032 12.1123 15.8417 12.6333 15.8417 13.2V16H0.663889ZM2.56111 14H13.9444V13.2C13.9444 13.0167 13.9011 12.85 13.8145 12.7C13.7272 12.55 13.6124 12.4333 13.4701 12.35C12.6164 11.9 11.7547 11.5623 10.8852 11.337C10.0156 11.1123 9.13815 11 8.25278 11C7.36741 11 6.48994 11.1123 5.62038 11.337C4.75082 11.5623 3.88917 11.9 3.03542 12.35C2.89313 12.4333 2.77866 12.55 2.69202 12.7C2.60475 12.85 2.56111 13.0167 2.56111 13.2V14ZM8.25278 6C8.77451 6 9.22131 5.804 9.59317 5.412C9.96439 5.02067 10.15 4.55 10.15 4C10.15 3.45 9.96439 2.97933 9.59317 2.588C9.22131 2.196 8.77451 2 8.25278 2C7.73104 2 7.28456 2.196 6.91334 2.588C6.54148 2.97933 6.35556 3.45 6.35556 4C6.35556 4.55 6.54148 5.02067 6.91334 5.412C7.28456 5.804 7.73104 6 8.25278 6Z" fill="#CCCCC6"/></svg></span>
                  <input type="email" placeholder='Enter your email id' className=' text-[#4C4C4A] w-full text-[16px] outline-none leading-[19.36px] ml-[17.16px] placeholder:text-[#B2B2AE]' required/>
                </div>
              </div>
              <div>
                                <label htmlFor="name" className='text-[18px] leading-[21.5px] font-medium text-[#7F7F7C] ml-[6px]'>OTP</label>

                                {/* <span className='icon'><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66389 16C2.14215 16 1.69567 15.8043 1.32445 15.413C0.952594 15.021 0.766666 14.55 0.766666 14V2C0.766666 1.45 0.952594 0.979333 1.32445 0.588C1.69567 0.196 2.14215 0 2.66389 0H17.8417C18.3634 0 18.8102 0.196 19.1821 0.588C19.5533 0.979333 19.7389 1.45 19.7389 2V14C19.7389 14.55 19.5533 15.021 19.1821 15.413C18.8102 15.8043 18.3634 16 17.8417 16H2.66389ZM10.2528 9L2.66389 4V14H17.8417V4L10.2528 9ZM10.2528 7L17.8417 2H2.66389L10.2528 7ZM2.66389 4V2V14V4Z" fill="#CCCCC6"/></svg></span>
                  <input type="email" placeholder='Enter your email id' className=' text-[#4C4C4A] w-full text-[16px] outline-none leading-[19.36px] ml-[17.16px] placeholder:text-[#B2B2AE]' required/> */}
                                    <form action="#" x-data="otpForm()" method="POST">
                                        <div id="otp" class="flex flex-row justify-center text-center px-2 mt-4 ">
            <input class="ml-[29px] border h-12 w-12 text-center text-[24px] form-control rounded-lg bg-[#FFF6F2] border-solid border-0.5 border-[#F3733D]" type="text" id="first" maxlength="1" required /> 
            <input class="ml-[29px] border h-12 w-12 text-center text-[24px] form-control rounded-lg bg-[#FFF6F2] border-solid border-0.5 border-[#F3733D]"  type="text" id="second" maxlength="1" required /> 
            <input class="ml-[29px] border h-12 w-12 text-center text-[24px] form-control rounded-lg bg-[#FFF6F2] border-solid border-0.5 border-[#F3733D]" type="text" id="third" maxlength="1" required  /> 
            <input class="ml-[29px] border h-12 w-12 text-center text-[24px] form-control rounded-lg bg-[#FFF6F2] border-solid border-0.5 border-[#F3733D]" type="text" id="fourth" maxlength="1" required />
                      </div>
                                
                        </form>
                </div>
              
              {/* Create Account */}
              <div className="mt-[42px]">
                <button className='bg-primary-400 shadow-lg shadow-primary-400/50 text-white text-[18px] p-[13px] leading-[21.78px] rounded-full w-full font hover:bg-[#FA5916] '>Continue to Reset</button>
              </div>         
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
