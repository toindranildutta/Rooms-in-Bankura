import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import authService from '../appwrite/auth';
import { Link } from 'react-router-dom';

const Verify = () => {
    const [isVerified, setIsVerified] = useState(false)

    const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('userId');
  const secret = urlParams.get('secret');

  const userData = useSelector((state) => state.auth.userData);

  console.log(userId)

  useEffect(() => {
    if(!userData?.emailVerification){
      authService.account.updateVerification(userId, secret).then(() => {
      setIsVerified(true);
    }).catch((error) => {
      console.log("Verification failed :: " + error)
    });
  }},[])

  return (
    isVerified ? (<div className="w-full py-8 my-4 text-center bg-green-400">
        <div className='text-white text-3xl font-semibold'>Verification Successful</div>
        <Link to='/' className='text-blue text-lg underline font-medium'>Go To Home</Link>
        </div>
        
    ) : (
        <div className="w-full py-8 my-4 text-center bg-red-400">
        <div className='text-white text-3xl font-semibold'>Not Verified</div>
        <Link to='/' className='text-blue text-lg underline font-medium'>Go To Home</Link>
        </div>
    )
  )
}

export default Verify