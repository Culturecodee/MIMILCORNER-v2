import Image from "next/image";

const features = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
        title: "Resep Turun-temurun",
        desc: "Setiap masakan dibuat menggunakan resep rahasia keluarga yang telah diwariskan lintas generasi dengan cita rasa autentik.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        title: "Bahan Segar Setiap Hari",
        desc: "Bahan-bahan dipilih langsung dari pasar setiap pagi—tanpa pengawet, tanpa shortcuts. Rasa yang jujur untuk momen paling spesial.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
        title: "Terpercaya di Malang",
        desc: "Sudah melayani ratusan keluarga dan instansi di Malang Raya. Kepercayaan Anda adalah prioritas utama kami.",
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: "Buka 24 Jam Penuh",
        desc: "Butuh catering mendadak tengah malam? Tidak masalah. Kami siap menerima pesanan dan melayani Anda tanpa henti, setiap hari.",
    },
];

export default function AboutSection() {
    return (
        <section id="tentang" className="section-pad" style={{ backgroundColor: "#f0ebe1" }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Image side */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative" style={{ height: "420px", overflow: "hidden" }}>
                            <Image
                                src="https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=85&fit=crop"
                                alt="Proses memasak di dapur Mimilcorner"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                        </div>
                        {/* Floating stat card */}
                        <div
                            className="absolute -bottom-5 right-0 md:-right-6 p-4 shadow-card"
                            style={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #e2d9cc",
                                maxWidth: "164px",
                            }}
                        >
                            <div className="text-2xl font-bold font-display" style={{ color: "#8b6343" }}>
                                500+
                            </div>
                            <div
                                className="text-xs mt-1 leading-snug"
                                style={{ color: "#7c6c5a" }}
                            >
                                Acara berhasil terlayani di Malang
                            </div>
                        </div>
                        {/* Decorative accent */}
                        <div
                            className="absolute -top-4 -left-4 w-20 h-20"
                            style={{
                                backgroundColor: "rgba(184,148,42,0.08)",
                                border: "1px solid rgba(184,148,42,0.20)",
                                zIndex: -1,
                            }}
                        />
                    </div>

                    {/* Text side */}
                    <div className="order-1 lg:order-2">
                        <p
                            className="text-xs font-semibold tracking-widest uppercase mb-3"
                            style={{ color: "#b8942a" }}
                        >
                            Tentang Kami
                        </p>
                        <h2
                            className="font-display text-display-lg underline-accent mb-8"
                            style={{ color: "#1e1a16" }}
                        >
                            Masakan yang Dibuat dengan Hati
                        </h2>

                        <p
                            className="leading-relaxed text-sm md:text-base mb-6"
                            style={{ color: "#7c6c5a" }}
                        >
                            Mimilcorner lahir dari kecintaan mendalam pada masakan Indonesia.
                            Berawal dari dapur rumahan di Landungsari, Malang—kami tumbuh
                            menjadi catering pilihan yang dipercaya oleh keluarga, instansi,
                            dan komunitas di Malang Raya.
                        </p>
                        <p
                            className="leading-relaxed text-sm md:text-base mb-8"
                            style={{ color: "#7c6c5a" }}
                        >
                            Kami percaya bahwa makanan bukan sekadar sajian—ia adalah bagian
                            dari kenangan. Itulah mengapa setiap pesanan kami kerjakan dengan
                            penuh perhatian, dari pemilihan bahan hingga penyajian akhir.
                        </p>

                        {/* Feature grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((f) => (
                                <div key={f.title} className="flex gap-3">
                                    <div
                                        className="flex-shrink-0 w-9 h-9 flex items-center justify-center"
                                        style={{
                                            border: "1px solid rgba(139,99,67,0.20)",
                                            color: "#8b6343",
                                            backgroundColor: "rgba(139,99,67,0.05)",
                                        }}
                                    >
                                        {f.icon}
                                    </div>
                                    <div>
                                        <div
                                            className="text-sm font-semibold mb-0.5"
                                            style={{ color: "#1e1a16" }}
                                        >
                                            {f.title}
                                        </div>
                                        <div
                                            className="text-xs leading-relaxed"
                                            style={{ color: "#7c6c5a" }}
                                        >
                                            {f.desc}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
