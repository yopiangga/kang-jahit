import React from 'react';

import {
    Router,
    BrowserRouter,
    Switch,
    Route,
    Routes
} from "react-router-dom";
import { Akun } from './components/akun/Akun';

import { Beranda } from './components/beranda/Beranda';
import { EditOrder } from './components/edit-order/EditOrder';
import { KonfirmasiDiambil } from './components/konfirmasi-ambil/KonfirmasiDiambil';
import { KonfirmasiOrder } from './components/konfirmasi-order/KonfirmasiOrder';
import { KonfirmasiSelesai } from './components/konfirmasi-selesai/KonfirmasiSelesai';
import { RiwayatTransaksi } from './components/riwayat-transaksi/RiwayatTransaksi';
import { Navbar } from './components/shareable/Navbar';
import { Sidebar } from './components/shareable/Sidebar';
import { TambahOrder } from './components/tambah-order/TambahOrder';

export default function MainKonveksi() {
    return (
        <BrowserRouter>
            <div className="bg-gray-100">
                <Navbar />
                <div className="w-full flex">

                    <Sidebar />

                    <div className="bg-gray-100 p-6 mt-16 w-10/12 text-dark">
                        <Routes>
                            <Route path="/" element={<Beranda />} exact />
                        </Routes>
                        <Routes>
                            <Route path="/tambah-order" element={<TambahOrder />} exact />
                        </Routes>
                        <Routes>
                            <Route path="/edit-order/:id" element={<EditOrder />} exact />
                        </Routes>
                        <Routes>
                            <Route path="/konfirmasi-order" element={<KonfirmasiOrder />} exact />
                        </Routes>
                        <Routes>
                            <Route path="/konfirmasi-diambil" element={<KonfirmasiDiambil />} exact />
                        </Routes>
                        <Routes>
                            <Route path="/konfirmasi-selesai" element={<KonfirmasiSelesai />} exact />
                        </Routes>
                        <Routes>
                            <Route path="/riwayat-transaksi" element={<RiwayatTransaksi />} exact />
                        </Routes>
                        <Routes>
                            <Route path="/akun" element={<Akun />} exact />
                        </Routes>

                    </div>

                </div>


                <div>

                </div>
            </div>
        </BrowserRouter>
    )
}