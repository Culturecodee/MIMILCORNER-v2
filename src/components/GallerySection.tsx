import Image from "next/image";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80&fit=crop",
        alt: "Nasi Tumpeng tradisional untuk syukuran",
        tall: true,
    },
    {
        src: "https://images.unsplash.com/photo-1585503418537-88331351ad99?w=600&q=80&fit=crop",
        alt: "Nasi kotak dengan lauk lengkap",
        tall: false,
    },
    {
        src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80&fit=crop",
        alt: "Hidangan Indonesia autentik",
        tall: false,
    },
    {
        src: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80&fit=crop",
        alt: "Meja catering event prasmanan",
        tall: false,
    },
    {
        src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80&fit=crop",
        alt: "Aneka kue dan snack box",
        tall: false,
    },
    {
        src: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80&fit=crop",
        alt: "Persiapan memasak masakan tradisional",
        tall: false,
    },
];

export default function GallerySection() {
    return (
        <section id="galeri" className="section-pad" style={{ backgroundColor: "#faf8f4" }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8">
                {/* Header */}
                <div className="mb-10 md:mb-12">
                    <p
                        className="text-xs font-semibold tracking-widest uppercase mb-3"
                        style={{ color: "#b8942a" }}
                    >
                        Galeri
                    </p>
                    <h2
                        className="font-display text-display-lg underline-accent"
                        style={{ color: "#1e1a16" }}
                    >
                        Sekilas Karya Kami
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {galleryImages.map((img, i) => (
                        <div
                            key={i}
                            className="relative overflow-hidden group"
                            style={{
                                height: i === 0 ? "400px" : "190px",
                                gridRow: i === 0 ? "span 2" : "span 1",
                            }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 640px) 50vw, 33vw"
                            />
                            <div
                                className="absolute inset-0 transition-all duration-300 group-hover:opacity-100 opacity-0"
                                style={{ backgroundColor: "rgba(30,26,22,0.30)" }}
                            />
                            <div
                                className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                            >
                                <p className="text-xs font-medium" style={{ color: "#faf8f4" }}>
                                    {img.alt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                    <p className="text-sm" style={{ color: "#7c6c5a" }}>
                        Ingin lihat lebih banyak?{" "}
                        <a
                            href="https://wa.me/6285730349744?text=Halo%20Mimilcorner%2C%20saya%20ingin%20lihat%20galeri%20lengkap"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold hover:underline"
                            style={{ color: "#8b6343" }}
                        >
                            Hubungi kami via WhatsApp
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
