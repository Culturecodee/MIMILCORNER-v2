"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Galeri", href: "#galeri" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                backgroundColor: scrolled ? "rgba(250,248,244,0.97)" : "rgba(250,248,244,0.92)",
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
                boxShadow: scrolled ? "0 1px 0 0 #e2d9cc" : "none",
            }}
        >
            <div className="max-w-6xl mx-auto px-5 md:px-8">
                <div className="flex items-center justify-between h-16 md:h-[72px]">
                    {/* Logo */}
                    <Link
                        href="#home"
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 no-underline"
                    >
                        <span
                            className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "#8b6343" }}
                        >
                            <span className="text-xs font-bold tracking-wider" style={{ color: "#faf8f4" }}>
                                MC
                            </span>
                        </span>
                        <div className="leading-none">
                            <span
                                className="block text-sm font-bold tracking-wide uppercase"
                                style={{ color: "#1e1a16" }}
                            >
                                Mimil
                            </span>
                            <span
                                className="block text-xs tracking-widest uppercase"
                                style={{ color: "#7c6c5a" }}
                            >
                                Corner
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-7">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium transition-colors duration-200 relative group"
                                style={{ color: "#3d3530" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#8b6343")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#3d3530")}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/6285730349744"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors duration-200"
                            style={{ backgroundColor: "#8b6343", color: "#faf8f4" }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#5a3e2b")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#8b6343")}
                        >
                            Pesan Sekarang
                        </a>
                    </nav>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                    >
                        <span
                            className="block w-6 h-0.5 transition-all duration-300"
                            style={{
                                backgroundColor: "#1e1a16",
                                transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
                            }}
                        />
                        <span
                            className="block w-6 h-0.5 transition-all duration-300"
                            style={{
                                backgroundColor: "#1e1a16",
                                opacity: menuOpen ? 0 : 1,
                            }}
                        />
                        <span
                            className="block w-6 h-0.5 transition-all duration-300"
                            style={{
                                backgroundColor: "#1e1a16",
                                transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
                            }}
                        />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className="md:hidden overflow-hidden transition-all duration-300"
                style={{
                    maxHeight: menuOpen ? "400px" : "0px",
                    opacity: menuOpen ? 1 : 0,
                    borderTop: menuOpen ? "1px solid #e2d9cc" : "none",
                    backgroundColor: "#faf8f4",
                }}
            >
                <nav className="max-w-6xl mx-auto px-5 py-4 flex flex-col gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="py-2.5 text-sm font-medium transition-colors"
                            style={{
                                color: "#3d3530",
                                borderBottom: "1px solid #e2d9cc",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/6285730349744"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 w-full text-center py-3 text-sm font-semibold transition-colors"
                        style={{ backgroundColor: "#8b6343", color: "#faf8f4" }}
                    >
                        Pesan Sekarang
                    </a>
                </nav>
            </div>
        </header>
    );
}
