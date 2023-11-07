"use client"
import React from "react";
import Image from "next/legacy/image";
import SideButton from "./components/bottomButton";
import Navbar from "../components/nav";
import { usePathname } from "next/navigation";

const ALLOWED_PATHNAMES = ["/event/cultural", "/event/pronight", "/event/informal", "/event/technical"];

export default function EventLayout(props) {
  const pathname = usePathname();
  const isOverflow = ALLOWED_PATHNAMES.includes(pathname) ? "overflow-y-scroll custom" : "overflow-hidden";
  const navbarBgColor = "bg-[#a85dd1e1]";

  return (
    <>
      <Image
        layout="fill"
        className="object-cover"
        src={"/background_images/events2.jpg"}
        alt={"title"}
        objectFit="center"
        priority={true}
      />
      <Navbar bgcolor={navbarBgColor} />
      <main className="flex flex-col min-h-screen  overflow-x-hidden pt-16 px-16 p-5">
        <div className="w-[50%] flex flex-row justify-start relative z-1  skew-x-12 h-[60vh] my-auto">
          <div className={`p-5  h-full w-full flex bg-[#00000080] border-2 border-purple-400 shadow-md shadow-purple-400 ${isOverflow} text-white`}>
            {props.children}
          </div>
        </div>
        <SideButton />
      </main>
    </>
  );
}
