"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-center mt-[100px] py-4 text-gray-500">
      &copy; 2025 - {new Date().getFullYear()} 由 糖豆魚（PTD）開發擁有.
    </footer>
  );
}
