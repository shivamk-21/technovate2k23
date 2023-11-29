import React from 'react'
import Link from 'next/link'
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'

const footerData = [
  {
    link: "#",
    icon: <BsTwitter />
  },
  {
    link: "#",
    icon: <BsFacebook />
  },
  {
    link: "#",
    icon: <BsInstagram />
  },
  {
    link: "#",
    icon: <BsLinkedin />
  },
]

export default function Footer() {
  return (
    <footer className="shadow-inner shadow-slate-700  p-4 flex flex-col justify-center items-center mt-9 gap-4 w-full">
      <div className="flex space-x-4 ">
        {footerData.map((item, index) => {
          return <Link href={item.link} className="text-slate-100 hover:text-pink-600" key={index}>
            {item.icon}
          </Link>
        }
        )}
      </div>
      <div className="flex flex-col font-cyberway tracking-[0.3rem] items-center justify-center gap-2 ">
        <p className="text-slate-100 text-xs pink_selector">© 2024 Technovate - All Rights Reserved.</p>
        <p className="text-slate-100 text-[0.4rem] pink_selector">Website Created and crafted by Deepesh Agrawal and Team</p>
      </div>
    </footer>
  )
}
