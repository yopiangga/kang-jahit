import React, { useContext, useEffect, useState } from "react"
import { FiAward, FiBox, FiCheckSquare, FiChevronsUp, FiGift, FiShoppingBag } from "react-icons/fi"
import { UserContext } from "../../../context/UserContext"
import halloImage from '../../../assets/images/ilustration-hello.png'
import getOrders from "../../../helper/api/order/getOrders"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import axios from "axios"

export function Beranda() {

    const { url, setUrl, user, setUser, menuActive, setMenuActive } = useContext(UserContext)

    const [orders, setOrders] = useState();
    const [konveksi, setKonveksi] = useState();
    const [penjahit, setPenjahit] = useState();

    useEffect(() => {
        setMenuActive("beranda");

        axios.get(`${url.api}/count-all-order`).then(res => {
            setOrders(res.data)
        }).catch(err => {})

        axios.get(`${url.api}/count-konveksi`).then(res => {
            setKonveksi(res.data)
        }).catch(err => {})

        axios.get(`${url.api}/count-penjahit`).then(res => {
            setPenjahit(res.data)
        }).catch(err => {})

    }, [])

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
                                {orders} Orderan</p>
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
                        <p className="text-white font-semibold" >Pemilik Konveksi</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-200">{konveksi} Konveksi</p>
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
                        <p className="text-white font-semibold" >Pekerja Penjahit</p>
                        <div className="flex justify-between mt-2">
                            <p className="text-gray-200">{penjahit} Penjahit</p>
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
                        <p className="text-xs mt-5 w-3/4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum dignissimos id, sequi, dicta deleniti eum, ad at vitae corrupti praesentium a voluptatem saepe quidem maiores unde libero provident excepturi aliquam!</p>
                    </div>

                </div>
            </div>


        </div>
    )
}