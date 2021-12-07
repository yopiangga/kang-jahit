import React, { useContext, useEffect } from "react"
import { FiAward, FiBook, FiBox, FiCheckSquare, FiGift, FiHome, FiPlusSquare, FiUser, FiUsers } from "react-icons/fi";
import {

  Link
} from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

export function Sidebar(){

  const {user, setUser, menuActive, setMenuActive} = useContext(UserContext)

    function menu(id){
        if(id == menuActive){
          return "mb-3 flex items-center capitalize font-medium text-sm text-indigo-600 transition ease-in-out duration-500";
        } else {
          return "mb-3 flex items-center capitalize font-medium text-sm hover:text-indigo-600 transition ease-in-out duration-500";
        }
    }

    return(
        // <div id="sideBar" className="flex flex-col flex-wrap bg-white border-r border-gray-300 p-6 flex-none w-64 md:-ml-64 md:fixed md:top-0 md:z-30 md:h-screen md:shadow-xl animated faster">
        <div id="sideBar" className="flex flex-col flex-wrap bg-white text-dark border-r border-gray-100 p-6 min-h-screen w-2/12 md:shadow-xl mt-10">
        
          <div className="flex flex-col">
      
            <div className="text-right hidden md:block mb-4">
              <button id="sideBarHideBtn">
                <i className="fad fa-times-circle"></i>
              </button>
            </div>
      
            <p className="uppercase text-xs text-gray-600 mb-4 tracking-wider">Utama</p>

            <Link to="/" className={menu("beranda")}>
              <FiHome className="mr-3" />               
              Beranda
            </Link>
      
            <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Aplikasi</p>

            <Link to="/semua-pengguna" className={menu("semua-pengguna")}>
              <FiUsers className="mr-3" />
              Semua Pengguna
            </Link>
      
            <Link to="/semua-transaksi" className={menu("semua-transaksi")}>
              <FiBook className="mr-3" />
              Semua Transaksi
            </Link>
            
            <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Akun</p>
      
            <Link to="/akun" className={menu("akun-saya")}>
              <FiUser className="mr-3" />
              Akun Saya
            </Link>
      
          </div>
      
        </div>
    )
}