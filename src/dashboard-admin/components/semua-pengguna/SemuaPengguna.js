import React, { useContext, useEffect, useState } from "react"
import { FiAward, FiBox, FiCheckSquare, FiChevronsUp, FiGift, FiShoppingBag } from "react-icons/fi"
import { UserContext } from "../../../context/UserContext"
import { useQuery } from "react-query"
import { ModalInformationLittle } from "../../../component/ModalInformationLittle"
import { deleteUser } from "@firebase/auth"
import getUsers from "../../../helper/api/user/getUsers"
import axios from "axios"

export function SemuaPengguna() {

    const { url, setUrl, user, setUser, menuActive, setMenuActive } = useContext(UserContext)

    const [pengguna, setPengguna] = useState();
    const [modalInformationLittle, setModalInformationLittle] = useState({
        status: false,
        description: "",
    });

    useEffect(() => {
        setMenuActive("semua-pengguna");
    }, [])

    const { penggunaIsLoading: penggunaIsLoading } = useQuery(
        "pengguna",
        async () => {
            const response = await getUsers(`${url?.api}user`);
            return response;
        },
        {
            onSuccess: (data) => {
                if (data?.data?.length > 0) {
                    setPengguna(data.data);
                }
            },
        }
    );

    const handleDelete = (id, idx) => {
        const temp = [...pengguna];
        temp.splice(idx, 1);
        setPengguna(temp);

        axios.delete(`${url?.api}user/${id}`).then(res => {
            setModalInformationLittle({
                status: true,
                description: `User dengan ID "${id}" berhasil di hapus`,
            });
        }).catch(err => {
            setModalInformationLittle({
                status: true,
                description: `User dengan ID "${id}" gagal di hapus`,
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
                                Nama Pengguna
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Email
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Role
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                No. Telepon
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Tanggal Bergabung
                            </th>
                            <th className="px-6 bg-indigo-100 text-dark align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                Aksi
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            pengguna?.map(function (el, idx) {
                                return (
                                    <tr key={idx}>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {el._id}
                                        </th>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {el.nama}
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                            {el.email}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                            {
                                                el.role == 1 ? "Konveksi" : ""
                                            }
                                            {
                                                el.role == 2 ? "Penjahit" : ""
                                            }
                                            {
                                                el.role == 3 ? "Admin" : ""
                                            }
                                        </td>
                                        <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {el.no_telp}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                            {new Date(el.tgl_bergabung).getDate() +
                                                "/" + (new Date(el.tgl_bergabung).getMonth() + 1) +
                                                "/" + new Date(el.tgl_bergabung).getFullYear() +
                                                " " + new Date(el.tgl_bergabung).getHours() +
                                                ":" + new Date(el.tgl_bergabung).getMinutes() +
                                                ":" + new Date(el.tgl_bergabung).getSeconds()}
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