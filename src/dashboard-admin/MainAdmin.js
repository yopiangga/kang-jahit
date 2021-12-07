import React, { useContext } from 'react';

import {
    Router,
    BrowserRouter,
    Switch,
    Route,
    Routes
} from "react-router-dom";
import { UserContext } from '../context/UserContext';
import { Akun } from './components/akun/Akun';
import { EditAkun } from './components/akun/EditAkun';

import { Beranda } from './components/beranda/Beranda';
import { Navbar } from './components/shareable/Navbar';
import { Sidebar } from './components/shareable/Sidebar';

export default function MainAdmin() {

    const {user, setUser, menuActive, setMenuActive} = useContext(UserContext)

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
                            <Route path="/akun" element={<Akun />} exact />
                        </Routes>
                        <Routes>
                            <Route path="/edit-akun" element={<EditAkun />} exact />
                        </Routes>

                    </div>

                </div>


                <div>

                </div>
            </div>
        </BrowserRouter>
    )
}