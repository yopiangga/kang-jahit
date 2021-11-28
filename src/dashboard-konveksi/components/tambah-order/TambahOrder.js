import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ModalInformationLittle } from "../../../component/ModalInformationLittle";
import { UserContext } from "../../../context/UserContext";
import GoogleMaps from "../../../component/GoogleMaps";
import { FaUpload } from "react-icons/fa";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import getNameCity from "../../../helper/api/getNameCity";
import { useHistory } from "react-router-dom";
import history from "../../../helper/history";

export function TambahOrder() {
  const { url, setUrl, user, setUser, menuActive, setMenuActive } =
    useContext(UserContext);
  const [order, setOrder] = useState();
  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });
  const [file, setFile] = useState();
  const [imagePreview, setImagePreview] = useState(false);

  useEffect(() => {
    setMenuActive("tambah-order");
  }, []);

  const handleImageAsFile = (e) => {
    const file = e.target.files[0];
    var pattern = /image-*/;

    if (file.type.match(pattern)) {
      setFile(e.target.files[0]);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);

      return;
    }
  };

  const Push = () => {
    if (file != null) {
      const date = new Date();
      const time = date.getTime();

      const storage = getStorage();
      const storageRef = ref(
        storage,
        `/order/${time}_${user.email}_${file.name}`
      );

      const uploadTask = uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(storageRef)
        .then((url) => {
          // console.log(url)
          PushData(url);
        })
        .catch((error) => {
          // A full list of error codes is available at
        });
      });

    } else {
      const date = new Date();
      const time = date.getTime();
      PushData("");
    }
  };

  const PushData = (urlImage) => {
    axios
      .post(`${url.api}order`, {
        id_konveksi: user.uid,
        id_penjahit: "",
        status: 1,
        biaya: order.biaya,
        nama_order: order.judul,
        deskripsi: order.deskripsi,
        gambar: urlImage,
        batas_selesai: order.batas_selesai,
        kota: order.kota,
        gps: {
          latitude: order.gps.latitude,
          longitude: order.gps.longitude,
        },
        apply_order: "",
        rating: 0,
      })
      .then(function (response) {
        // console.log(response);
        setModalInformationLittle({
          status: true,
          description: `Orderan "${order.judul}" berhasil di tambahkan`,
        });
      })
      .catch(function (error) {
        console.log(error);
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
      order?.biaya == "" ||
      !!!order?.gps
    ) {
    } else {
      Push();
    }
  };

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    history.push('/konfirmasi-diambil');
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  const showPosition = (position) => {
    getNameCity({latitude: position.coords.latitude, longitude: position.coords.longitude}).then(res => {
      setOrder({
        ...order,
        kota: res?.data,
        gps: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        },
      });
    }).catch(err => {

    })

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
          Hallo Alfian 👋,{" "}
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
                name="judul"
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
                onChange={handleChange}
                placeholder="Rp. ,-"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />

              <label
                htmlFor="image"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Gambar
              </label>

              <div className="relative h-32">
                <div className="border-2 border-dashed border-dark border-opacity-90 text-dark font-bold w-full h-32 rounded-xl flex flex-col justify-center items-center absolute z-0">
                  <FaUpload />
                  <span className="ml-2 mt-2 w-96 text-center">
                    {file == null || file == undefined || file == ""
                      ? "Upload Image"
                      : file.name}
                  </span>
                </div>
                <input
                  className="cursor-pointer w-full h-40 opacity-0 pin-r pin-t absolute z-10"
                  type="file"
                  id="avatar"
                  name="avatar"
                  onChange={handleImageAsFile}
                  accept="image/png, image/jpeg"
                />
              </div>
              {imagePreview ? (
                <div className="w-full h-96 relative overflow-hidden mt-5">
                  <img
                    src={imagePreview}
                    layout="fill"
                    alt="image-preview"
                  />
                </div>
              ) : (
                ""
              )}

              <label
                htmlFor="lokasi"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Dapatkan lokasi terkini
                <button
                  onClick={getLocation}
                  type="button"
                  className="ml-2 bg-indigo-600 rounded-md py-1 px-2 text-sm text-white"
                >
                  Lokasi anda
                </button>
              </label>

              {!!!order?.gps ? (
                ""
              ) : (
                <div className="row flex w-full mt-2 mb-5">
                  <div className="col w-full">
                    <div className="form-group flex h-96 w-full relative">
                      <GoogleMaps
                        latitude={order.gps.latitude}
                        longitude={order.gps.longitude}
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
            Posting Orderan
          </button>
        </form>
      </div>
    </div>
  );
}
