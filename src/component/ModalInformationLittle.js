import React from "react";

export function ModalInformationLittle(props) {
  if (props.status)
    return (
      <div className="flex flex-col p-8 bg-white shadow-lg hover:shodow-lg rounded-2xl fixed z-40 right-10 bottom-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-indigo-400 bg-blue-50"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <div className="flex flex-col ml-3">
              <div className="font-medium leading-none">{props.title}</div>
              <p className="text-sm text-gray-600 leading-none mt-1">
                {props.description}
              </p>
            </div>
          </div>
          <button
            onClick={props.handleClose}
            className="flex-no-shrink bg-indigo-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-indigo-500 text-white rounded-full"
          >
            Tutup
          </button>
        </div>
      </div>
    );
  else {
    return "";
  }
}
