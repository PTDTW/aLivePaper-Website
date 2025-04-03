"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Img
import Logo from "@/assets/images/logo.png";
import Hero from "@/assets/images/hero.png";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen w-full mt-[14rem] ">
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-y-[20px]"
        >
          <Image
            src={Logo}
            width={100}
            height={500}
            alt="logo"
            className="w-25 h-auto rounded-2xl"
          />
          <div className="flex flex-col items-center gap-y-2">
            <div className="font-semibold text-3xl bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
              專為 MacOS 用戶提供的動態桌布軟體
            </div>
            <div className="text-gray-600/60">
              用簡單、免費、快速的方式設置屬於自己得動態桌布
            </div>
            <Link
              href={"/download"}
              className="text-white text-[16px] bg-blue-500 px-3.5 py-1 rounded-4xl hover:bg-blue-700 duration-200"
            >
              立即下載
            </Link>
            <div className="text-[12px] text-gray-500">
              MacOS 12.0(Monterey) +
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-[14rem]"
        >
          {/* 背景模糊圓形 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.4, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-[100px] w-[700px] h-[300px] bg-pink-300 rounded-full blur-3xl z-[-1]"
          ></motion.div>

          <Image
            src={Hero}
            alt="HeroImg"
            className="w-200 h-auto rounded-lg shadow-xl shadow-gray-900/90 z-1"
          />
        </motion.div>
      </div>
    </section>
  );
}
