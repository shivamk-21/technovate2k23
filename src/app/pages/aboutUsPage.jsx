"use client";
import React from "react";
import { useEffect, useState } from "react";

export default function AboutUsPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fontSize = 15 - scrollY / 160;

  return (
    <>
      <div className="relative overflow-hidden w-full">
        <section class="pt-32 pb-32 relative">
          <div
            class="absolute w-full h-full top-0 left-0 bg-cover bg-center bg-no-repeat  bg-fixed"
            style={{
              backgroundImage: `url(/test2.jpg)`,
            }}
          ></div>
          <h1 class="font-Michroma text-white display-2 text-center relative max-w-[80rem] mx-auto font-bold tracking-widest bg-[#14101063] p-10 border-2 border-x-slate-50 rounded-xl">
            " Technovate, the annual symphony of technology and culture at
            IIIT-NR, is a splendid convergence of mind and artistry. In the
            enchanting month of November, this grand affair unfurls a spectacle
            of brilliance that encompasses enthralling Coding competitions,
            electrifying Hacking Competitions, pulsating Battle of Bands, and
            captivating keynote sessions by luminaries from the realms of
            innovation and creativity. Over the course of three extraordinary
            days, Technovate unveils a dynamic world, carefully designed to
            cultivate inventive thinking and unveil the brilliance of human
            potential. It serves as a majestic platform for not only unveiling
            ingenious ideas but also for showcasing one's cultural virtuosity,
            spanning from captivating stand-up performances to the soul-stirring
            melodies of renowned singers and the pulsating beats of EDM. In the
            previous edition, Technovate witnessed the enthusiasm of more than
            5000 participants, each leaving their unique mark on this grand
            canvas. In this year's edition, as the scale of the event expands
            and the anticipation grows, we envisage an even greater turnout of
            over 7000+ participants. At its core, Technovate is a dynamic oasis
            that empowers students to celebrate their skills and passions in the
            fields of their dreams. "
          </h1>
        </section>
        <section class="h-fit overflow-hidden">
          <p
            className=" text-center font-Chakra font-extrabold tracking-widest text-7xl text-black "
            style={{ fontSize: `${fontSize}rem` }}
          >
            ARE YOU READY
          </p>
        </section>
      </div>
    </>
  );
}