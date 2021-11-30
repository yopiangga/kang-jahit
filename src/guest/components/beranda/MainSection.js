import React from "react";
import { FiPlay } from "react-icons/fi";
import hero from './../../../assets/images/hero-image-01.jpg'

export function MainSection() {

    return (
        <div className="w-full flex justify-center pt-20 pb-14">
            <div className="content w-11/12">
                <h1 className="text-5xl text-center text-indigo-50 w-3/5 mx-auto font-bold mt-10 mb-8">Selamat datang di Kang <span className="text-indigo-500">Jahit</span></h1>
                <h4 className="text-lg text-center lg:text-indigo-50 w-3/5 sm:text-yellow-400 mx-auto">Layanan penghubung antara tukang jahit dengan para pemilik konveksi yang tidak dapat menangani orderan jahitan yang ada.</h4>
                <div className="action flex justify-center mt-8">
                    <a href="#mulai" className="p-2 pl-5 pr-5 mx-1 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">Mulai Sekarang</a>
                    <a href="#pelajari" className="p-2 pl-5 pr-5 mx-1 bg-transparent border-2 border-indigo-500 text-indigo-500 text-md transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">Pelajari Lebih Lanjut</a>
                </div>
                <div className="hero mt-12 flex justify-center items-center relative">
                    <iframe width="948.13" height="533.33" data-aos={"fade-up"} src="https://www.youtube.com/embed/AcCmw1aFb4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}