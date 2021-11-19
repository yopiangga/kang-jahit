import React from 'react';

import {
    Router,
    BrowserRouter,
    Switch,
    Route,
    Routes,
} from "react-router-dom";
import { Akun } from './components/akun/Akun';

import { Beranda } from './components/beranda/Beranda';
import { CariOrder } from './components/cari-order/CariOrder';
import { OrderDiambil } from './components/order-diambil/OrderDiambil';
import { RiwayatTransaksi } from './components/riwayat-transaksi/RiwayatTransaksi';

export default function MainPenjahit() {
    return (
        <BrowserRouter>
            <div>
                <h1>main</h1>
                <div>
                    <Routes>
                        <Route path="/" element={<Beranda />} exact />
                    </Routes>
                    <Routes>
                        <Route path="/cari-order" element={<CariOrder />} exact />
                    </Routes>
                    <Routes>
                        <Route path="/orderan-diambil" element={<OrderDiambil />} exact />
                    </Routes>
                    <Routes>
                        <Route path="/riwayat-transaksi" element={<RiwayatTransaksi />} exact />
                    </Routes>
                    <Routes>
                        <Route path="/akun" element={<Akun />} exact />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}