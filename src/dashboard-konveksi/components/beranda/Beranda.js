import React, { useContext } from "react"
import { FiAward, FiBox, FiCheckSquare, FiChevronsUp, FiGift, FiShoppingBag } from "react-icons/fi"
import { UserContext } from "../../../context/UserContext"

export function Beranda() {

    const {user, setUser} = useContext(UserContext)

    return (
        <div className="flex-1">
            <div className="grid grid-cols-4 mt-5">

                <div className="bg-indigo-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-lg shadow-lg w-52">
                    <div className="flex justify-center">
                        <div className="flex justify-center p-4 bg-indigo-400 ring-2 ring-indigo-300 rounded-md shadow-xl w-32" >
                            <FiGift className="text-2xl text-white" />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-white font-semibold" >Semua Order</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-200">20,100 Files</p>
                            <p className="text-white" >6.5GB</p>
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-lg shadow-lg w-52">
                    <div className="flex justify-center">
                        <div className="flex justify-center p-4 bg-indigo-400 ring-2 ring-indigo-300 rounded-md shadow-xl w-32" >
                            <FiCheckSquare className="text-2xl text-white" />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-white font-semibold" >Perlu Persetujuan</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-200">20,100 Files</p>
                            <p className="text-white" >6.5GB</p>
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-lg shadow-lg w-52">
                    <div className="flex justify-center">
                        <div className="flex justify-center p-4 bg-indigo-400 ring-2 ring-indigo-300 rounded-md shadow-xl w-32" >
                            <FiBox className="text-2xl text-white" />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-white font-semibold" >Perlu Diambil</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-200">20,100 Files</p>
                            <p className="text-white" >6.5GB</p>
                        </div>
                    </div>
                </div>

                <div className="bg-indigo-600 pt-1 px-2 bg-gradient-to-b from-indigo-400 to-indigo-500 rounded-lg shadow-lg w-52">
                    <div className="flex justify-center">
                        <div className="flex justify-center p-4 bg-indigo-400 ring-2 ring-indigo-300 rounded-md shadow-xl w-32" >
                            <FiAward className="text-2xl text-white" />
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-white font-semibold" >Dalam Pengerjaan</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-200">20,100 Files</p>
                            <p className="text-white" >6.5GB</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="card bg-white border-indigo-400 shadow-lg mt-10 rounded-lg">
                <div className="card-body flex flex-row">

                    <div className="img-wrapper w-48 h-56 flex justify-center items-center">
                        <img src="/images/ilustration-hello.png" className="w-full" alt="img title" />
                    </div>

                    <div className="py-5 ml-10">
                        <h1 className="text-xl font-bold">Halo selamat datang, <span>Alfian Prisma Yopiangga!</span></h1>
                        <p className="text-xs">Lakukan yang terbaik hari ini, good luck</p>

                        <ul className="mt-4">
                            <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> 11 permintaan pengerjaan dari penjahit</li>
                            <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> 15 Jahitan dalam pengerjaan</li>
                            <li className="text-sm font-light"><i className="fad fa-check-double mr-2"></i> 4 Jahitan Perlu di ambil penjahit</li>
                        </ul>
                        <button className="p-2 pl-5 pr-5 mr-2 mt-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">Tambahkan Orderan</button>

                    </div>

                </div>
            </div>

            <div className="block w-full overflow-x-auto mt-10">
                <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                        <tr>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Page name
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Visitors
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Unique users
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Bounce rate
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                /argon/
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                4,569
                            </td>
                            <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                340
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                46,53%
                            </td>
                        </tr>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                /argon/index.html
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                3,985
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                319
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                                46,53%
                            </td>
                        </tr>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                /argon/charts.html
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                3,513
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                294
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                                36,49%
                            </td>
                        </tr>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                /argon/tables.html
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                2,050
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                147
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                                50,87%
                            </td>
                        </tr>
                        <tr>
                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                                /argon/profile.html
                            </th>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                1,795
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                190
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                                46,53%
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}