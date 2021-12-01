import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import { getAuth, signOut } from "firebase/auth";

export function Akun(){
    const {url, setUrl, user, setUser, menuActive, setMenuActive} = useContext(UserContext)
    
    useEffect(() => {
        setMenuActive("akun-saya");
    }, [])

    const handleLogout = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
          setUser(10)
          window.location = url.baseUrl;
        }).catch((error) => {
          // An error happened.
        });
    }
    
    return (
        <div>
            <section className="relative mt-5 bg-blueGray-200">
                <div className="container mx-auto px-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                        <div className="px-6">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                   
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                    <div className="py-6 px-3 mt-32 sm:mt-0">
                                        <Link to="/edit-akun"
                                            className="bg-indigo-500 active:bg-indigo-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Edit Profile
                                        </Link>
                                        <button onClick={handleLogout}
                                            className="bg-white active:bg-indigo-600 uppercase text-dark font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                        >
                                            Log Out
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                    <div className="flex justify-start py-4 lg:pt-4 pt-8">
                                        <h4>Created At: {new Date(parseInt((user?.tgl_bergabung))).toDateString()}</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <div className="w-full px-4 flex justify-center mb-8">
                                    <div className="relative w-96 flex justify-center">
                                        <img
                                            alt="photo-order"
                                            src={user?.avatar}
                                            className="shadow-xl rounded-lg align-middle border-none max-h-54"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                                    {user?.nama}
                                </h3>
                                <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                        {user?.alamat == "" ? "" : user?.alamat?.results[3]?.formatted_address}
                                </div>
                                <div className="mb-2 text-blueGray-600 mt-10">
                                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                                    {user?.email} - {user?.no_telp}
                                </div>
                               
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}