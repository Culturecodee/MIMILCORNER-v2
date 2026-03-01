import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-16"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=85&fit=crop"
                    alt="Hidangan catering Indonesia yang lezat"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(to right, rgba(30,26,22,0.88) 0%, rgba(30,26,22,0.6) 50%, rgba(30,26,22,0.2) 100%)",
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 py-2">
                <div className="">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span
                            className="text-xs font-semibold tracking-widest uppercase px-3 py-1"
                            style={{
                                color: "#86efac",
                                border: "1px solid rgba(134,239,172,0.4)",
                            }}
                        >
                            Buka 24 Jam
                        </span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="font-display text-display-xl leading-tight mb-5"
                        style={{ color: "#faf8f4" }}
                    >
                        Catering 24 Jam di Malang untuk Setiap{" "}
                        <em className="not-italic" style={{ color: "#d4aa47" }}>
                            Momen Spesial
                        </em>{" "}
                        Anda
                    </h1>

                    {/* Supporting Text */}
                    <p
                        className="text-base md:text-lg font-light leading-relaxed mb-8 max-w-md"
                        style={{ color: "rgba(250,248,244,0.80)" }}
                    >
                        Dari nasi kotak sederhana hingga tumpeng megah—Mimilcorner hadir
                        dengan masakan rumahan yang autentik, bahan-bahan segar, dan
                        pelayanan penuh perhatian.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://wa.me/6285730349744?text=Halo%20Mimilcorner%2C%20saya%20ingin%20pesan%20catering"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold transition-colors duration-200"
                            style={{ backgroundColor: "#8b6343", color: "#faf8f4" }}
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Pesan Sekarang
                        </a>
                        <Link
                            href="#menu"
                            className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold transition-all duration-200"
                            style={{
                                color: "#faf8f4",
                                border: "1px solid rgba(250,248,244,0.4)",
                            }}
                        >
                            Lihat Menu
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>

                    {/* Stats row */}
                    <div
                        className="mt-12 flex items-center gap-6 pt-6"
                        style={{ borderTop: "1px solid rgba(250,248,244,0.20)" }}
                    >
                        {[
                            { num: "24 Jam", label: "Siap Melayani" },
                            { num: "500+", label: "Acara Terlayani" },
                            { num: "100%", label: "Bahan Segar" },
                        ].map((stat) => (
                            <div key={stat.label}>
                                <div className="text-lg font-bold" style={{ color: "#d4aa47" }}>
                                    {stat.num}
                                </div>
                                <div className="text-xs tracking-wide" style={{ color: "rgba(250,248,244,0.60)" }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1">
                <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(250,248,244,0.50)" }}>
                    Scroll
                </span>
                <div
                    className="w-px h-10"
                    style={{ background: "linear-gradient(to bottom, rgba(250,248,244,0.3), transparent)" }}
                />
            </div>
        </section>
    );
}
