"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-dark/90 backdrop-blur-xl">
      {/* Top accent line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan/50 to-transparent" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          {/* Geometric logo mark */}
          <div className="relative flex h-9 w-9 items-center justify-center">
            <div className="absolute inset-0 border border-cyan/30 rotate-45 transition-all duration-300 group-hover:rotate-[55deg] group-hover:border-cyan/60" />
            <div className="absolute inset-1 border border-cyan/15 rotate-45 transition-all duration-300 group-hover:rotate-[35deg]" />
            <span className="relative font-mono text-sm font-bold text-cyan">V</span>
          </div>
          <div className="font-heading text-lg font-bold tracking-tight">
            <span className="text-light">VERITY</span>
            <span className="text-cyan">NEWS</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {[
            { href: "/", label: "Home" },
            { href: "/topics", label: "Topics" },
            { href: "/archive", label: "Archive" },
            { href: "/tips", label: "Tip Line" },
            { href: "/about", label: "About" },
            { href: "/search", label: "Search" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 font-mono text-[10px] uppercase tracking-[2.5px] text-muted transition-colors hover:text-cyan"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[1px] w-5 bg-cyan transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1px] w-5 bg-cyan transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-[1px] w-5 bg-cyan transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-border bg-surface/95 backdrop-blur-xl px-6 py-6 md:hidden">
          <div className="flex flex-col gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/topics", label: "Topics" },
              { href: "/archive", label: "Archive" },
              { href: "/tips", label: "Tip Line" },
              { href: "/about", label: "About" },
              { href: "/team", label: "Team" },
              { href: "/search", label: "Search" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border/50 py-3 font-mono text-xs uppercase tracking-[3px] text-muted transition-colors hover:text-cyan"
              >
                <span className="mr-2 text-cyan/40">//</span>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
