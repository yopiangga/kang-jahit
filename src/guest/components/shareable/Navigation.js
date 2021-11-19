import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { UserContext } from "../../../context/UserContext";

export function Navigation() {
    const { user, setUser } = useContext(UserContext);
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const handleAuth = (type) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                if (type == 1) {
                    handleKonveksi(user, result._tokenResponse.isNewUser, type)
                } else if (type == 2) {
                    handlePenjahit(user, result._tokenResponse.isNewUser, type)
                }
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }

    const handleKonveksi = (data, status, type) => {
        if (status) {
            createDataKonveksi(data)
        } else {
            handleDataKonveksi(data)
        }
    }

    const handlePenjahit = (data, status, type) => {

    }

    const createDataKonveksi = (data) => {
        setUser({
            name: `Konveksi ${data.displayName}`,
            owner: data.displayName,
            email: data.email,
            telephone: data.phoneNumber,
            address: "",
            description: "",
            owner_photo: data.photoURL,
            photos: "",
            saldo: "",
            role: 1
        })

    }

    const handleDataKonveksi = (data) => {
        setUser({
            owner: data.displayName,
            email: data.email,
            owner_photo: data.photoURL,
            role: 1
        })
    }

    // handleDataKonveksi({displayName: "Yopianggaa", email:"yopiangga@email.com", owner_photo: "ee"})

    // console.log(user)

    return (
        <div className="navigation w-full flex justify-center h-20 shadow-sm bg-dark fixed z-50 shadow-lg">
            <div className="content w-11/12 flex">
                <div className="logo w-4/12 flex items-center">
                    <h2 className="text-white text-xl font-medium">Kang <span className="text-indigo-600 font-bold">Jahit</span></h2>
                </div>
                <div className="nav w-4/12">
                    <ul className="w-full h-full flex justify-center">
                        <li className="text-indigo-600 flex justify-center items-center px-5 mx-1"><Link to="/">Beranda</Link></li>
                        <li className="text-white flex justify-center items-center px-5 mx-1"><Link to="/">Tentang Kami</Link></li>
                        {/* <li className="text-white flex justify-center items-center px-5 mx-1"><Link to="/">Penjahit</Link></li> */}
                        <li className="text-white flex justify-center items-center px-5 mx-1"><Link to="/">Bantuan</Link></li>
                    </ul>
                </div>
                
                <div className="action w-4/12 flex justify-end items-center">
                    <button onClick={() => handleAuth(1)} className="p-2 pl-5 pr-5 mr-2 transition-colors duration-700 transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-300">Masuk Konveksi</button>
                    <button onClick={() => handleAuth(2)} className="p-2 pl-5 pr-5 bg-transparent border-2 border-indigo-500 text-indigo-500 text-md transition-colors duration-700 transform hover:bg-indigo-500 hover:text-gray-100 focus:border-4 focus:border-indigo-300">Masuk Penjahit</button>
                </div>
            </div>
        </div>
    )
}