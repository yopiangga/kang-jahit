
import React from 'react'
import {
    Router,
    BrowserRouter,
    Switch,
    Route,
    Routes
} from "react-router-dom";
import Bantuan from './BantuanLanding'
import BerandaLanding from './BerandaLanding'
import Penjahit from './PenjahitLanding'
import TentangKami from './TentangKamiLanding'

export default function MainGuest() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BerandaLanding />} exact />
            </Routes>
            <Routes>
                <Route path="/tentang-kami" element={<TentangKami />} exact />
            </Routes>
            <Routes>
                <Route path="/penjahit" element={<Penjahit />} exact />
            </Routes>
            <Routes>
                <Route path="/bantuan" element={<Bantuan />} exact />
            </Routes>
        </BrowserRouter>
    )
}