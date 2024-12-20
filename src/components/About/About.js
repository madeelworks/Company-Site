import React from 'react';

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
                    {/* Left Section: Image */}
                    <div className="w-full md:w-5/12 lg:w-5/12 flex justify-center md:justify-end">
                        <img
                            src="/images/startup.png"
                            alt="React development"
                            className="w-64 sm:w-72 md:w-80 lg:w-80 xl:w-96 object-contain"
                        />
                    </div>

                    {/* Right Section: Text */}
                    <div className="w-full md:w-7/12 lg:w-7/12 text-center md:text-left">
                        <h2 className="text-2xl text-gray-900 font-bold sm:text-3xl md:text-4xl leading-tight">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600 text-base sm:text-lg">
                            React development is a powerful and dynamic process driven by passionate developers who strive to create high-performance, user-friendly web applications. With its component-based architecture, React allows developers to build scalable and maintainable UIs, enabling rapid development cycles and easier debugging. Passionate developers love using React because of its flexibility and the large ecosystem of libraries and tools that enhance development workflows. Whether working on small projects or large-scale applications, React's reusable components and virtual DOM make building interactive and responsive interfaces an exciting challenge.
                        </p>
                        <p className="mt-4 text-gray-600 text-base sm:text-lg">
                            Developers working with React are constantly learning and improving, as the framework evolves with each release, offering new features and better performance. This commitment to innovation and improvement fosters a community where developers share knowledge and collaborate to create the best possible user experiences. By harnessing React's full potential, passionate developers can craft applications that are both visually appealing and functionally robust, meeting the needs of users worldwide.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
