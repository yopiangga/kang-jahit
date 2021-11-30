import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom"

export function Footer() {
    return (
        <div className="footer w-full flex justify-center pt-20 pb-14 bg-indigo-100 bg-opacity-5">
            <div className="content w-11/12">
                <div className="footer-top flex justify-between">
                    <div className="big-footer w-5/12 pr-5">
                        <h2 className="text-white text-xl font-medium mb-2">Kang <span className="text-indigo-600 font-bold">Jahit</span></h2>
                        <p className="text-indigo-200 text-sm">Layanan penghubung antara tukang jahit dengan para pemilik konveksi yang tidak dapat menangani orderan jahitan yang ada. </p>
                    </div>
                    <div className="little-footer w-2/12 text-sm">
                        <h4 className="font-medium mb-3">Layanan</h4>
                        <ul className="text-indigo-200">
                            <li className="mb-1"><Link to="">Pencarian Penjahit</Link></li>
                            <li className="mb-1"><Link to="">Posting Orderan</Link></li>
                            <li className="mb-1"><Link to="">Bantuan 24/7</Link></li>
                        </ul>
                    </div>
                    <div className="little-footer w-2/12 text-sm">
                        <h4 className="font-medium mb-3">Tim Pengembang</h4>
                        <ul className="text-indigo-200">
                            <li className="mb-1"><Link to="">Alfian Prisma Yopiangga</Link></li>
                            <li className="mb-1"><Link to="">Tim Programmer Front End</Link></li>
                            <li className="mb-1"><Link to="">Tim Programmer Back End</Link></li>
                        </ul>
                    </div>
                    <div className="little-footer w-2/12 text-sm">
                        <h4 className="font-medium mb-3">Perusahaan</h4>
                        <ul className="text-indigo-200">
                            <li className="mb-1"><Link to="">Kang Jahit Ltd</Link></li>
                            <li className="mb-1"><Link to="">Petik Satu</Link></li>
                            <li className="mb-1"><Link to="">PT Web Petikdua Indonesia</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom flex justify-between items-center mt-16">
                    <div className="text">
                        <h4 className="text-sm text-md">© 2021 Kang Jahit. Hak Cipta Terdaftar di Hak Kekayaan Intelektual Indonesia.</h4>
                    </div>
                    <div className="group">
                        <ul className="flex">
                            <Link className="circle ml-4 rounded-full w-10 h-10 bg-gray-800 flex justify-center items-center" to=""><FiTwitter className="text-indigo-600 text-lg" /></Link>
                            <Link className="circle ml-4 rounded-full w-10 h-10 bg-gray-800 flex justify-center items-center" to=""><FiFacebook className="text-indigo-600 text-lg" /></Link>
                            <Link className="circle ml-4 rounded-full w-10 h-10 bg-gray-800 flex justify-center items-center" to=""><FiInstagram className="text-indigo-600 text-lg" /></Link>
                            <Link className="circle ml-4 rounded-full w-10 h-10 bg-gray-800 flex justify-center items-center" to=""><FiLinkedin className="text-indigo-600 text-lg" /></Link>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}