import React from "react";
import { FiAward } from "react-icons/fi";

export function LangkahSection(){

    return(
        <div className="w-full flex justify-center pt-0 pb-14">
            <div className="content w-11/12">
                <h1 className="text-4xl text-center text-indigo-50 w-3/5 mx-auto font-bold mt-10 mb-8">Cara Kerja Layanan</h1>
                <h4 className="text-lg text-center text-indigo-200 w-3/5 mx-auto">Kami menyederhanakan langkah kerja dari layanan kami agar dapat digunakan oleh semua pengguna dengan sangat mudah.</h4>
            
                <div className="group relative flex justify-center mt-16 mb-16">
                    <div className="absolute flex top-8">
                        <hr className="w-64 border-dotted opacity-30 mr-14" />
                        <hr className="w-64 border-dotted opacity-30 ml-14" />
                    </div>
                    <div className="card-fitur flex flex-col items-center mx-5 w-80" data-aos={"fade-right"}>
                        <div className="circle w-16 h-16 flex justify-center items-center rounded-full bg-indigo-600 mb-4">
                            <FiAward className="text-lg"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2"><span className="text-indigo-200">1. </span>Posting</h2>
                        <h4 className="text-indigo-200 text-lg text-center">Konveksi melakukan posting orderan yang mereka butuhkan pada para penjahit</h4>
                    </div>
                    <div className="card-fitur flex flex-col items-center mx-5 w-80">
                        <div className="circle w-16 h-16 flex justify-center items-center rounded-full bg-indigo-600 mb-4">
                            <FiAward className="text-lg"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2"><span className="text-indigo-200">2. </span>Ambil</h2>
                        <h4 className="text-indigo-200 text-lg text-center">Penjahit mengambil jahitan dari konveksi untuk mendapatkan informasi lebih detail</h4>
                    </div>
                    <div className="card-fitur flex flex-col items-center mx-5 w-80" data-aos={"fade-left"}>
                        <div className="circle w-16 h-16 flex justify-center items-center rounded-full bg-indigo-600 mb-4">
                            <FiAward className="text-lg"/>
                        </div>
                        <h2 className="text-xl font-bold mb-2"><span className="text-indigo-200">3. </span>Kerjakan</h2>
                        <h4 className="text-indigo-200 text-lg text-center">Penjahit mengerjakan jahitan sesuai dengan keinginan dari konveksi yang melakukan order</h4>
                    </div>
                </div>

                <hr className="border-indigo-200 opacity-30" />

            </div>
        </div>
    )
}