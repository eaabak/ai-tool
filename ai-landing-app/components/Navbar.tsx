"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./ui/button";
import Logo from "./Logo";

const navItems = [
  { href: "#features", label: "Özellikler" },
  { href: "#pricing", label: "Fiyatlandırma" },
  { href: "#testimonials", label: "Referanslar" },
  { href: "#blog", label: "Blog & Docs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/60 bg-white/70 backdrop-blur dark:border-neutral-800/60 dark:bg-neutral-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" className="px-4">Giriş</Button>
            <Button className="px-5">Ücretsiz Dene</Button>
          </div>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800" onClick={() => setOpen((v) => !v)}>
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Button variant="ghost">Giriş</Button>
                <Button>Ücretsiz Dene</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}