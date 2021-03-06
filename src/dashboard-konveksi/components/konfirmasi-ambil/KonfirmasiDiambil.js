import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import StarRatings from 'react-star-ratings';
import { UserContext } from '../../../context/UserContext';
import getOrders from '../../../helper/api/order/getOrders';
import { CardOrder } from '../../../guest/components/shareable/CardOrder';
import { ModalInformationLittle } from '../../../component/ModalInformationLittle';

export function KonfirmasiDiambil() {
    const { url, setUrl, user, setUser, menuActive, setMenuActive } =
    useContext(UserContext);
  const [orders, setOrders] = useState();
  const [idOrder, setIdOrder] = useState(-1);
  const [penjahit, setPenjahit] = useState();
  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  useEffect(() => {
    setMenuActive("konfirmasi-diambil");
  }, []);

  const { isLoading: ordersIsLoading } = useQuery(
    "orders",
    async () => {
      const response = await getOrders(`${url.api}order/konfirmasi-diambil/${user.uid}`);
      
      return response;
    },
    {
      onSuccess: (data) => {
        if(data?.data?.length > 0){
            setOrders(data.data);
          }
      },
    }
  );

  const handleKonfirmasi = () => {
    axios
      .put(`${url.api}order/${orders[idOrder]?._id}`, {
        id_konveksi: orders[idOrder]?.id_konveksi,
        id_penjahit: orders[idOrder]?.id_penjahit,
        status: 3,
        biaya: orders[idOrder]?.biaya,
        nama_orders: orders[idOrder]?.judul,
        deskripsi: orders[idOrder]?.deskripsi,
        gambar: orders[idOrder]?.gambar,
        batas_selesai: orders[idOrder]?.batas_selesai,
        gps: {
          latitude: orders[idOrder]?.gps.latitude,
          longitude: orders[idOrder]?.gps.longitude,
        },
        apply_order: orders[idOrder]?.apply_order,
        rating: orders[idOrder]?.rating,
      })
      .then(function (response) {
        // console.log(response);
        setModalInformationLittle({
            status: true,
            description: `Orderan "${orders[idOrder]?.nama_order}" berhasil diambil`,
        });
      })
      .catch(function (error) {
        // console.log(error);
      });
  };

  const validasiKonfirmasi = () => {
    if (orders[idOrder]?.status == 2) {
      return true;
    } else {
      return false;
    }
  };

  const handleDetail = (id) => {
    setIdOrder(id);

    axios.get(`${url.api}user/${orders[id]?.id_penjahit}`)
      .then(res => {
        setPenjahit(res.data[0])
    }).catch(err => {

    })
  }

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
      <div
        className={
          idOrder >= 0 ? "grid grid-cols-2 mt-5" : "grid grid-cols-1 mt-5"
        }
      >
        <div className={idOrder >= 0 ? "" : "grid grid-cols-2"}>
          {orders?.map(function (el, idx) {
            return (
              <CardOrder
                nama_order={el.nama_order}
                deskripsi={el.deskripsi}
                gambar={el.gambar}
                biaya={el.biaya}
                batas_selesai={el.batas_selesai}
                kota={el.kota}
                idx={idx}
                kota={el.kota}
                handleDetail={(idArr) => handleDetail(idArr)}
              />
            );
          })}
        </div>

        {idOrder >= 0 ? (
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
                  <div className="bg-white border border-gray-100 rounded-lg p-4 mt-40">
                    <div className="flex-none sm:flex">
                      <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                        <img
                          src={penjahit?.avatar}
                          alt="konveksi"
                          className=" w-32 h-32 object-cover rounded-2xl"
                        />
                      </div>
                      <div className="flex-auto sm:ml-5 justify-evenly">
                        <div className="flex items-center justify-between sm:mt-2">
                          <div className="flex items-center">
                            <div className="flex flex-col">
                              <div className="w-full flex-none text-lg text-gray-900 font-bold leading-none">
                                {penjahit?.nama}
                              </div>
                              <div className="flex-auto text-gray-800 my-1">
                                <span className="mr-3 ">{penjahit?.konveksi?.nama_konveksi}</span>
                                <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                                <span>{penjahit?.no_telp}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          {
                            penjahit?.rating == "" ? 
                            <h4>-</h4>
                            :
                            <StarRatings
                            numberOfStars={5}
                            rating={penjahit?.rating}
                            starRatedColor={"orange"}
                            starDimension={"20px"}
                            starSpacing={"1px"}
                            starEmptyColor={"rgb(109, 122, 130"}
                          />
                          }
                        </div>

                        <div className="flex pt-2 text-sm text-gray-400">
                          <button className="flex-no-shrink bg-indigo-400 hover:bg-indigo-500 px-5 py-2 text-xs shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-indigo-300 hover:border-indigo-500 text-white rounded-full transition ease-in duration-300 mr-2">
                            LIHAT PROFILE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-5">
                  <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    {orders[idOrder]?.nama_order}
                  </h3>
                  <h4>{orders[idOrder]?.kota?.results[3]?.formatted_address}</h4>
                </div>
                <div className="mt-5 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        {orders[idOrder]?.deskripsi}
                      </p>
                    </div>
                  </div>
                  {validasiKonfirmasi() ? (
                    <button
                      onClick={handleKonfirmasi}
                      className="py-2 px-4 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300"
                    >
                      Konfirmasi Diambil
                    </button>
                  ) : (
                    <button className="py-2 px-4 transition-colors duration-700 transform text-indigo-500 text-md focus:border-4 border-indigo-300">
                      Orderan telah diambil penjahit
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}