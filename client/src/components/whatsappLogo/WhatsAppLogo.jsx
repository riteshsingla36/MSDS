import React from 'react'
import { Outlet } from 'react-router-dom'
import './whatsapplogo.css'

const WhatsAppLogo = () => {
  return (
    <>
        <a href="https://wa.me/7027166763">
            <img src={require("../../logos/whatsapp.png")} className='whatsapp' alt="whats app"/>
        </a>
        <Outlet />
    </>
  )
}

export default WhatsAppLogo