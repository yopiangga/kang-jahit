import React from "react";
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import { Link } from "react-router-dom"

export function Footer() {
    return (
        <div className="footer w-full flex justify-center pt-20 pb-14">
            <div className="content w-11/12">
                <div className="footer-top flex justify-between">
                    <div className="big-footer w-5/12 pr-5">
                        <h2 className="text-white text-xl font-medium mb-2">Kang <span className="text-indigo-600 font-bold">Jahit</span></h2>
                        <p className="text-indigo-200 text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla exercitationem voluptates sunt ratione eius, nesciunt perferendis soluta? Voluptas, ipsam odio. Culpa veniam ea corporis dolore?</p>
                    </div>
                    <div className="little-footer w-2/12 text-sm">
                        <h4 className="font-medium mb-3">Products</h4>
                        <ul className="text-indigo-200">
                            <li className="mb-1"><Link to="">Web Studio</Link></li>
                            <li className="mb-1"><Link to="">DynamicBox Flex</Link></li>
                            <li className="mb-1"><Link to="">Programming Forms</Link></li>
                        </ul>
                    </div>
                    <div className="little-footer w-2/12 text-sm">
                        <h4 className="font-medium mb-3">Resources</h4>
                        <ul className="text-indigo-200">
                            <li className="mb-1"><Link to="">Web Studio</Link></li>
                            <li className="mb-1"><Link to="">DynamicBox Flex</Link></li>
                            <li className="mb-1"><Link to="">Programming Forms</Link></li>
                        </ul>
                    </div>
                    <div className="little-footer w-2/12 text-sm">
                        <h4 className="font-medium mb-3">Company</h4>
                        <ul className="text-indigo-200">
                            <li className="mb-1"><Link to="">Web Studio</Link></li>
                            <li className="mb-1"><Link to="">DynamicBox Flex</Link></li>
                            <li className="mb-1"><Link to="">Programming Forms</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom flex justify-between items-center mt-16">
                    <div className="text">
                        <h4 className="text-sm text-md">© 2021 Kang Jahit. All rights reserved.</h4>
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