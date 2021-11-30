import React from "react";
import { FiSend } from "react-icons/fi";
import tabs from './../../../assets/images/tabs-image-01.jpg'
import Tilt from 'react-tilt'

export function FiturSection() {
    return (
        <div className="w-full flex justify-center pt-0 pb-14">
            <div className="content w-11/12">
                <h1 className="text-4xl text-center text-indigo-50 w-3/5 mx-auto font-bold mt-10 mb-8">Fitur - fitur unggulan yang kami berikan pada pengguna</h1>
                <h4 className="text-lg text-center text-indigo-200 w-3/5 mx-auto">Kami menyediakan banyak hal untuk pengguna agar pengguna dapat memaksimalkan layanan yang kami berikan untuk meningkatkan banyak hal.</h4>

                <div className="navigation-pane flex justify-center mt-10">
                    <div className="group w-3/4 flex justify-center">
                        <button className="bg-white bg-opacity-5 rounded-full flex items-center py-2 px-4 mx-2" data-aos={"fade-left"}>
                            <FiSend className="text-indigo-600" />
                            <span className="ml-3 text-indigo-200 opacity-100" >Auth with Google</span>
                        </button>
                        <button className="bg-white bg-opacity-5 rounded-full flex items-center py-2 px-4 mx-2">
                            <FiSend className="text-indigo-600" />
                            <span className="ml-3 text-indigo-200 opacity-50">GPS Location</span>
                        </button>
                        <button className="bg-white bg-opacity-5 rounded-full flex items-center py-2 px-4 mx-2">
                            <FiSend className="text-indigo-600" />
                            <span className="ml-3 text-indigo-200 opacity-50">Realtime Update</span>
                        </button>
                        <button className="bg-white bg-opacity-5 rounded-full flex items-center py-2 px-4 mx-2" data-aos={"fade-right"}>
                            <FiSend className="text-indigo-600" />
                            <span className="ml-3 text-indigo-200 opacity-50">Fastest Server</span>
                        </button>
                    </div>
                </div>

                <div className="detail-fitur flex justify-center mt-10 mb-16">
                    <div className="group w-4/5 flex justify-center">
                        <div className="card w-full flex bg-gray-700 bg-opacity-20">
                            <div className="text w-1/2 px-8 flex items-center">
                                <div className="box">
                                    <h3 className="text-2xl font-bold mb-3">Autentikasi dengan akun Google</h3>
                                    <p className="text-lg text-indigo-200 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit explicabo in quo eveniet dignissimos architecto tenetur. Laborum fugiat dolore voluptatibus veniam vero maxime harum cupiditate?</p>
                                    <button className="p-2 pl-5 pr-5 mr-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">Pelajari Lebih Lanjut</button>
                                </div>
                            </div>
                            <div className="image w-1/2">
                                <Tilt className="Tilt" options={{ max: 25 }}>
                                    <div className="Tilt-inner">
                                        <img src={tabs} className="w-full" alt="" />
                                    </div>
                                </Tilt>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-indigo-200 opacity-30" />

            </div>
        </div>
    )
}