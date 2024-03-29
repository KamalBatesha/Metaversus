"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyle }) => (
  <motion.p
    variants={textContainer}
    // initial="hidden"
    // whileInView="show"
    // viewport={{ once: false, amount: 0.25 }}
    className={`font-normal text-secondary-white text-[14px] ${textStyle} `}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyle }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.99 }}
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyle}`}
  >
    {title}
  </motion.h2>
);
