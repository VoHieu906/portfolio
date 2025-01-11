"use client";

import Heading from "./sub/Heading";
import { pricingPlans, checkIcon } from "@/assets";
import { motion } from "framer-motion";
const PricingPlans = () => {
  return (
    <div className="py-20" id="pricing">
      <Heading text={"Pricing  Plans"} />
      <div className="h-full flex lg:flex-col items-center justify-between gap-8">
        {pricingPlans.map((plan, i) => (
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            transition={{
              duration: 0.4,
              delay: i * 0.2,
              scale: { duration: 0.15 },
            }}
            key={i}
            className={`sm:w-[16.875rem]  flex flex-col gap-y-6 p-6 border border-red-400 rounded-xl text-gray-600 dark:bg-zinc-700 transition-colors ${
              i === 1
                ? "w-[23.125rem] xl:w-[20rem] bg-white"
                : "w-[21.875rem] xl:w-[18.75rem] bg-zinc-50"
            }`}
          >
            <h1 className="text-3xl lg:text-xl font-light tracking-wide text-center dark:text-white transition-colors">
              {plan.title}
            </h1>
            <span className="text-2xl lg:text-xl text-center dark:text-white transition-colors">
              {plan.pricing}
            </span>
            <ul className="flex flex-col gap-y-2">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex items-center gap-x-3">
                  <span
                    className={`text-2xl ${
                      i === 1 ? "text-red-300" : " text-yellow-500"
                    }`}
                  >
                    {checkIcon}
                  </span>
                  <li className="font-light tracking-wide dark:text-white transition-colors">
                    {feature}
                  </li>
                </div>
              ))}
            </ul>
            <p className="text-sm font-light text-center dark:text-gray-200 transition-colors">
              <span className="font-semibold">Ideal for: </span>
              {plan.recommended}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
