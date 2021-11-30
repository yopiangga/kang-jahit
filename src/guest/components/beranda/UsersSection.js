import React from "react";
import features from './../../../assets/images/features-02-image.png'
import Tilt from 'react-tilt'

export function UsersSection() {

    return (
        <div className="w-full flex flex-col items-center pt-0 pb-16">
            <div className="content w-11/12 flex flex-col mb-16">
                <h1 className="text-4xl text-center text-indigo-50 w-3/5 mx-auto font-bold mt-10 mb-8">Sebenarnya layanan Kang <span className="text-indigo-500">Jahit</span> dapat digunakan siapa ? </h1>

                <div className="box flex">
                    <div className="left w-3/5 relative flex items-center justify-center">
                    <Tilt className="Tilt" options={{ max: 25 }}>
                        <div className="Tilt-inner">
                        <img src={features} className="w-8/12" alt="" />
                        </div>
                    </Tilt>
                    </div>
                    <div className="right w-2/5 pr-5">
                        <h3 className="fs text-indigo-600 text-2xl mb-3 mt-10">Pengguna potensial</h3>

                        <div className="group">
                            <div className="list mb-5">
                                <h2 className="text-2xl font-bold mb-2"><span className="text-indigo-600">. </span>Para pemilik konveksi</h2>
                                <p className="text-indigo-200 text-lg" data-aos={"fade-up"}>Dengan melakukan langganan untuk mendapatkan semua fitur dan layanan secara penuh 24 jam</p>
                            </div>
                            <div className="list mb-5">
                                <h2 className="text-2xl font-bold mb-2"><span className="text-indigo-600">. </span>Para penjahit</h2>
                                <p className="text-indigo-200 text-lg" data-aos={"fade-up"}>Disediakan gratis untuk para penjahit guna mencari orderan jahitan</p>
                            </div>
                            <div className="list mb-5">
                                <h2 className="text-2xl font-bold mb-2"><span className="text-indigo-600">. </span>Semua orang</h2>
                                <p className="text-indigo-200 text-lg" data-aos={"fade-up"}>Semau orang yang membutuhkan layanan jahitan dengan tanpa perlu melakukan langganan di Kang Jahit</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <hr className="border-indigo-200 opacity-30 w-11/12" />
        </div>
    )
}