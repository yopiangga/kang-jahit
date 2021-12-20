import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ModalInformationLittle } from "../../../component/ModalInformationLittle";
import { UserContext } from "../../../context/UserContext";
import GoogleMaps from "../../../component/GoogleMaps";
import { useParams } from "react-router";

export function EditOrder() {
    const { url, setUrl, user, setUser, menuActive, setMenuActive } =
        useContext(UserContext);
    const [order, setOrder] = useState();
    const [modalInformationLittle, setModalInformationLittle] = useState({
        status: false,
        description: "",
    });

    const { id } = useParams()

    useEffect(() => {
        setMenuActive("beranda");

        axios.get(`${url.api}/order/${id}`).then(res => {
            setOrder(res?.data[0])
            // console.log(res.data[0])
        }).catch(err => {

        })

    }, []);


    const PushData = () => {
        axios
            .put(`${url.api}order`, {
                id_konveksi: order?.id_konveksi,
                id_penjahit: order?.id_penjahit,
                status: order?.status,
                biaya: order.biaya,
                nama_order: order.judul,
                deskripsi: order.deskripsi,
                gambar: order?.gambar,
                batas_selesai: order.batas_selesai,
                kota: order.kota,
                gps: {
                    latitude: order.gps.latitude,
                    longitude: order.gps.longitude,
                },
                apply_order: order?.apply_order,
                rating: order?.rating,
            })
            .then(function (response) {
                // console.log(response);
                setModalInformationLittle({
                    status: true,
                    description: `Orderan "${order.nama_order}" berhasil di update`,
                });
            })
            .catch(function (error) {
                // console.log(error);
            });
    };

    const handleChange = (event) => {
        setOrder({
            ...order,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (
            order?.nama_order == "" ||
            order?.deskripsi == "" ||
            order?.biaya == ""
        ) {
        } else {
            PushData();
        }
    };

    const handleCloseModal = () => {
        setModalInformationLittle({
            status: false,
            title: "",
            description: "",
        });
        window.location = url.baseUrl;
    };

    return (
        <div>
            <ModalInformationLittle
                status={modalInformationLittle.status}
                title={modalInformationLittle.title}
                description={modalInformationLittle.description}
                handleClose={handleCloseModal}
            />
            <div className="w-11/12 p-12 bg-white mt-5 rounded-lg shadow-lg">
                <h1 className="text-xl font-semibold">
                    Hallo {user?.nama} 👋,{" "}
                    <span className="font-normal">
                        isi informasi orderan sebelum di posting ke halaman penjahit
                    </span>
                </h1>
                <form className="mt-6" onSubmit={handleSubmit}>
                    <div className="form grid grid-cols-1">
                        <div className="left mr-5">
                            <label
                                htmlFor="judul"
                                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                            >
                                Judul Orderan
                            </label>
                            <input
                                id="judul"
                                type="text"
                                name="nama_order"
                                value={order?.nama_order}
                                onChange={handleChange}
                                placeholder="Judul orderan"
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                required
                            />

                            <label
                                htmlFor="batas_selesai"
                                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                            >
                                Batas Selesai
                            </label>
                            <input
                                id="batas_selesai"
                                type="date"
                                name="batas_selesai"
                                value={order?.batas_selesai}
                                onChange={handleChange}
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                required
                            />

                            <label
                                htmlFor="deskripsi"
                                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                            >
                                Deskripsi
                            </label>
                            <textarea
                                id="deskripsi"
                                rows="4"
                                type="text"
                                value={order?.deskripsi}
                                onChange={handleChange}
                                name="deskripsi"
                                placeholder="Masukkan deskripsi orderan ..."
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                required
                            ></textarea>

                            <label
                                htmlFor="biaya"
                                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                            >
                                Biaya
                            </label>
                            <input
                                id="biaya"
                                type="text"
                                name="biaya"
                                value={order?.biaya}
                                onChange={handleChange}
                                placeholder="Rp. ,-"
                                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                                required
                            />

                            {/* <label
                                htmlFor="image"
                                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                            >
                                Gambar
                            </label>

                            <div className="w-full h-96 relative overflow-hidden mt-5">
                                <img
                                    src={order?.gambar}
                                    layout="fill"
                                    alt="image-preview"
                                />
                            </div> */}


                            {!!!order?.gps ? (
                                ""
                            ) : (
                                <div className="row flex w-full mt-2 mb-5">
                                    <div className="col w-full">
                                        <div className="form-group flex h-96 w-full relative">
                                            <GoogleMaps
                                                latitude={order?.gps?.latitude}
                                                longitude={order?.gps?.longitude}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="py-3 pl-5 pr-5 mr-2 mt-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300"
                    >
                        Update Orderan
                    </button>
                </form>
            </div>
        </div>
    );
}
