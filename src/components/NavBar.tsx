"use client";
import { usePathname } from "next/navigation";
import { House, Users, CalendarCheck, CheckCheck } from "lucide-react";
import { motion } from "framer-motion";
import React, { ReactElement } from "react";
import { Discord, Line, Telegram } from "react-bootstrap-icons";

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 mb-2 bg-white opacity-100 backdrop-blur-[10px] border-b-gray-300 border-1 z-[999]">
      <div className="w-auto h-[55px] text-[17px] flex items-center content-between justify-between max-w-[70%] mx-auto z-[100]">
        <Link
          href={"/"}
          className="grid gap-4 grid-flow-col auto-cols-max px-4 py-2.5 items-center justify-center text-[20px] font-medium"
        >
          aLivePaper
        </Link>
        <div className="grid gap-4 grid-flow-col auto-cols-max px-4 py-2.5 items-center justify-center">
          <Link
            href={"https://discord.gg/bAuKcwCqwX"} target="_blank"
            className="text-gray-500 hover:text-gray-600 text-[14px] duration-200"
          >
            Discord支援
          </Link>
          <Link
            href={"/download"}
            className="text-white text-[14px] bg-blue-500 px-2.5 py-0.5 rounded-4xl hover:bg-blue-700 duration-200"
          >
            下載
          </Link>
        </div>
      </div>
    </div>
  );
}
