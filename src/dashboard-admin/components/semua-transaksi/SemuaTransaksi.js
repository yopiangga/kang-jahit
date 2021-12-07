import React, { useContext, useEffect, useState } from "react"
import { FiAward, FiBox, FiCheckSquare, FiChevronsUp, FiGift, FiShoppingBag } from "react-icons/fi"
import { UserContext } from "../../../context/UserContext"
import getOrders from "../../../helper/api/order/getOrders"
import { useQuery } from "react-query"
import deleteOrder from "../../../helper/api/order/deleteOrder"
import { ModalInformationLittle } from "../../../component/ModalInformationLittle"
import axios from "axios"

export function SemuaTransaksi() {

    const { url, setUrl, user, setUser, menuActive, setMenuActive } = useContext(UserContext)

    const [transaksi, setTransaksi] = useState();
    const [modalInformationLittle, setModalInformationLittle] = useState({
        status: false,
        description: "",
    });

    useEffect(() => {
        setMenuActive("semua-transaksi");
    }, [])

    const { transaksiIsLoading: transaksiIsLoading } = useQuery(
        "transaksi",
        async () => {
            const response = await getOrders(`${url?.api}order`);
            return response;
        },
        {
            onSuccess: (data) => {
                if (data?.data?.length > 0) {
                    setTransaksi(data.data);
                }
            },
        }
    );

    const handleDelete = (id, idx) => {
        const temp = [...transaksi];
        temp.splice(idx, 1);
        setTransaksi(temp);

        axios.delete(`${url?.api}order/${id}`).then(res => {
            setModalInformationLittle({
                status: true,
                description: `Transaksi dengan ID "${id}" berhasil di hapus`,
            });
        }).catch(err => {
            setModalInformationLittle({
                status: true,
                description: `Transaksi dengan ID "${id}" gagal di hapus`,
            });
        })
    }

    const handleCloseModal = () => {
        setModalInformationLittle({
            status: false,
            title: "",
            description: "",
        });
        // window.location = url.baseUrl;
    };

    return (
        <div className="flex-1">
            <ModalInformationLittle
                status={modalInformationLittle.status}
                title={modalInformationLittle.title}
                description={modalInformationLittle.description}
                handleClose={handleCloseModal}
            />
            <div className="block w-full overflow-x-auto mt-10">
                <table className="items-center bg-transparent w-full border-collapse ">
                    <thead>
                        <tr>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                ID
                            </th>
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
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Aksi
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            transaksi?.map(function (el, idx) {
                                return (
                                    <tr key={idx}>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {el._id}
                                        </th>
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
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <button onClick={() => handleDelete(el._id, idx)} className="p-2 pl-5 pr-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">Hapus</button>
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