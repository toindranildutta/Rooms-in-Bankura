import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import authService from '../appwrite/auth';
import { useNavigate } from 'react-router-dom';

const Verify = () => {
  const [isVerified, setIsVerified] = useState(false)

  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const secret = urlParams.get('secret');
  const userData = useSelector((state) => state.auth.userData);

  const navigate = useNavigate();
  console.log(userData)
  console.log(userId)
  console.log(secret)

  useEffect(() => {
    if (!userData?.emailVerification) {
      authService.account.updateVerification(userId, secret).then(() => {
        setIsVerified(true);
      }).catch((error) => {
        console.log("Verification failed :: " + error)
      });
    }
  }, [])

  const handleNavigate = () => {
    if(isVerified)
      navigate("/")
  }

  return (
    isVerified ? (<div className="w-full py-8 my-4 text-center bg-green-400">
      <div className='text-white text-3xl font-semibold'>Verification Successful</div>
      <button className='text-blue text-lg underline font-medium' onClick={handleNavigate}>Go to Home</button>
    </div>

    ) : (
      <div className="w-full py-8 my-4 text-center bg-red-400">
        <div className='text-white text-3xl font-semibold'>Not Verified</div>
        <button className='text-blue text-lg underline font-medium' onClick={handleNavigate}>Go to Home</button>
      </div>
    )
  )
}

export default Verify