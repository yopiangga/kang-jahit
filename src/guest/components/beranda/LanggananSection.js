import React from 'react';

export function LanggananSection() {

    return (
        <div className="w-full flex justify-center pt-0 pb-14" id="langganan">
            <div className="content w-11/12">
                <h1 className="text-4xl text-center text-indigo-50 w-3/5 mx-auto font-bold mt-10 mb-8">Biaya berlangganan layanan Kang <span className="text-indigo-500">Jahit</span></h1>
                <h4 className="text-lg text-center text-indigo-200 w-3/5 mx-auto">Mulai mencoba layanan kami dengan paket uji coba selama satu bulan secara gratis</h4>

                <div class="flex flex-col sm:flex-col lg:flex-row xl:flex-row md:flex-row justify-center items center container mt-12 mb-16">
                    <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30" data-aos={"fade-left"}>
                        <h1 class="text-gray-500 font-semibold text-xl ">Percobaan</h1>
                        <div class="text-center py-4 px-7">
                            <h1 class="text-gray-700 text-4xl font-black">GRATIS</h1>
                            <p class="text-gray-500  mt-2">1 bulan pertama</p>

                        </div>
                        <div class="h-px bg-gray-200"></div>
                        <div class="text-center mt-3">
                            <p class="text-sm text-gray-400">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                        <button class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-dark hover:shadow-xl duration-200 hover:bg-gray-800">Langganan</button>
                    </div>
                    <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-indigo-500 transform scale-1 sm:scale-1 md:scale-105 lg:scale-105 xl:scale-105 z-40  shadow-none sm:shadow-none md:shadow-xl lg:shadow-xl xl:shadow-xl">
                        <h1 class="text-indigo-200 font-semibold text-xl ">Pro</h1>
                        <div class="text-center py-4 px-7">
                            <h1 class="text-white text-4xl font-black">Rp199K</h1>
                            <p class="text-white text-opacity-50 mt-2">Perbulan</p>

                        </div>
                        <div class="h-px bg-indigo-400"></div>
                        <div class="text-center mt-3">
                            <p class="text-sm text-white text-opacity-80">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                        <button class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-indigo-400 hover:shadow-xl duration-200 hover:bg-indigo-800">Langganan</button>
                    </div>
                    <div class="py-12 sm:py-12 md:py-6 lg:py-6 xl:py-6 px-8 w-full md:max-w-min sm:w-full bg-white z-30" data-aos={"fade-right"}>
                        <h1 class="text-gray-500 font-semibold text-xl ">Enterprise</h1>
                        <div class="text-center py-4 px-7">
                            <h1 class="text-gray-700 text-4xl font-black">Rp299K</h1>
                            <p class="text-gray-500  mt-2">Perbulan</p>

                        </div>
                        <div class="h-px bg-gray-200"></div>
                        <div class="text-center mt-3">
                            <p class="text-sm text-gray-400">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            </p>
                        </div>
                        <button class="w-full mt-6 mb-3 py-2 text-white font-semibold bg-dark hover:shadow-xl duration-200 hover:bg-gray-800">Langganan</button>
                    </div>
                </div>

                <hr className="border-indigo-200 opacity-30" />

            </div>
        </div>
    )
}