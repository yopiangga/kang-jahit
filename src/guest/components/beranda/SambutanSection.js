import React from "react"
import { FiCheck } from "react-icons/fi"
import team from './../../../assets/images/team-member-04.jpg'

export function SambutanSection() {

    return (
        <div className="w-full flex flex-col items-center pt-0 pb-16">
            <div className="content w-11/12 flex mb-16">
                <div className="left w-1/2 pr-5">
                    <h3 className="fs text-indigo-600 text-2xl mb-3 mt-10">Lighting fast workflow</h3>
                    <h2 className="text-indigo-200 text-3xl font-bold mb-3">Say hello to research data</h2>
                    <p className="text-lg">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                    <div className="group mt-5 flex flex-wrap">
                        <div className="list flex items-center mr-5 mb-3">
                            <FiCheck className="text-green-600 text-xl" />
                            <h4 className="text-lg ml-3 text-indigo-200">Premium Statistic</h4>
                        </div>
                        <div className="list flex items-center mr-5 mb-3">
                            <FiCheck className="text-green-600 text-xl" />
                            <h4 className="text-lg ml-3 text-indigo-200">Premium Statistic</h4>
                        </div>
                        <div className="list flex items-center mr-5 mb-3">
                            <FiCheck className="text-green-600 text-xl" />
                            <h4 className="text-lg ml-3 text-indigo-200">Premium Statistic</h4>
                        </div>
                        <div className="list flex items-center mr-5 mb-3">
                            <FiCheck className="text-green-600 text-xl" />
                            <h4 className="text-lg ml-3 text-indigo-200">Premium Statistic</h4>
                        </div>
                        <div className="list flex items-center mr-5 mb-3">
                            <FiCheck className="text-green-600 text-xl" />
                            <h4 className="text-lg ml-3 text-indigo-200">Premium Statistic</h4>
                        </div>
                    </div>
                    <div className="group mt-5 w-11/12">
                        <div className="list-founder flex">
                            <div className="image w-20">
                                <div className="circle rounded-full overflow-hidden w-14">
                                    <img src={team} alt="" />
                                </div>
                            </div>
                            <div className="w-10/12">
                                <p className="text-indigo-200 italic mb-3">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam, cumque quidem quo neque veritatis quam!"</p>
                                <h4 className="text-lg">— Anastasia Dan - <span className="text-indigo-600">UX Board</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="right w-1/2 relative flex items-center justify-center">
                    <div className="circle-animation-1 absolute bg-indigo-600 bg-opacity-80 rounded-full z-30"></div>
                    <div className="circle-animation-2 absolute bg-indigo-600 bg-opacity-60 rounded-full z-20"></div>
                    <div className="circle-animation-3 absolute bg-indigo-600 bg-opacity-40 rounded-full z-10"></div>
                    <div className="circle-animation-4 absolute bg-indigo-600 bg-opacity-20 rounded-full z-0"></div>
                    <img src="images/features-illustration.png" className="w-full" alt="" />
                </div>

            </div>
                <hr className="border-indigo-200 opacity-30 w-11/12" />
        </div>
    )
}