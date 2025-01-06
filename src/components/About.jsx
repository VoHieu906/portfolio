"use client";
import React from "react";
import Heading from "./sub/Heading";
import Achievements from "./sub/Achievements";
import Image from "next/image";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "@/assets";

const About = () => {
  return (
    <div className="min-h-screen px-[6rem] flex flex-col items-center justify-center">
      <Heading text={"About me"} />
      <div className="w-full flex items-center justify-between md:justify-center">
        <Image
          src={"/about-me.png"}
          alt="About Image"
          height={400}
          width={400}
          className="w-[18.75rem] lg:w-[12.5rem] md:hidden"
        />
        <div className="max-w-[50rem] rounded-xl bg-zinc-100 p-[1.25rem] text-justify">
          <span className="absolute -left-[1.25rem] top-[5rem] scale-[2.5] text-zinc-100 md:hidden">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-[0.1875rem] lg:text-[1rem] sm:text-[0.875rem]">
            {aboutText}
          </p>
          <a
            href="/nick-cv.pdf"
            download=""
            className="w-max flex items-center gap-x-[0.5rem] mt-[1.5rem] rounded-full border-gray-300 bg-red-400 px-[0.75rem] py-[0.5rem] font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements key={i} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;
