"use client";

import Logo from "./Logo";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black">
      <div className="flex items-center justify-between h-16 px-6">
        <Logo />
      </div>
    </nav>
  );
}
