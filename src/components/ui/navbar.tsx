"use client";

import React, { useEffect, useState, useRef } from "react";
import { X, Menu, Terminal } from "lucide-react";
import Link from "next/link";
import Button from "./Button";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "What We Do", path: "#what-we-do" },
  { name: "How It Works", path: "#how-it-works" },
  { name: "Pricing", path: "#pricing" },
  { name: "FAQ", path: "#faq" },
];

const ctaButton = {
  text: "Book a call",
  link: "#cta",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed z-[999] top-0 inset-x-0">
      <div
        ref={headerRef}
        className={cn(
          "z-[80] w-full transition-all duration-500 ease-in-out bg-transparent",
          {
            "bg-[rgba(248,245,243,0.85)] backdrop-blur-[5px]": isScrolled,
            "bg-[#ffffff]": isOpen,
          }
        )}
      >
        <div className="relative w-full max-w-[1400px] flex items-center py-4 px-4 lg:px-8 mx-auto">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center justify-between gap-4 md:gap-12 w-full">
              <Link
                href="/"
                className="flex items-center gap-2 cursor-pointer pb-[2px]"
              >
                <Terminal className="w-5 h-5 text-[#363338]" />
                <span className="font-semibold text-lg text-[#363338] tracking-tight">
                  Marketing Engine
                </span>
              </Link>

              <nav className="hidden lg:flex justify-between w-full">
                <ul className="relative flex items-center gap-6 xl:gap-6 px-0">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className="font-medium text-[#363338] hover:text-gray-600 py-2"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="hidden lg:flex justify-end items-center gap-3">
                  <Button
                    variant="primary"
                    onClick={() => {
                      document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    withArrow
                    arrowAnimation="click"
                  >
                    {ctaButton.text}
                  </Button>
                </div>
              </nav>
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              className="lg:hidden p-2 top-1 right-3 absolute"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="w-full z-40 lg:hidden h-[100vh] bg-white">
            <div className="h-full pt-0 pb-36 pl-0.5 pr-2 overflow-y-auto bg-white">
              <div className="p-4 pb-10 space-y-6">
                {menuItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-between w-full font-semibold text-lg"
                    >
                      {item.name}
                    </Link>
                  </div>
                ))}

                <div className="flex border-y border-gray-100/75 flex-row gap-4 py-4 flex-wrap">
                  <Button
                    variant="primary"
                    onClick={() => {
                      document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
                      setIsOpen(false);
                    }}
                    withArrow
                    arrowAnimation="click"
                  >
                    {ctaButton.text}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
