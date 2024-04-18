
import React from 'react'
import { Link } from 'react-router-dom'


const NotFoundPage = () => {
  
  return (
    <div className="mx-auto w-full max-w-7xl px-2 md:px-4">
     
      <div className="flex items-center justify-center px-2  md:px-0">
        <div className="mt-24 lg:flex lg:items-center lg:space-x-10">
          <img
            src="https://illustrations.popsy.co/white/resistance-band.svg"
            alt="question-mark"
            className="h-[450px] w-auto"
          />
          <div>
            <p className="mt-4 text-sm font-semibold text-black">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              We can&apos;t find that page
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <div className="mt-6 flex items-center space-x-3">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              > <Link to="/">Go back</Link>               
              </button>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              > <Link to="/">Contact us</Link>
               
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
      
    </div>
  )
}

export default NotFoundPage




// import React from 'react'
// import { Link } from 'react-router-dom'

// const NotFoundPage = () => {
//   return (
//     <>
//     <br />
//     <br />
//     <br />
//     <div class="text-center">
//     <h1 class="mb-4 text-6xl font-semibold text-red-500">404</h1>
//     <p class="mb-4 text-lg text-gray-600">Oops! Looks like you're lost.</p>
//     <div class="animate-bounce">
//       <svg class="mx-auto h-16 w-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//         <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
//       </svg>
//     </div>
//     <p class="mt-4 text-gray-600">Let's get you back <Link to="/" class="text-blue-500">home</Link>.</p>
//   </div>
//     </>
//   )
// }

// export default NotFoundPage



