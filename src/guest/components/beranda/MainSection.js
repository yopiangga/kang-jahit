import React from "react";
import { FiPlay } from "react-icons/fi";
import hero from './../../../assets/images/hero-image-01.jpg'

export function MainSection(){

    return(
        <div className="w-full flex justify-center pt-20 pb-14">
            <div className="content w-11/12">
                <h1 className="text-5xl text-center text-indigo-50 w-3/5 mx-auto font-bold mt-10 mb-8">Landing template for startups</h1>
                <h4 className="text-lg text-center lg:text-indigo-50 w-3/5 sm:text-yellow-400 mx-auto">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</h4>
                <div className="action flex justify-center mt-8">
                    <button className="p-2 pl-5 pr-5 mx-1 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">Mulai Sekarang</button>
                    <button className="p-2 pl-5 pr-5 mx-1 bg-transparent border-2 border-indigo-500 text-indigo-500 text-md transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">Pelajari Lebih Lanjut</button>
                </div>
                <div className="hero mt-12 flex justify-center items-center relative">
                    <div className="circle rounded-full w-20 h-20 bg-indigo-50 flex justify-center items-center transparent-50 absolute mx-auto cursor-pointer hover:bg-white">
                        <FiPlay className="text-indigo-600 text-xl" />
                    </div>
                    {/* <img src="./assets/images/hero-image-01.jpg" className="w-10/12" alt="aa" /> */}
                    <img src={hero} className="w-10/12" alt="aa" />
                </div>
            </div>
        </div>
    )
}