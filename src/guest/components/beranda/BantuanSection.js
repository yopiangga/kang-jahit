
import React from 'react'
import { RiUserFollowLine } from 'react-icons/ri'

export function BantuanSection() {

    return (
        <section className="beranda-contact lg:py-20 sm:py-10 mini:py-10 flex w-full justify-center" id="bantuan">
            <div className="content w-11/12 flex lg:flex-row sm:flex-col mini:flex-col">
                <div className="content-left lg:w-1/2 sm:w-full mini:w-full lg:mb-0 sm:mb-5">
                    <div className="icon w-12 h-12 rounded-md shadow-xl bg-gray-900 text-indigo-500 flex justify-center items-center mt-10 mb-5">
                        <RiUserFollowLine className="text-2xl" />
                    </div>
                    <div className="title mb-5">
                        <h2 className="text-2xl font-medium">Layanan Pelanggan 24 Jam</h2>
                    </div>
                    <div className="deskripsi mb-7">
                        <p className="w-11/12">Sampaikan permasalahan anda kepada kami dan kami akan membantu anda mencarikan solusi yang terbaik.</p>
                    </div>

                </div>
                <div className="content-right lg:w-1/2 sm:w-full bg-abstract2 flex justify-end">
                    <form className="bg-transparent shadow-xl py-8 px-8 lg:w-5/6 sm:w-full border-2 border-indigo-200 border-opacity-30">
                        <h2 className="text-xl font-bold mb-3 text-center">Layanan Bantuan</h2>
                        <div className="form-group flex flex-col mb-3">
                            <label className="text-indigo-100 mb-2">Nama anda</label>
                            <input className="border focus:border-indigo-500 bg-transparent text-white focus:outline-none border-gray-400 py-2 px-2" type="text" placeholder="Alfian Prisma yopiangga" />
                        </div>
                        <div className="form-group flex flex-col mb-3">
                            <label className="text-indigo-100 mb-2">Email</label>
                            <input className="border focus:border-indigo-500 bg-transparent text-white focus:outline-none border-gray-400 py-2 px-2" type="text" placeholder="email@email.com" />
                        </div>
                        <div className="form-group flex flex-col mb-5">
                            <label className="text-indigo-100 mb-2">Pesan</label>
                            <textarea className="border focus:border-indigo-500 bg-transparent text-white focus:outline-none border-gray-400 py-2 px-2" rows="3" type="text" placeholder="pesan"></textarea>
                        </div>
                        <button
                            className="p-2 pl-5 pr-5 mr-2 transition-colors border-2 duration-700 flex items-center transform bg-indigo-500 hover:bg-blue-400 text-gray-100 text-md focus:border-4 border-indigo-500"
                        >
                            Kirimkan
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}