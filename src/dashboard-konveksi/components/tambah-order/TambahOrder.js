import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ModalInformationLittle } from "../../../component/ModalInformationLittle";
import { UserContext } from "../../../context/UserContext";

export function TambahOrder() {
  const { url, setUrl, user, setUser, menuActive, setMenuActive } =
    useContext(UserContext);
  const [order, setOrder] = useState();
  const [modalInformationLittle, setModalInformationLittle] = useState({status: false, description: ""});

  useEffect(() => {
    setMenuActive("tambah-order");
  }, []);

  const handleChange = (event) => {
    setOrder({
      ...order,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (order?.nama_order == "" || order?.deskripsi == "" || order.biaya == "") {
    } else {
      axios
        .post(`${url.api}order`, {
          id_konveksi: user.uid,
          id_penjahit: "",
          status: 1,
          biaya: order.biaya,
          nama_order: order.judul,
          deskripsi: order.deskripsi,
          apply_order: [],
          rating: "-",
        })
        .then(function (response) {
          console.log(response);
          setModalInformationLittle({
              status: true,
              description: `Orderan "${order.judul}" berhasil di tambahkan`
          })
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: ""
    });
  }

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
          Hallo Alfian 👋,{" "}
          <span className="font-normal">
            isi informasi orderan sebelum di posting ke halaman penjahit
          </span>
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1">
            <div className="left mr-5">
              <label
                for="judul"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Judul Orderan
              </label>
              <input
                id="judul"
                type="text"
                name="judul"
                onChange={handleChange}
                placeholder="Judul orderan"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />

              <label
                for="deskripsi"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Deskripsi
              </label>
              <textarea
                id="deskripsi"
                rows="4"
                type="text"
                onChange={handleChange}
                name="deskripsi"
                placeholder="Masukkan deskripsi orderan ..."
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              ></textarea>

              <label
                for="biaya"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Biaya
              </label>
              <input
                id="biaya"
                type="text"
                name="biaya"
                onChange={handleChange}
                placeholder="Rp. ,-"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </div>
          </div>
          <button type="submit" className="py-3 pl-5 pr-5 mr-2 mt-5 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">
            Posting Orderan
          </button>
        </form>
      </div>
    </div>
  );
}
