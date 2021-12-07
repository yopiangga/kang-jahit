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

export function EditAkun() {
  const { url, setUrl, user, setUser, menuActive, setMenuActive } =
    useContext(UserContext);
  const [userEdit, setUserEdit] = useState();
  const [modalInformationLittle, setModalInformationLittle] = useState({
    status: false,
    description: "",
  });

  useEffect(() => {
    setMenuActive("akun-saya");
    setUserEdit(user);
  }, [user]);

  const Push = () => {
    axios
      .put(`${url.api}user/${user.uid}`, {
        uid: user.uid,
        alamat: userEdit.alamat,
        avatar:
          userEdit.avatar == ""
            ? "https://firebasestorage.googleapis.com/v0/b/kang-jahit.appspot.com/o/order%2Fuser.jfif?alt=media&token=4f3efe92-ed69-49ba-ba04-36f1d00b47f5"
            : userEdit.avatar,
        gender: userEdit.gender,
        no_telp: userEdit.no_telp,
        rating: 0,
        saldo: 0,
        tgl_bergabung: user.tgl_bergabung,
        tgl_lahir: userEdit.tgl_lahir,
        email: user.email,
        nama: userEdit.nama,
        gps: {
          latitude: userEdit.gps.latitude,
          longitude: userEdit.gps.longitude,
        },
        role: user.role,
        konveksi: {
          nama_konveksi: userEdit.konveksi.nama_konveksi,
          deskripsi: userEdit.konveksi.deskripsi,
          foto_konveksi: [],
        },
      })
      .then(function (response) {
        // console.log(response);
        setModalInformationLittle({
          status: true,
          description: `Akun "${userEdit.nama}" berhasil di update`,
        });
        window.location = url.baseUrl;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleChange = (event) => {
      setUserEdit({
        ...userEdit,
        [event.target.name]: event.target.value,
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (handleValidasi()) {
      Push();
    } else {
    }
  };

  const handleValidasi = () => {
    if (
      userEdit.alamat == "" ||
      userEdit.gender == "" ||
      userEdit.no_telp == "" ||
      userEdit.tgl_lahir == "" ||
      userEdit.nama == "" ||
      userEdit.gps.latitude == "" ||
      userEdit.gps.longitude == ""
    ) {
      return false;
    } else {
      return true;
    }

    return false;
  };

  const handleCloseModal = () => {
    setModalInformationLittle({
      status: false,
      title: "",
      description: "",
    });
    history.push("");
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  const showPosition = (position) => {
    getNameCity({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
      .then((res) => {
        setUserEdit({
          ...userEdit,
          alamat: res?.data,
          gps: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      })
      .catch((err) => { });
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
          Hallo {user?.nama} 👋,
          <span className="font-normal">
            isi informasi akun anda secara jelas dan lengkap sebelum di posting
            ke penjahit
          </span>
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="form grid grid-cols-1">
            <div className="left mr-5">
              <label
                htmlFor="nama"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Nama Lengkap
              </label>
              <input
                id="nama"
                type="text"
                name="nama"
                value={userEdit?.nama}
                onChange={handleChange}
                placeholder="Nama anda"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />

              <label
                htmlFor="tgl_lahir"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Tanggal Lahir
              </label>
              <input
                id="tanggal_lahir"
                type="date"
                name="tgl_lahir"
                value={userEdit?.tgl_lahir}
                onChange={handleChange}
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />

              <label
                htmlFor="no_telp"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Nomor Telepon
              </label>
              <input
                id="no_telp"
                type="text"
                name="no_telp"
                value={userEdit?.no_telp}
                onChange={handleChange}
                placeholder="0823 xxx"
                className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />

              <label
                htmlFor="gender"
                className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
              >
                Jenis Kelamin
              </label>

              <div className="flex rounded-lg">
                <div className="rounded-lg flex items-center">
                  <input
                    type="radio"
                    onChange={handleChange}
                    value="Laki - laki"
                    name="gender"
                    id="roomPrivate"
                  />
                  <label
                    htmlFor="roomPrivate"
                    className="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75"
                  >
                    Laki - Laki
                  </label>
                </div>
                <div className="rounded-lg flex items-center">
                  <input
                    type="radio"
                    onChange={handleChange}
                    value="Perempuan"
                    name="gender"
                    id="roomPublic"
                  />
                  <label
                    htmlFor="roomPublic"
                    className="radio text-center self-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-75"
                  >
                    Perempuan
                  </label>
                </div>
              </div>

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

              {userEdit?.gps?.latitude == "" ||
                userEdit?.gps?.longitude == "" ? (
                ""
              ) : (
                <div className="row flex w-full mt-2 mb-5">
                  <div className="col w-full">
                    <div className="form-group flex h-96 w-full relative">
                      <GoogleMaps
                        latitude={userEdit?.gps?.latitude}
                        longitude={userEdit?.gps?.longitude}
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
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
