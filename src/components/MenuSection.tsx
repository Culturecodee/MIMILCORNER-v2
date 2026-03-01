import Image from "next/image";

const menuItems = [
    {
        id: "nasi-kotak",
        title: "Nasi Kotak",
        description:
            "Paket nasi kotak praktis dengan lauk lengkap dan cita rasa rumahan. Cocok untuk rapat, seminar, reuni, dan berbagai acara.",
        image:
            "https://images.unsplash.com/photo-1585503418537-88331351ad99?w=600&q=80&fit=crop",
        price: "Mulai Rp 15.000",
        tag: "Terlaris",
        tagBg: "rgba(139,99,67,0.10)",
        tagColor: "#8b6343",
    },
    {
        id: "nasi-tumpeng",
        title: "Nasi Tumpeng",
        description:
            "Tumpeng tradisional dengan tampilan megah dan rasa otentik. Sempurna untuk syukuran, ulang tahun, dan acara adat.",
        image:
            "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80&fit=crop",
        price: "Mulai Rp 150.000",
        tag: "Signature",
        tagBg: "rgba(184,148,42,0.12)",
        tagColor: "#b8942a",
    },
    {
        id: "snack-box",
        title: "Snack Box",
        description:
            "Kotak camilan berisi kombinasi kue basah, gorengan, dan minuman segar. Pilihan tepat untuk acara informal dan penyambutan tamu.",
        image:
            "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop",
        price: "Mulai Rp 8.000",
        tag: "Populer",
        tagBg: "rgba(196,168,130,0.20)",
        tagColor: "#5a3e2b",
    },
    {
        id: "paket-event",
        title: "Paket Catering Event",
        description:
            "Solusi catering lengkap untuk hajatan, pernikahan, dan acara perusahaan. Termasuk prasmanan, dekorasi meja, dan tim servis.",
        image:
            "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80&fit=crop",
        price: "Harga Sesuai Kebutuhan",
        tag: "Premium",
        tagBg: "rgba(30,26,22,0.08)",
        tagColor: "#3d3530",
    },
];

export default function MenuSection() {
    return (
        <section id="menu" className="section-pad" style={{ backgroundColor: "#faf8f4" }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8">
                {/* Header */}
                <div className="mb-12 md:mb-16">
                    <p
                        className="text-xs font-semibold tracking-widest uppercase mb-3"
                        style={{ color: "#b8942a" }}
                    >
                        Menu Kami
                    </p>
                    <h2
                        className="font-display text-display-lg underline-accent mb-4"
                        style={{ color: "#1e1a16" }}
                    >
                        Pilihan Sajian Istimewa
                    </h2>
                    <p
                        className="mt-6 max-w-md leading-relaxed text-sm md:text-base"
                        style={{ color: "#7c6c5a" }}
                    >
                        Dimasak dengan resep turun-temurun, menggunakan bahan pilihan segar
                        setiap hari. Pesan kapan saja—kami buka 24 jam.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
                    {menuItems.map((item) => (
                        <article
                            key={item.id}
                            className="group overflow-hidden shadow-card transition-shadow duration-300 hover:shadow-card-hover"
                            style={{
                                backgroundColor: "#ffffff",
                                border: "1px solid #e2d9cc",
                            }}
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(30,26,22,0.30), transparent)",
                                    }}
                                />
                                <span
                                    className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1"
                                    style={{ backgroundColor: item.tagBg, color: item.tagColor }}
                                >
                                    {item.tag}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="p-5">
                                <h3
                                    className="font-semibold text-base mb-2"
                                    style={{ color: "#1e1a16" }}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className="text-xs leading-relaxed mb-4"
                                    style={{ color: "#7c6c5a" }}
                                >
                                    {item.description}
                                </p>
                                <div
                                    className="flex items-center justify-between pt-3.5"
                                    style={{ borderTop: "1px solid #e2d9cc" }}
                                >
                                    <span className="text-xs font-semibold" style={{ color: "#8b6343" }}>
                                        {item.price}
                                    </span>
                                    <a
                                        href={`https://wa.me/6285730349744?text=Halo%20Mimilcorner%2C%20saya%20ingin%20pesan%20${encodeURIComponent(item.title)}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-semibold underline underline-offset-2 transition-colors"
                                        style={{ color: "#8b6343" }}
                                    >
                                        Pesan →
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <a
                        href="https://wa.me/6285730349744?text=Halo%20Mimilcorner%2C%20saya%20ingin%20tanya%20menu%20lengkapnya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 transition-all duration-200"
                        style={{ color: "#8b6343", border: "1px solid #8b6343" }}
                    >
                        Tanya Menu Lengkap via WhatsApp
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
