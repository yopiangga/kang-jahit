import React from "react";
import { FiAward } from "react-icons/fi";

export function LangkahSection(){

    return(
        <div className="w-full flex justify-center pt-0 pb-14">
            <div className="content w-11/12">
                <h1 className="text-4xl text-center text-indigo-50 w-3/5 mx-auto font-bold mt-10 mb-8">Built exclusively for you</h1>
                <h4 className="text-lg text-center text-indigo-200 w-3/5 mx-auto">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</h4>
            
                <div className="group relative flex justify-center mt-16 mb-16">
                    <div className="absolute flex top-8">
                        <hr className="w-64 border-dotted opacity-30 mr-14" />
                        <hr className="w-64 border-dotted opacity-30 ml-14" />
                    </div>
                    <div className="card-fitur flex flex-col items-center mx-5 w-80">
                        <div className="circle w-16 h-16 flex justify-center items-center rounded-full bg-indigo-600 mb-4">
                            <FiAward className="text-lg"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2"><span className="text-indigo-200">1. </span>Acquisition</h2>
                        <h4 className="text-indigo-200 text-lg text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
                    </div>
                    <div className="card-fitur flex flex-col items-center mx-5 w-80">
                        <div className="circle w-16 h-16 flex justify-center items-center rounded-full bg-indigo-600 mb-4">
                            <FiAward className="text-lg"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2"><span className="text-indigo-200">1. </span>Acquisition</h2>
                        <h4 className="text-indigo-200 text-lg text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
                    </div>
                    <div className="card-fitur flex flex-col items-center mx-5 w-80">
                        <div className="circle w-16 h-16 flex justify-center items-center rounded-full bg-indigo-600 mb-4">
                            <FiAward className="text-lg"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2"><span className="text-indigo-200">1. </span>Acquisition</h2>
                        <h4 className="text-indigo-200 text-lg text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h4>
                    </div>
                </div>

                <hr className="border-indigo-200 opacity-30" />

            </div>
        </div>
    )
}