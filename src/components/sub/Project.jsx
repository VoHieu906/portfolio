"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import GlobalFillIcon from "remixicon-react/GlobalFillIcon";

const Project = ({ data, index }) => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShow((prevShow) => !prevShow);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring", stiffness: 100 }}
      className="relative w-[21.875rem] sm:w-full h-max border border-yellow-400 rounded-lg overflow-hidden"
    >
      <div className="relative cursor-pointer" onClick={handleClick}>
        <Image
          src={data.url || "/placeholder.svg"}
          alt="Project Image"
          width={400}
          height={400}
          className="rounded-lg opacity-75"
        />
        <motion.div
          initial={false}
          animate={{
            opacity: show ? 1 : 0,
            pointerEvents: show ? "auto" : "none",
          }}
          className="absolute inset-0 bg-white/95 dark:bg-zinc-700/95 p-6 flex flex-col items-center justify-center gap-y-2 overflow-auto"
        >
          <h2 className="text-lg font-bold tracking-wide text-gray-500 dark:text-white">
            {data.name}
          </h2>
          <p className="text-justify text-gray-500 first-letter:pl-2 dark:text-gray-100">
            {data.desc}
          </p>
          <a
            href={data.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-100 flex items-center gap-x-1 hover:text-blue-500 truncate max-w-full"
            onClick={handleLinkClick}
          >
            <GithubFillIcon />
            <span className="truncate">{data.github}</span>
          </a>
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-100 flex items-center gap-x-1 hover:text-blue-500 truncate max-w-full"
            onClick={handleLinkClick}
          >
            <GlobalFillIcon />
            <span className="truncate">{data.link}</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Project;
