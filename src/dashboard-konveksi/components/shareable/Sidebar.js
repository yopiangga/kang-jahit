import React from "react"
import { FiAward, FiBox, FiCheckSquare, FiGift, FiHome, FiPlusSquare, FiUser } from "react-icons/fi";
import {

  Link
} from "react-router-dom";

export function Sidebar(){

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
      
            <Link to="/" className="mb-3 flex items-center capitalize font-medium text-sm hover:text-indigo-600 transition ease-in-out duration-500">
              <FiHome className="mr-3" />               
              Beranda
            </Link>
      
            <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Aplikasi</p>

            <Link to="/tambah-order" className="mb-3 flex items-center capitalize font-medium text-sm hover:text-indigo-600 transition ease-in-out duration-500">
              <FiPlusSquare className="mr-3" />
              Tambah Order
            </Link>

            <Link to="/konfirmasi-order" className="mb-3 flex items-center capitalize font-medium text-sm hover:text-indigo-600 transition ease-in-out duration-500">
              <FiCheckSquare className="mr-3" />
              Konfirmasi Order
            </Link>
      
            <Link to="/konfirmasi-diambil" className="mb-3 flex items-center capitalize font-medium text-sm hover:text-indigo-600 transition ease-in-out duration-500">
              <FiBox className="mr-3" />
              Konfirmasi Diambil
            </Link>
      
            <Link to="konfirmasi-selesai" className="mb-3 flex items-center capitalize font-medium text-sm hover:text-indigo-600 transition ease-in-out duration-500">
              <FiAward className="mr-3" />
              Konfirmasi Selesai
            </Link>
      
            <Link to="riwayat-transaksi" className="mb-3 flex items-center capitalize font-medium text-sm hover:text-indigo-600 transition ease-in-out duration-500">
              <FiGift className="mr-3" />
              Riwayat Transaksi
            </Link>
            
            <p className="uppercase text-xs text-gray-600 mb-4 mt-4 tracking-wider">Akun</p>
      
            <Link to="/akun" className="mb-3 flex items-center capitalize font-medium text-sm hover:text-indigo-600 transition ease-in-out duration-500">
              <FiUser className="mr-3" />
              Akun Saya
            </Link>
      
          </div>
      
        </div>
    )
}