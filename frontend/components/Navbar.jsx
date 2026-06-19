"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10">
      <Link href="/" className="font-bold text-xl">
        MemoryVault
      </Link>

      <div className="flex gap-6">
        <Link href="/upload">Upload</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/search">Search</Link>
      </div>
    </nav>
  );
}