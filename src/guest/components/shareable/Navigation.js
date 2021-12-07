import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";

export function Navigation() {
  const { url, setUrl, user, setUser, menuActive, setMenuActive, isLogin, setIsLogin } =
    useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleAuth = (type) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        handleAuth2(user, result._tokenResponse.isNewUser, type);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const handleAuth2 = (data, status, type) => {
    axios
    .get(`${url.api}user/${data.uid}`)
    .then(function (response){
        // console.log(response)
        if(response.data.error){
          handleDaftar(data, type);
        } else {
          handleSignin(data);
        }
    })

  };

  const handleDaftar = (data, type) => {
    // console.log(data)
    axios
      .post(`${url.api}user`, {
        uid: data.uid,
        alamat: "",
        avatar: data.photoURL == "" ? "https://firebasestorage.googleapis.com/v0/b/kang-jahit.appspot.com/o/order%2Fuser.jfif?alt=media&token=4f3efe92-ed69-49ba-ba04-36f1d00b47f5" : data.photoURL,
        gender: "",
        no_telp: "",
        rating: "",
        saldo: 0,
        tgl_bergabung: new Date().getTime(),
        tgl_lahir: "",
        email: data.email,
        nama: data.displayName,
        gps: {
          latitude: "",
          longitude: "",
        },
        role: type,
        konveksi: {
          nama_konveksi: "",
          deskripsi: "",
          foto_konveksi: [],
        },
      })
      .then(function (response) {
        // console.log(response);

      })
      .catch(function (error) {
        // console.log(error);
      })
  };

  
  const handleSignin = (data) => {

    axios
    .get(`${url.api}user/${data.uid}`)
    .then(function (response) {

        setUser({
            uid: response.data[0].uid,
            alamat: response.data[0].alamat,
            avatar: response.data[0].avatar,
            gender: response.data[0].gender,
            no_telp: response.data[0].no_telp,
            rating: response.data[0].rating,
            saldo: response.data[0].saldo,
            tgl_bergabung: response.data[0].tgl_bergabung,
            tgl_lahir: response.data[0].tgl_lahir,
            email: response.data[0].email,
            nama: response.data[0].nama,
            gps: {
              latitude: response.data[0].gps?.latitude,
              longitude: response.data[0].gps?.longitude,
            },
            role: response.data[0].role,
            konveksi: {
              nama_konveksi: response.data[0].konveksi?.nama_konveksi,
              deskripsi: response.data[0].konveksi?.deskripsi,
              foto_konveksi: response.data[0].konveksi?.foto_konveksi,
            },
        })
    })
    .catch(function (error) {
        // console.log(error);
    })
};

  return (
    <div className="navigation w-full flex justify-center h-20 bg-dark fixed z-50 shadow-lg">
      <div className="content w-11/12 flex">
        <div className="logo w-4/12 flex items-center">
          <h2 className="text-white text-xl font-medium">
            Kang <span className="text-indigo-600 font-bold">Jahit</span>
          </h2>
        </div>
        <div className="nav w-4/12">
          <ul className="w-full h-full flex justify-center">
            <li className="text-indigo-600 flex justify-center items-center px-5 mx-1">
              <a href="#home">Beranda</a>
            </li>
            <li className="text-white flex justify-center items-center px-5 mx-1">
              <a href="#langganan">Langganan</a>
            </li>
            {/* <li className="text-white flex justify-center items-center px-5 mx-1"><a href="#">Penjahit</a></li> */}
            <li className="text-white flex justify-center items-center px-5 mx-1">
              <a href="#bantuan">Bantuan</a>
            </li>
          </ul>
        </div>

        <div className="action w-4/12 flex justify-end items-center">
          <button
            onClick={() => handleAuth(1)}
            className="p-2 pl-5 pr-5 mr-2 transition-colors border-2 duration-700 flex items-center transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-500"
          >
            <FaGoogle className="mr-2" />
            Masuk Konveksi
          </button>
          <button
            onClick={() => handleAuth(2)}
            className="p-2 pl-5 pr-5 bg-transparent border-2 flex items-center border-indigo-500 text-indigo-500 text-md transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300"
          >
            <FaGoogle className="mr-2" />
            Masuk Penjahit
          </button>
        </div>
      </div>
    </div>
  );
}
