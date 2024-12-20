import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <aside className="relative flex flex-col md:flex-row items-center md:items-start justify-between text-black rounded-lg py-10 sm:py-16">
                {/* Left Section: Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                    <img
                        className="w-72 sm:w-96 md:w-full max-w-md object-contain"
                        src="https://i.ibb.co/5BCcDYB/Remote2.png"
                        alt="Illustration"
                    />
                </div>

                {/* Right Section: Text and Button */}
                <div className="w-full md:w-1/2 mt-10 md:mt-0 text-center md:text-right md:pl-10">
                    <h2 className="text-3xl sm:text-3xl md:text-3xl font-bold leading-tight">
                        Download Now
                        <br />
                        <span className="text-2xl sm:text-3xl md:text-4xl">Web Development</span>
                    </h2>

                    <div className="mt-6">
                        <Link
                            className="inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base font-medium text-white bg-orange-700 rounded-lg hover:opacity-90"
                            to="/"
                        >
                            <svg
                                fill="white"
                                width="20"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                className="mr-2"
                            >
                                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                            </svg>
                            Download now
                        </Link>
                    </div>
                </div>
            </aside>
            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

        </div>
    );
}


           
           
