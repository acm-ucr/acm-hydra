import React from 'react'
import { FaCheck } from "react-icons/fa"
import { GiCancel } from "react-icons/gi"

const Snackbar = ({ snackbarType, message }) => {
    return (
        <div className="flex items-center rounded shadow-md overflow-hidden max-w-xl fixed top-24 left-2/4 -translate-x-1/2 -translate-y-1/2 dark:bg-gray-900 dark:text-gray-100">
            <div className="self-stretch flex items-center px-4 flex-shrink-0 dark:bg-gray-700 dark:text-violet-400">
                {
                    snackbarType === "error" ? <GiCancel className="text-3xl" /> : <FaCheck className="text-3xl" />
                }
            </div>
            <div className="p-4 flex-1">
                <h3 className="text-xl font-bold">{
                    snackbarType === "error" ? "Error!" : "Success!"
                }</h3>
                <p className="text-sm dark:text-gray-400">
                    {
                        message
                    }
                </p>
            </div>
            <button className="absolute top-2 right-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 p-2 rounded cursor-pointer">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
            </button>
        </div>
    )
};

export default Snackbar