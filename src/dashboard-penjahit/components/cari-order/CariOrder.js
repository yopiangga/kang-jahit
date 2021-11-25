import React, { useContext, useEffect, useState } from "react";
import { FiDollarSign } from "react-icons/fi";
import { useQuery } from "react-query";
import { UserContext } from "../../../context/UserContext";
import getOrders from "../../../helper/api/order/getOrders";
import StarRatings from 'react-star-ratings';
import axios from 'axios';

export function CariOrder() {
    const { url, setUrl, user, setUser, menuActive, setMenuActive } =
        useContext(UserContext);
    const [orders, setOrders] = useState();
    const [idOrder, setIdOrder] = useState(-1);

    useEffect(() => {
        setMenuActive("cari-order");
    }, []);

    const { isLoading: ordersIsLoading } = useQuery('orders', async () => {
        const response = await getOrders(`${url.api}order`);

        return response;
    }, {
        onSuccess: (data) => {
            setOrders(data.data);
        },
    })

    const handleTawar = () => {
        axios
            .put(`${url.api}order/${orders[idOrder]?._id}`, {
                id_konveksi: orders[idOrder]?.id_konveksi,
                id_penjahit: "",
                status: 1,
                biaya: orders[idOrder]?.biaya,
                nama_orders: orders[idOrder]?.judul,
                deskripsi: orders[idOrder]?.deskripsi,
                gambar: orders[idOrder]?.gambar,
                batas_selesai: orders[idOrder]?.batas_selesai,
                gps: {
                    latitude: orders[idOrder]?.gps.latitude,
                    longitude: orders[idOrder]?.gps.longitude,
                },
                apply_order: user.uid,
                rating: orders[idOrder]?.rating,
            }, {headers: {"Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Accept: "application/json",}})
            .then(function (response) {
                console.log(response);
                // setModalInformationLittle({
                //     status: true,
                //     description: `Orderan "${order.judul}" berhasil di tambahkan`,
                // });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function CardOrder(props) {
        return (
            <div key={props.idx} className="bg-white shadow-lg border-gray-100 max-h-64 w-11/12 border-none sm:rounded-lg p-8 flex space-x-8 mb-5">
                <div className="h-64 overflow-visible w-1/2">
                    <img
                        className="rounded-lg shadow-lg w-full"
                        src={props.gambar}
                        alt=""
                    />
                </div>
                <div className="flex flex-col w-1/2 space-y-4">
                    <div className="flex justify-between items-start">
                        <h2 className="text-xl font-bold max-h-16">
                            {props.nama_order}
                        </h2>
                    </div>
                    <div>
                        <div className="text-sm text-gray-400 max-h-16 overflow-hidden">
                            {props.deskripsi}
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex text-xl font-bold text-a">Rp {props.biaya}</div>
                        <button onClick={() => props.handleDetail(props.idx)} className="p-2 pl-5 pr-5 mr-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">
                            Detail
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className={idOrder >= 0 ? "grid grid-cols-2 mt-5" : "grid grid-cols-1 mt-5"}>
                <div className={idOrder >= 0 ? "" : "grid grid-cols-2"}>
                    {orders?.map(function (el, idx) {
                        return (
                            <CardOrder
                                nama_order={el.nama_order}
                                deskripsi={el.deskripsi}
                                gambar={el.gambar}
                                biaya={el.biaya}
                                idx={idx}
                                handleDetail={(idArr) => setIdOrder(idArr)}
                            />
                        );
                    })}
                </div>

                {
                    idOrder >= 0 ?
                        <div className="right ml-5">
                            <div className="relative bg-white flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg mt-20 pb-10">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full px-4 flex justify-center">
                                            <div className="relative w-96">
                                                <img
                                                    alt="photo-order"
                                                    src={orders[idOrder]?.gambar}
                                                    className="shadow-xl rounded-lg align-middle border-none absolute -top-20 max-h-54"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full px-4 text-center mt-32">
                                            <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        22
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">
                                                        Pengajuan Masuk
                                                    </span>
                                                </div>
                                                <div className="mr-4 p-3 text-center">
                                                    <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                        10
                                                    </span>
                                                    <span className="text-sm text-blueGray-400">
                                                        Pengajuan Ditolak
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-5">
                                        <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                                            {orders[idOrder]?.nama_order}
                                        </h3>
                                        <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                            <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                            {orders[idOrder]?.gps?.latitude},
                                            {orders[idOrder]?.gps?.longitude}
                                        </div>
                                        <div className="mb-2 text-blueGray-600 mt-10">
                                            <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                            {orders[idOrder]?.batas_selesai}
                                        </div>
                                        <div className="mb-2 text-blueGray-600">
                                            <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                                            Rp. {orders[idOrder]?.biaya}
                                        </div>
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12 px-4">
                                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                    {orders[idOrder]?.deskripsi}
                                                </p>
                                            </div>
                                        </div>
                                        <button onClick={handleTawar} className="py-2 w-48 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">
                                            Tawarkan Jasa
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        ""
                }
            </div>
        </div>
    );
}
