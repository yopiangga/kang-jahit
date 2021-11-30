import React from "react";

export function NewsCard(props) {

    return (
        <div className="overflow-hidden transition border border-indigo-200 border-opacity-30 duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl h-90 w-60 md:w-80 cursor-pointer mx-4">
            <a href="#" className="w-full block h-full">
                <img alt="blog photo" src={props.image} className="max-h-40 w-full object-cover" />
                <div className="bg-transparent w-full p-4">
                    <p className="text-xl font-bold">
                        {props.title}
                    </p>
                    <div className="flex flex-wrap justify-starts items-center py-3 text-xs text-white font-medium">
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                            {props.tags[0]}
                        </span>
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                            {props.tags[1]}
                        </span>
                        <span className="m-1 px-2 py-1 rounded bg-indigo-500">
                            {props.tags[2]}
                        </span>
                    </div>

                    <p className="text-gray-600 font-light text-md mb-3">
                        {props.description}
                    </p>
                    <hr className="border-indigo-200 opacity-10 w-full" />
                    
                    <div className="flex items-center mt-3">
                        <img className='w-10 h-10 object-cover rounded-full' alt='User avatar' src={props.author.image} />

                        <div className="pl-3">
                            <div className="font-medium">
                                {props.author.name}
                            </div>
                            <div className="text-gray-600 text-sm">
                                {props.author.job}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}