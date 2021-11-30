import React from 'react';
import { FiMessageCircle } from "react-icons/fi";

export function FixedContact() {

    return (
        <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div className="w-full h-full flex">
                <a
                    title="Contact"
                    href="https://wa.me/+6282330410865"
                    target="_blank"
                    className="w-16 h-16 rounded-full bg-indigo-500 transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12 flex justify-center items-center"
                >
                    <FiMessageCircle className="text-3xl text-white block" />
                </a>
            </div>
        </div>
    )
}