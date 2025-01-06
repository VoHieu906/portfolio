"use client";

import Image from "next/image";
import { heroIcons } from "@/assets";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);
  const [buttonHover, setButtonHover] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    x.set(clientX);
    y.set(clientY);
  };

  const handleMouseEnter = () => {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);
  };

  const { innerWidth, innerHeight } = windowOffset;
  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });
  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      className="h-screen grid place-items-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <div className="flex flex-col items-center justify-center gap-y-[0.75rem] font-light capitalize">
          <motion.div
            className="flex items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/person.png"}
              alt="Person Image"
              width={400}
              height={400}
              priority={true}
              className="h-auto w-[9.375rem]" // 150px -> 9.375rem
            />
            <motion.span
              initial={{ scale: 0 }}
              animate={{
                opacity: buttonHover ? 0 : 1,
                scale: buttonHover ? 2 : 0,
                y: buttonHover ? -2.5 : 0, // 40px -> 2.5rem
              }}
              transition={{ opacity: { delay: 0.4 } }}
              className="absolute text-[1.875rem] font-semibold text-white"
            >
              Hi
            </motion.span>
          </motion.div>
          <h1 className="text-center text-[1.875rem] font-bold tracking-wider text-gray-500 sm:text-[1.25rem]">
            My name is Vo Hieu &
          </h1>
          <p className="text-[1rem] tracking-wider text-gray-700">
            I like animations 😁
          </p>
        </div>
        <div className="mt-[2rem] flex justify-center gap-x-[2.5rem] text-[1.875rem] text-yellow-600 sm:text-[1.25rem]">
          {heroIcons.map((icon, i) => (
            <a
              href="#"
              key={i}
              className="hover:bg-red-400 hover:text-white rounded-lg"
            >
              {icon}
            </a>
          ))}
        </div>
        <a
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
          href="#"
          className="mx-auto mt-[1.75rem] block w-max rounded-lg bg-red-400 px-[0.1875rem] py-[0.0625rem] font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
        >
          Talk to me
        </a>
      </div>
    </div>
  );
};

export default Hero;
