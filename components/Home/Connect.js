import React from 'react'
import { FaDiscord, FaInstagram, FaSlack, FaYoutube, FaEnvelope, FaMediumM } from "react-icons/fa"

const Connect = () => {
    return (
        <section className="dark:bg-gray-800 dark:text-gray-100">
            <div className="container p-6 mx-auto space-y-6 text-center lg:p-8 lg:space-y-8">
                <h2 className="text-3xl font-bold">Follow Us on Social Media</h2>
                <div className="flex flex-wrap justify-center lg:justify-between">
                    <FaDiscord className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400" />
                    <FaInstagram className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400" />
                    <FaSlack className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400" />
                    <FaYoutube className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400" />
                    <FaEnvelope className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400" />
                    <FaMediumM className="w-12 h-12 mx-10 my-6 fill-current md:mx-12 lg:m-0 dark:text-gray-400" />
                </div>
            </div>
        </section>
    )
}

export default Connect