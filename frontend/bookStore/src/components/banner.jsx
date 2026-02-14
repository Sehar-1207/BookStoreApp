import React from 'react'
import bannerImg from '/images/illustration.png'

function banners() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-2 flex flex-col md:flex-row items-center gap-5
      bg-white dark:bg-gray-900'>

        <div className='w-full md:w-1/2 mt-8 md:mt-18 px-4 order-2 md:order-1'>
          <div className="space-y-6">

            <h1 className='text-4xl font-bold text-black dark:text-white'>
              A new day A new beginning. Lets learn something
              <span className='text-orange-500'> new today!!! </span>
            </h1>

            <p className='text-xl text-gray-700 dark:text-gray-300'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cum, modi rerum maxime unde, eveniet enim earum sequi, alias et corporis animi!
            </p>

            <label className="input validator flex items-center gap-2 border p-3 rounded-md
            bg-white dark:bg-gray-800
            border-gray-300 dark:border-gray-600">

              <svg
                className="h-[1em] opacity-50 text-black dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>

              <input
                type="email"
                placeholder="mail@site.com"
                className="grow outline-none bg-transparent
                text-black dark:text-white"
                required
              />
            </label>

            <div className="validator-hint hidden outline-none text-red-500">
              Enter valid email address
            </div>

          </div>

          <button className="btn btn-secondary bg-orange-500 text-white px-4 py-2 font-bold text-lg rounded-md">
            Email
          </button>
        </div>

        <div className='w-full md:w-1/2 mt-8 md:mt-18 order-1 md:order-2 flex justify-center'>
          <img
            className="w-full md:h-98 h-75 object-contain"
            src={bannerImg}
            alt="Image of books"
          />
        </div>

      </div>
    </>
  )
}

export default banners