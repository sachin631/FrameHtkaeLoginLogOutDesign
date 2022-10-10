import React from 'react'
import { NavLink } from "react-router-dom";
import './LoginWithOtp.css'

export default function SingUp() {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center bg-white">
      <div className='sign-up-form-input-shadow container mx-auto bg-white grid grid-cols-10 rounded-xl overflow-hidden'>
        <div className="flex flex-col justify-between col-span-4 bg-[#FFF6F2] overflow-hidden">
          <div className="">
            <img src='/assets/framehatke.svg' className='mt-[42px] ml-[52px]'/>
          </div>
          <div className="mb-8">
            <img src='/assets/Frame 9.svg' className='px-[62px] py-[115px] bottom-0'/>
          </div>
        </div>
        <div className="col-span-6 flex justify-center  items-center">
          <div className="p-8 w-full max-w-[523px]">
            <h1 className='font-bold text-[48px] leading-[58px] text-[#4C4C4A]'>Log <span className='text-primary-400'>In</span></h1>
            <p className='text-[18px] leading-[21.78px]'>Don’t have an account ? <NavLink to="/signUp"><span className='text-primary-400'>Sign Up</span></NavLink></p>
            <form action="" className='w-full mt-[48px] space-y-[30px]'>
        
              <div>
                <label htmlFor="name" className='text-[18px] leading-[21.5px] font-medium text-[#7F7F7C] ml-[6px]'>Email or Mobile</label>
                <div className="p-[16px]  mt-[12px] flex items-center border border-[#F2F2EC] rounded-full sign-up-form-input-shadow w-full">
                  <span className='icon'><svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.66389 16C2.14215 16 1.69567 15.8043 1.32445 15.413C0.952594 15.021 0.766666 14.55 0.766666 14V2C0.766666 1.45 0.952594 0.979333 1.32445 0.588C1.69567 0.196 2.14215 0 2.66389 0H17.8417C18.3634 0 18.8102 0.196 19.1821 0.588C19.5533 0.979333 19.7389 1.45 19.7389 2V14C19.7389 14.55 19.5533 15.021 19.1821 15.413C18.8102 15.8043 18.3634 16 17.8417 16H2.66389ZM10.2528 9L2.66389 4V14H17.8417V4L10.2528 9ZM10.2528 7L17.8417 2H2.66389L10.2528 7ZM2.66389 4V2V14V4Z" fill="#CCCCC6"/></svg></span>
                  <input type="email" placeholder='Enter your email id' className=' text-[#4C4C4A] w-full text-[16px] outline-none leading-[19.36px] ml-[17.16px] placeholder:text-[#B2B2AE]' required/>
                </div>
              </div>
             

              {/* Terms & Conditions */}
              <div class="form-check form-switch">
              <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top checked:bg-primary-400 bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckDefault" required/>
                <label class="form-check-label inline-block text-[#B2B2AE]  text-[16px] leading-[19.8px] ml-[10px]" form="flexSwitchCheckDefault"><p>Remember me </p></label>
              </div>    
              
              {/* Create Account */}
              <div className="mt-[42px]">
                <button className='bg-primary-400 shadow-lg shadow-primary-400/50 text-white text-[18px] p-[13px] leading-[21.78px] rounded-full w-full font hover:bg-[#FA5916] '> <NavLink to="/RequestOtp">Request OTP</NavLink></button>
              </div>
              
                {/*Login with otp*/}
                <div className="mt-[42px]">
                <button className='bg-white-400 shadow-lg shadow-primary-400/50 text-[#F3733D] text-[18px] p-[13px] leading-[21.78px] rounded-full w-full font border-solid border-2 border-[#F3733D]'><NavLink to="/Login">Login with Password</NavLink></button>
              </div>

              {/* Or Divider */}
              <div class="relative flex py-5 items-center">
                <div class="flex-grow border-t border-[#B2B2AE]"></div>
                <span class="flex-shrink mx-[13px] text-[#B2B2AE]">Or</span>
                <div class="flex-grow border-t border-[#B2B2AE]"></div>
            </div>

            {/* Sign Up with  */}
            <div className="flex justify-center items-center space-x-[18px]">
              <button className="flex items-center sign-up-form-input-shadow p-[10px] rounded-full">
                <img src="/assets/google.svg" className='mr-[10px]'/>
                <span className='mr-[13px] text-[14px] '>Login with Google</span>
              </button>
              <button className="flex items-center justify-center sign-up-form-input-shadow p-[10px] rounded-full">
                <img src="/assets/facebook.svg" className='mr-[10px]'/>
                <span className='text-[14px] mr-[13px] text-[#7F7F7C]'>Login with Facebook</span>
              </button>
            </div>            
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
