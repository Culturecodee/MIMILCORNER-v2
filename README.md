# 🍽️ MIMILCORNER — Landing Page

Website landing page profesional untuk **MIMILCORNER**, usaha catering rumahan premium berbasis di Indonesia. Dibangun dengan desain modern, elegan, dan berkelas untuk memberikan kesan pertama yang luar biasa kepada calon pelanggan.

---

## ✨ Fitur

- **Navbar Sticky** — navigasi responsif yang mengikuti scroll
- **Hero Section** — tampilan utama dengan headline dan CTA yang kuat
- **Menu Section** — kartu menu terorganisir per kategori
- **About Section** — cerita dan keunggulan bisnis MIMILCORNER
- **Gallery Section** — galeri foto makanan berkualitas tinggi
- **Testimonial Section** — ulasan pelanggan nyata
- **Contact Section** — form kontak dan informasi lengkap
- **Floating WhatsApp Button** — akses cepat ke WhatsApp
- **Footer** — tautan navigasi dan informasi bisnis
- **Fully Responsive** — mobile-first design
- **SEO Ready** — meta tags, structured data, dan semantic HTML

---

## 🛠️ Tech Stack

| Teknologi | Versi |
|---|---|
| [Next.js](https://nextjs.org) | 16.x |
| [React](https://react.dev) | 19.x |
| [TypeScript](https://www.typescriptlang.org) | 5.x |
| [Tailwind CSS](https://tailwindcss.com) | 4.x |

---

## 📁 Struktur Proyek

```
MIMILCORNER/
├── public/             # Aset statis (favicon, gambar, dll)
├── src/
│   ├── app/            # App Router Next.js (layout, page, globals.css)
│   └── components/     # Komponen UI per section
│       ├── Navbar.tsx
│       ├── HeroSection.tsx
│       ├── MenuSection.tsx
│       ├── AboutSection.tsx
│       ├── GallerySection.tsx
│       ├── TestimonialSection.tsx
│       ├── ContactSection.tsx
│       ├── FloatingWhatsApp.tsx
│       └── Footer.tsx
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 🚀 Menjalankan Proyek

### Prasyarat
- Node.js versi **18.x** atau lebih baru
- npm

### Instalasi & Development

```bash
# 1. Clone repositori
git clone <repository-url>
cd MIMILCORNER

# 2. Install dependensi
npm install

# 3. Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat hasilnya.

### Perintah Lainnya

```bash
npm run build   # Build untuk produksi
npm run start   # Jalankan hasil build produksi
npm run lint    # Cek kualitas kode dengan ESLint
```

---

## 🌐 Deploy

Proyek ini siap di-deploy ke [Vercel](https://vercel.com) — platform resmi dari tim Next.js.

1. Push kode ke GitHub / GitLab
2. Import repositori di [vercel.com/new](https://vercel.com/new)
3. Klik **Deploy** — selesai!

---

> Dibuat dengan ❤️ oleh **Culture Code** untuk **MIMILCORNER**
