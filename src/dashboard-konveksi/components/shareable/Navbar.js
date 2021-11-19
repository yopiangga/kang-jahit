import React from "react"
import { FiBell } from "react-icons/fi"

export function Navbar() {
    return (
        <div className="fixed md:w-full md:top-0 md:z-20 flex flex-row flex-wrap items-center bg-white h-20 w-full px-6 shadow-sm">

            <div className="flex-none w-56 flex flex-row items-center">
                {/* <img src="img/logo.png" className="w-10 flex-none" /> */}
                {/* <strong className="capitalize ml-1 flex-1">cleopatra</strong> */}
                <h2 className="text-dark text-xl font-bold">Kang <span className="text-indigo-600 font-bold">Jahit</span></h2>

                <button id="sliderBtn" className="flex-none text-right text-gray-900 hidden md:block">
                    <i className="fad fa-list-ul"></i>
                </button>
            </div>

            <button id="navbarToggle" className="hidden md:block md:fixed right-0 mr-6">
                <i className="fad fa-chevron-double-down"></i>
            </button>

            <div className="hidden xl:flex items-center space-x-5 items-center ml-auto text-dark">
                <a className="flex items-center hover:text-gray-200" href="#">
                    <FiBell className="text-xl" />
                    <span className="flex absolute -mt-5 ml-4">
                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-indigo-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500">
                        </span>
                    </span>
                </a>
                <a className="flex items-center hover:text-gray-200" href="#">
                    <span className="mr-2">Yopiangga</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

            </div>

        </div>
    )
}