"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import GlobalFillIcon from "remixicon-react/GlobalFillIcon";
import CloseFillIcon from "remixicon-react/CloseFillIcon";
import AlertFillIcon from "remixicon-react/AlertFillIcon";

const Project = ({ data, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
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
            className="rounded-lg opacity-75 hover:opacity-100 transition-opacity"
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-zinc-800 rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {data.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
                >
                  <CloseFillIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="aspect-video w-full mb-4">
                {data.youtubeId ? (
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/${data.youtubeId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div className="w-full h-full rounded-lg bg-gray-100 dark:bg-zinc-700 flex items-center justify-center">
                    <div className="text-center p-4">
                      <AlertFillIcon className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                      <p className="text-gray-600 dark:text-gray-300">
                        No video preview available for this project
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 text-justify">
                  {data.desc}
                </p>

                <div className="flex flex-col gap-3 mt-6">
                  <a
                    href={data.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-4 py-2 bg-gray-100 dark:bg-zinc-700 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors group"
                    onClick={handleLinkClick}
                  >
                    <GithubFillIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-blue-500" />
                    <span className="truncate text-gray-700 dark:text-gray-200 group-hover:text-blue-500 font-medium">
                      {data.github}
                    </span>
                  </a>
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-x-2 px-4 py-2 bg-gray-100 dark:bg-zinc-700 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-600 transition-colors group"
                    onClick={handleLinkClick}
                  >
                    <GlobalFillIcon className="w-5 h-5 text-gray-700 dark:text-gray-200 group-hover:text-blue-500" />
                    <span className="truncate text-gray-700 dark:text-gray-200 group-hover:text-blue-500 font-medium">
                      {data.link}
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
