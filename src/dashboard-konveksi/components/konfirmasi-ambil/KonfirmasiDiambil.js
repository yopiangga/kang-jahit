import React from 'react';
import StarRatings from 'react-star-ratings';

export function KonfirmasiDiambil() {
    return (
        <div>
            <div className="grid grid-cols-2 mt-5">
                <div className="left mr-5">
                    {
                        [...Array(5)].map(function (el, idx) {
                            return (
                                <div className="bg-white shadow-lg border-gray-100 max-h-64 border-none sm:rounded-lg p-8 flex space-x-8 mb-5">
                                    <div className="h-64 overflow-visible w-1/2">
                                        <img className="rounded-lg shadow-lg w-full" src="images/news-11.jpg" alt="" />
                                    </div>
                                    <div className="flex flex-col w-1/2 space-y-4">
                                        <div className="flex justify-between items-start">
                                            <h2 className="text-xl font-bold max-h-16">Sweet Tooth: El niño ciervo</h2>
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-400 max-h-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, inventore?</div>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex text-xl font-bold text-a">Rp 83.900</div>
                                            <button className="p-2 pl-5 pr-5 mr-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">Detail</button>

                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

                <div className="right ml-5">
                    <div className="relative bg-white flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-20 pb-10">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full px-4 flex justify-center">
                                    <div className="relative w-96">
                                        <img alt="photo-order" src="images/news-11.jpg" className="shadow-xl rounded-lg align-middle border-none absolute -top-20 max-h-54" />
                                    </div>
                                </div>
                                <div className="bg-white border border-gray-100 rounded-lg p-4 mt-40">
                                    <div className="flex-none sm:flex">
                                        <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                                            <img src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg" alt="aji" className=" w-32 h-32 object-cover rounded-2xl" />

                                        </div>
                                        <div className="flex-auto sm:ml-5 justify-evenly">
                                            <div className="flex items-center justify-between sm:mt-2">
                                                <div className="flex items-center">
                                                    <div className="flex flex-col">
                                                        <div className="w-full flex-none text-lg text-gray-900 font-bold leading-none">Aji</div>
                                                        <div className="flex-auto text-gray-800 my-1">
                                                            <span className="mr-3 ">UI/UX Designer</span><span className="mr-3 border-r border-gray-600  max-h-0"></span><span>Cochin, IND</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-row items-center">
                                                <StarRatings numberOfStars={5} rating={3.5} starRatedColor={"orange"} starDimension={'20px'} starSpacing={'1px'} starEmptyColor={'rgb(109, 122, 130'} />
                                            </div>

                                            <div className="flex pt-2 text-sm text-gray-400">
                                                <button className="flex-no-shrink bg-indigo-400 hover:bg-indigo-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-indigo-300 hover:border-indigo-500 text-white rounded-full transition ease-in duration-300 mr-2">LIHAT PROFILE</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-5">
                                <h3 className="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    Sweet Tooth: El niño ciervo
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    Los Angeles, California
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                    Solution Manager - Creative Tim Officer
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                    University of Computer Science
                                </div>
                            </div>
                            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                            An artist of considerable range, Jenna the name taken
                                            by Melbourne-raised, Brooklyn-based Nick Murphy
                                            writes, performs and records all of his own music,
                                            giving it a warm, intimate feel with a solid groove
                                            structure. An artist of considerable range.
                                        </p>

                                    </div>
                                </div>
                            </div>

                            <div className="border-t border-blueGray-200 text-center">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-9/12 px-4">
                                        <button className="p-2 pl-5 pr-5 mr-2 mt-8 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">Konfirmasi Diambil</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}