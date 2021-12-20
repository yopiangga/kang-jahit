import React, { useContext, useEffect, useState } from "react"
import { FiAward, FiBox, FiCheckSquare, FiChevronsUp, FiGift, FiShoppingBag } from "react-icons/fi"
import { UserContext } from "../../../context/UserContext"
import halloImage from '../../../assets/images/ilustration-hello.png'
import getOrders from "../../../helper/api/order/getOrders"
import { useQuery } from "react-query"
import { Link } from "react-router-dom"

export function Beranda() {

    const { url, setUrl, user, setUser, menuActive, setMenuActive } = useContext(UserContext)

    useEffect(() => {
        setMenuActive("beranda");
    }, [])

    return (
        <div className="flex-1">

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