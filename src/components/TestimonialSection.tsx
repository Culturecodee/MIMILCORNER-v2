const testimonials = [
    {
        name: "Ibu Ratna Dewi",
        location: "Malang Kota",
        event: "Syukuran Keluarga",
        comment:
            "Nasi tumpengnya luar biasa! Tampilannya cantik, rasanya autentik sekali. Semua tamu di acara syukuran kami sangat puas. Pesan lagi pasti!",
        rating: 5,
    },
    {
        name: "Pak Hendra Kusuma",
        location: "Kepanjen, Malang",
        event: "Rapat Kantor",
        comment:
            "Nasi kotaknya enak dan porsinya pas. Harga juga sangat terjangkau untuk kualitas yang didapat. Sudah 3 kali pesan untuk acara kantor, selalu memuaskan.",
        rating: 5,
    },
    {
        name: "Mbak Sari Wulandari",
        location: "Singosari, Malang",
        event: "Pengajian RT",
        comment:
            "Snack box dan jajanan pasarnya bikin nostalgi! Camilan tradisionalnya enak-enak. Yang paling suka kue klepon dan onde-ondenya. Terima kasih Mimilcorner!",
        rating: 5,
    },
    {
        name: "Mas Dika Prasetyo",
        location: "Blimbing, Malang",
        event: "Ulang Tahun",
        comment:
            "Pesen dadakan jam 9 malam untuk acara besok pagi, langsung direspon dan tepat waktu. Pelayanannya cepat dan ramah. Highly recommended!",
        rating: 5,
    },
];

function StarRating({ count }: { count: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5" fill="#b8942a" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialSection() {
    return (
        <section id="testimoni" className="section-pad" style={{ backgroundColor: "#f0ebe1" }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8">
                {/* Header */}
                <div className="mb-10 md:mb-12">
                    <p
                        className="text-xs font-semibold tracking-widest uppercase mb-3"
                        style={{ color: "#b8942a" }}
                    >
                        Testimoni
                    </p>
                    <h2
                        className="font-display text-display-lg underline-accent"
                        style={{ color: "#1e1a16" }}
                    >
                        Yang Pelanggan Katakan
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {testimonials.map((t, i) => (
                        <blockquote
                            key={i}
                            className="p-5 shadow-card flex flex-col"
                            style={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #e2d9cc",
                            }}
                        >
                            <StarRating count={t.rating} />

                            <p
                                className="mt-3 text-sm leading-relaxed flex-1"
                                style={{ color: "#3d3530" }}
                            >
                                &ldquo;{t.comment}&rdquo;
                            </p>

                            <div
                                className="mt-4 pt-4"
                                style={{ borderTop: "1px solid #e2d9cc" }}
                            >
                                <div className="flex items-center gap-2.5">
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                                        style={{
                                            backgroundColor: "rgba(139,99,67,0.10)",
                                            border: "1px solid rgba(139,99,67,0.20)",
                                        }}
                                    >
                                        <span
                                            className="text-xs font-semibold"
                                            style={{ color: "#8b6343" }}
                                        >
                                            {t.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <div
                                            className="text-xs font-semibold"
                                            style={{ color: "#1e1a16" }}
                                        >
                                            {t.name}
                                        </div>
                                        <div
                                            className="text-xs"
                                            style={{ color: "#7c6c5a" }}
                                        >
                                            {t.event} · {t.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </blockquote>
                    ))}
                </div>

                <p className="mt-8 text-center text-xs" style={{ color: "#7c6c5a" }}>
                    Bergabung dengan ratusan pelanggan puas di Malang Raya
                </p>
            </div>
        </section>
    );
}
