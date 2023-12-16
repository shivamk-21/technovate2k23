"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"


const style = "shadow-inner card border-2 md:text-xs text-[0.4rem]  text-center font-cyberblack  tracking-widest p-1 md:p-3 uppercase w-fit-content md:w-36 hover:scale-110 transition-all duration-300"

export default function LandingPage() {

  const pathname = usePathname();
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 60,
        duration: 2,
        delay: 1,
      }
    },

  }


  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      className="flex flex-row md:w-[40%]  w-full gap-4 text-purple-300 items-center justify-center place-self-center">
      <Link className={`${style} ${pathname.startsWith("/team/technical") ? "shadow-pink-400 border-pink-400 text-pink-300" : "text-cyan-100 border-cyan-400 shadow-cyan-300"}`} href={"/team/technical"}>technical</Link>
      <Link className={`${style} ${pathname.startsWith("/team/outlook") ? "shadow-pink-400 border-pink-400 text-pink-300" : "text-cyan-100 border-cyan-400 shadow-cyan-300"}`} href={"/team/outlook"}>Outlook</Link>
      <Link className={`${style} ${pathname.startsWith("/team/HeadCoordinator") ? "shadow-pink-400 border-pink-400 text-pink-300" : "text-cyan-100 border-cyan-400 shadow-cyan-300"}`} href={"/team/HeadCoordinator"}>Head</Link>
      <Link className={`${style} ${pathname.startsWith("/team/sponsership") ? "shadow-pink-400 border-pink-400 text-pink-300" : "text-cyan-100 border-cyan-400 shadow-cyan-300"}`} href={"/team/sponsership"}>Sponsership</Link>
      <Link className={`${style} ${pathname.startsWith("/team/marketing") ? "shadow-pink-400 border-pink-400 text-pink-300" : "text-cyan-100 border-cyan-400 shadow-cyan-300"}`} href={"/team/marketing"}>Marketing</Link>
    </motion.div>
  )
}
