"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { STRATEGIST_NAME } from "../data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Navbar */}
      <div
        className={`transition-all duration-300 w-full ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 py-3 shadow-sm"
            : "bg-white/40 backdrop-blur-xs border-b border-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Branding */}
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 cursor-pointer group"
            id="nav-logo-btn"
          >
            <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-bold font-sans text-lg border-2 border-black group-hover:bg-neutral-800 transition-colors">
              FA
            </div>
            <div className="text-left font-sans">
              <span className="block text-sm font-bold tracking-wider text-black uppercase">
                {STRATEGIST_NAME}
              </span>
              <span className="block text-[10px] text-neutral-500 font-mono tracking-widest uppercase">
                Semantic SEO & GEO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-xs uppercase tracking-widest text-neutral-600 hover:text-black cursor-pointer font-bold transition-colors duration-200"
                id={`nav-item-${item.name.toLowerCase().replace(" ", "-")}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center bg-cyan-400 hover:bg-cyan-300 text-black font-sans text-xs font-bold uppercase tracking-wider py-2.5 px-5 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 cursor-pointer"
              id="nav-cta-btn"
            >
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black hover:text-cyan-500 p-2 cursor-pointer"
            id="nav-mobile-hamburger"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Slideout */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden bg-white border-b border-neutral-200"
            >
              <div className="px-6 py-6 flex flex-col gap-5">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-left text-sm uppercase tracking-widest text-neutral-600 hover:text-black py-2 border-b border-neutral-100 font-bold"
                    id={`nav-mobile-item-${item.name.toLowerCase().replace(" ", "-")}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center bg-cyan-400 text-black text-xs font-bold uppercase tracking-wider py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                  id="nav-mobile-cta"
                >
                  <span>Book Strategy Call</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
