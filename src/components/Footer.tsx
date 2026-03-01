import Link from "next/link";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Menu", href: "#menu" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Galeri", href: "#galeri" },
    { label: "Testimoni", href: "#testimoni" },
    { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
    return (
        <footer style={{ backgroundColor: "#1e1a16", color: "rgba(250,248,244,0.70)" }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2.5 mb-4">
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
                                    style={{ color: "#faf8f4" }}
                                >
                                    Mimil
                                </span>
                                <span
                                    className="block text-xs tracking-widest uppercase"
                                    style={{ color: "rgba(250,248,244,0.50)" }}
                                >
                                    Corner
                                </span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(250,248,244,0.60)" }}>
                            Catering 24 jam Malang, spesialis nasi kotak, nasi tumpeng, snack
                            box, dan jajanan pasar dengan cita rasa autentik Indonesia.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3
                            className="text-xs font-semibold uppercase tracking-widest mb-4"
                            style={{ color: "rgba(250,248,244,0.40)" }}
                        >
                            Menu Navigasi
                        </h3>
                        <ul className="space-y-2.5">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm transition-colors"
                                        style={{ color: "rgba(250,248,244,0.60)" }}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3
                            className="text-xs font-semibold uppercase tracking-widest mb-4"
                            style={{ color: "rgba(250,248,244,0.40)" }}
                        >
                            Kontak
                        </h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="tel:+6285730349744"
                                    className="transition-colors"
                                    style={{ color: "rgba(250,248,244,0.60)" }}
                                >
                                    +62 857-3034-9744
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/6285730349744"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors flex items-center gap-1.5"
                                    style={{ color: "#86efac" }}
                                >
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    WhatsApp
                                </a>
                            </li>
                            <li
                                className="leading-relaxed"
                                style={{ color: "rgba(250,248,244,0.60)" }}
                            >
                                Landungsari, Kec. Dau
                                <br />
                                Kabupaten Malang, Jawa Timur
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-400" />
                                <span className="text-xs font-medium" style={{ color: "#86efac" }}>
                                    Buka 24 Jam
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className="mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3"
                    style={{ borderTop: "1px solid rgba(250,248,244,0.10)" }}
                >
                    <p className="text-xs" style={{ color: "rgba(250,248,244,0.30)" }}>
                        &copy; {new Date().getFullYear()} Mimilcorner. Semua hak dilindungi.
                    </p>
                    <p className="text-xs" style={{ color: "rgba(250,248,244,0.30)" }}>
                        Catering 24 Jam Malang · Landungsari, Kab. Malang
                    </p>
                </div>
            </div>
        </footer>
    );
}
