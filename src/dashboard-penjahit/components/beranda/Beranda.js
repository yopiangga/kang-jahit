import React, { useContext, useEffect, useState } from "react"
import { FiAward, FiBox, FiCheckSquare, FiChevronsUp, FiGift, FiShoppingBag } from "react-icons/fi"
import { UserContext } from "../../../context/UserContext"
import halloImage from '../../../assets/images/ilustration-hello.png'
import getOrders from "../../../helper/api/order/getOrders"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

export function Beranda() {

    const { url, setUrl, user, setUser, menuActive, setMenuActive } = useContext(UserContext)

    const [opd, setOpd] = useState();
    const [odp, setOdp] = useState();
    const [os, setOs] = useState();
    const [ok, setOk] = useState();

    useEffect(() => {
        setMenuActive("beranda");
    }, [])

    const { opdIsLoading: opdIsLoading } = useQuery(
        "opd",
        async () => {
            const response = await getOrders(`${url?.api}order/penjahit/${user.uid}/2`);
            return response;
        },
        {
            onSuccess: (data) => {
                if (data?.data?.length > 0) {
                    setOpd(data.data);
                }
            },
        }
    );

    const { odpIsLoading: odpIsLoading } = useQuery(
        "odp",
        async () => {
            const response = await getOrders(`${url.api}order/penjahit/${user.uid}/3`);
            return response;
        },
        {
            onSuccess: (data) => {
                if (data?.data?.length > 0) {
                    setOdp(data.data);
                }
            },
        }
    );

    const { osIsLoading: osIsLoading } = useQuery(
        "os",
        async () => {
            const response = await getOrders(`${url.api}order/penjahit/${user.uid}/4`);
            return response;
        },
        {
            onSuccess: (data) => {
                if (data?.data?.length > 0) {
                    setOs(data.data);
                }
            },
        }
    );

    const { okIsLoading: okIsLoading } = useQuery(
        "ok",
        async () => {
            const response = await getOrders(`${url.api}order/penjahit/${user.uid}`);
            return response;
        },
        {
            onSuccess: (data) => {
                if (data?.data?.length > 0) {
                    setOk(data.data);
                }
            },
        }
    );

        // console.log(ok)

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
                            <p className="text-gray-200">
                                {
                                    ok?.length > 0 ? ok.length : 0 
                                } Orderan</p>
                            <FiGift className="text-2xl text-white" />
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
                        <p className="text-white font-semibold" >Perlu Diambil</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-200">{opd?.length > 0 ? opd.length : 0} Orderan</p>
                            <FiGift className="text-2xl text-white" />
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
                        <p className="text-white font-semibold" >Dalam Pengerjaan</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-200">{odp?.length > 0 ? odp.length : 0} Orderan</p>
                            <FiGift className="text-2xl text-white" />
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
                        <p className="text-white font-semibold" >Selesai</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-200">{os?.length > 0 ? os.length : 0} Orderan</p>
                            <FiGift className="text-2xl text-white" />
                        </div>
                    </div>
                </div>

            </div>

            <div className="card bg-white border-indigo-400 shadow-lg mt-10 rounded-lg">
                <div className="card-body flex flex-row">

                    <div className="img-wrapper w-48 h-56 flex justify-center items-center">
                        <img src={halloImage} className="w-full" alt="img title" />
                    </div>

                    <div className="py-5 ml-10">
                        <h1 className="text-xl font-bold">Halo selamat datang, <span>{user?.nama}!</span></h1>
                        <p className="text-xs">Lakukan yang terbaik hari ini, good luck</p>

                        <ul className="mt-4 mb-5">
                            <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> {opd?.length > 0 ? opd.length : 0} Orderan perlu diambil penjahit</li>
                            <li className="text-sm font-light"><i className="fad fa-check-double mr-2 mb-2"></i> {odp?.length > 0 ? odp.length : 0} Jahitan dalam pengerjaan</li>
                            <li className="text-sm font-light"><i className="fad fa-check-double mr-2"></i> {os?.length > 0 ? os.length : 0} Jahitan telah selesai</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="block w-full overflow-x-auto mt-10">
                <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                        <tr>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Nama Order
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Batas Selesai
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Biaya
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Status
                            </th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            ok?.map(function(el, idx) {
                                return (
                                    <tr key={idx}>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {el.nama_order}
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                            {el.batas_selesai}
                                        </td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            Rp {el.biaya}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {el.status == 1 ? "Baru Dibuat" : ""}
                                            {el.status == 2 ? "Perlu Diambil Penjahit" : ""}
                                            {el.status == 3 ? "Dalam Pengerjaan" : ""}
                                            {el.status == 4 ? "Selesai" : ""}
                                        </td>
                                        
                                    </tr>
                                )
                            })
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}