import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/auth/sign-up', {replace: true})
  })
  return (
    <div className='text-white min-h-screen min-w-screen flex justify-center items-center'>Page Not Found</div>
  )
}
