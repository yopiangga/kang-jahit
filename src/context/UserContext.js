import React, { useState, createContext, useEffect } from "react";
import app from './../helper/Firebase'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = props => {
  const [url, setUrl] = useState({api: "http://localhost:3000/", baseUrl: "http://localhost:3002/"});
  const [user, setUser] = useState("");
  const [menuActive, setMenuActive] = useState();
  const [isLogin, setIsLogin] = useState("");

  useState(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        handleDataUser(user);
      } else {
        setIsLogin(10)
        setUser(10)
      }
    });

  }, [])

  const handleDataUser = (data) => {
    axios
    .get(`${url.api}user/${data?.uid}`)
    .then(function (response) {
        setUser({
            uid: response.data[0]?.uid,
            alamat: response.data[0]?.alamat,
            kota: response.data[0]?.kota,
            provinsi: response.data[0]?.provinsi,
            avatar: response.data[0]?.avatar,
            gender: response.data[0]?.gender,
            no_telp: response.data[0]?.no_telp,
            rating: response.data[0]?.rating,
            saldo: response.data[0]?.saldo,
            tgl_bergabung: response.data[0]?.tgl_bergabung,
            tgl_lahir: response.data[0]?.tgl_lahir,
            email: response.data[0]?.email,
            nama: response.data[0]?.nama,
            gps: {
              latitude: response.data[0]?.gps?.latitude,
              longitude: response.data[0]?.gps?.longitude,
            },
            role: response.data[0]?.role,
            konveksi: {
              nama_konveksi: response.data[0]?.konveksi?.nama_konveksi,
              deskripsi: response.data[0]?.konveksi?.deskripsi,
              foto_konveksi: response.data[0]?.konveksi?.foto_konveksi,
            },
        })
        setIsLogin(1);
    })
    .catch(function (error) {
        console.log(error);

    })
  }

  return (
    <UserContext.Provider value={{url, setUrl, user, setUser, menuActive, setMenuActive, isLogin, setIsLogin}}>
      {props.children}
    </UserContext.Provider>
  );
};