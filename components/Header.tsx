"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-navy-dark/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <svg width="36" height="36" viewBox="0 0 180 180" fill="none">
            <polygon points="0,10 46,10 92,150 46,150" fill="#4ea3ff" />
            <polygon points="58,28 120,10 72,102" fill="#e6eef7" />
            <g stroke="#4ea3ff" strokeWidth="6" fill="none" strokeLinecap="round">
              <line x1="70" y1="106" x2="140" y2="106" />
              <line x1="88" y1="130" x2="160" y2="130" />
              <line x1="102" y1="82" x2="152" y2="58" />
            </g>
            <g fill="#4ea3ff">
              <circle cx="140" cy="106" r="6" />
              <circle cx="160" cy="130" r="6" />
              <circle cx="152" cy="58" r="6" />
            </g>
          </svg>
          <span className="font-serif text-xl font-bold tracking-tight">
            <span className="text-light">Verity</span>
            <span className="text-blue">News</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[2px] text-muted transition-colors hover:text-blue"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-mono text-xs uppercase tracking-[2px] text-muted transition-colors hover:text-blue"
          >
            About
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-light transition-transform ${
              menuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-light transition-opacity ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-light transition-transform ${
              menuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-border px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm uppercase tracking-[2px] text-muted"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm uppercase tracking-[2px] text-muted"
            >
              About
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
