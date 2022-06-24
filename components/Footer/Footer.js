import React from 'react'
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import "./Footer.css"

const Footer = () => {
    return (
        <div className='footer-wrapper'>

            <div className='footer-icons'>
                <a className='footer-link' href="https://google.com" target="_blank" rel="noreferrer">
                    <HiOutlineMail />
                </a>
                <a className='footer-link' href="https://google.com" target="_blank" rel="noreferrer">
                    <AiOutlineInstagram />
                </a>
                <a className='footer-link' href="https://google.com" target="_blank" rel="noreferrer">
                    <FaDiscord />
                </a>
                <a className='footer-link' href="https://google.com" target="_blank" rel="noreferrer">
                    <AiOutlineGithub />
                </a>
                <a className='footer-link' href="https://google.com" target="_blank" rel="noreferrer">
                    <AiOutlineYoutube />
                </a>
            </div>

            <div className='footer-text'>
                <p className="footer-copyright">&copy; ACM at UCR 2022<br/>
                contact.acmucr@gmail.com</p>
            </div>
        </div>
    )
}

export default Footer