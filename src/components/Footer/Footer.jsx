import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

const Footer = () => {
  return (
    <section className="relative overflow-hidden py-10 bg-secondary">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-self-auto">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="150px" />
                            </div>
                            <div className='mt-8'>
                                <p className="text-sm text-gray-600">
                                    &copy; Copyright 2024. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Credits
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="https://appwrite.io/" target="_blank"
                                    >
                                        Appwrite
                                    </Link>
                                </li>
                                
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="https://github.com/toindranildutta/Rooms-in-Bankura" target="_blank"
                                    >
                                        Helping Hands
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="https://github.com/toindranildutta/Rooms-in-Bankura" target="_blank"
                                    >
                                        Dev Team
                                    </Link>
                                </li>
                                
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="https://github.com/toindranildutta/Rooms-in-Bankura" target="_blank"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="https://github.com/toindranildutta/Rooms-in-Bankura" target="_blank"
                                    >
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                                <li className="mb-4">
                                    <Link
                                        className=" text-base font-medium text-gray-900 hover:text-gray-700"
                                        to="https://github.com/toindranildutta/Rooms-in-Bankura" target="_blank"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer