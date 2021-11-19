
import React from "react";
import { NewsCard } from "../shareable/NewsCard";

export function Subscribe() {

    return (
        <div className="w-full flex flex-col items-center">
            <div className="content w-11/12 flex flex-col">
                <div className="flex flex-col w-full md:h-56 bg-white shadow-lg overflow-hidden md:flex-row bg-indigo-600">
                    <div className="md:flex items-center justify-center md:w-1/2">
                        <div className="py-6 px-8 md:py-0">
                            <h2 className="text-2xl font-bold">Sign Up For Project Updates</h2>
                            <p className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur obcaecati odio</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 md:border-b-8 border-gray-700">
                        <form>
                            <div className="flex flex-col overflow-hidden sm:flex-row">
                                <input className="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100" type="text" name="email" placeholder="Enter your email" />
                                <button className="py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600">subscribe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}