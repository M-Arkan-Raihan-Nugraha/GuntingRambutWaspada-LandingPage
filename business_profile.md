# Business Profile — Landing Page Gunting Rambut Waspada

**Nama Proyek:** Landing Page Gunting Rambut Waspada  
**Jenis:** Website Landing Page (Static Single Page Application)  
**Platform:** Web (Desktop & Mobile Responsive)  
**Tech Stack:** React 19 + TypeScript + Vite + Tailwind CSS v4 + Framer Motion  
**Deployment:** Single HTML file (vite-plugin-singlefile)

---

## 1. SHEET: ALUR NARASI

> Format: Copy ke kolom spreadsheet — **Bagian | Deskripsi Narasi**

| Bagian | Deskripsi Narasi |
|--------|-----------------|
| **Latar Belakang** | Gunting Rambut Waspada adalah usaha pangkas rambut legendaris di Cianjur yang telah berdiri sejak tahun 1982 oleh H. Asep Waspada. Usaha ini telah berpindah lokasi sebanyak 4 kali dan tetap mempertahankan pelanggan setia lintas generasi. Landing page ini dibuat sebagai media profil digital untuk memperkenalkan usaha kepada calon pelanggan baru dan memberikan informasi lengkap (layanan, harga, lokasi, kontak) secara online. |
| **Tujuan Proyek** | Membangun landing page profesional yang menampilkan profil bisnis barbershop secara lengkap, responsif, dan menarik. Mendukung calon pelanggan untuk menemukan lokasi, mengetahui harga, dan menghubungi via WhatsApp dengan mudah. |
| **Alur Pengunjung** | 1. Pengunjung membuka website → disambut dengan Hero Section (nama usaha, tagline, CTA "Lihat Lokasi" dan "Hubungi WhatsApp"). |
| | 2. Scroll ke bawah → melihat sejarah perjalanan usaha (Tentang Kami + Timeline lokasi dari 1982 hingga 2025). |
| | 3. Melihat Daftar Harga → Potong Rambut Anak-anak Rp15.000 dan Dewasa Rp20.000, dilengkapi jam operasional (24 jam Senin-Sabtu, tutup Minggu). |
| | 4. Melihat Keunggulan → 6 poin unggulan (Legendaris, Harga Terjangkau, Cepat, Ribuan Pelanggan, Pangkas Tradisional, Buka 24 Jam). |
| | 5. Mengenal Tim Barber → Profil 4 barber (H. Asep Waspada, Acong, Kang Dede, Kang Deni) dengan foto dan deskripsi. |
| | 6. Melihat Galeri → Foto hasil potongan dan suasana tempat, dengan filter berdasarkan kategori (Dewasa, Anak-anak, Teknik, Tempat, Interior). |
| | 7. Membaca Testimoni → 6 testimoni pelanggan setia dengan rating bintang dan carousel navigasi. |
| | 8. Menemukan Lokasi → Embed Google Maps Street View, alamat lengkap, patokan lokasi, jam operasional, dan tombol CTA (WhatsApp + Google Maps). |
| | 9. CTA Akhir (Footer) → Ajakan "Belum Pernah Coba? Waktunya Sekarang!" dengan tombol WhatsApp dan Lihat Lokasi. |
| **Target Pengguna** | Warga Cianjur dan sekitarnya (pria dewasa dan anak-anak) yang mencari tempat pangkas rambut terpercaya, terjangkau, dan buka 24 jam. |
| **Keunikan Bisnis** | Berdiri sejak 1982 (40+ tahun), buka 24 jam nonstop (Senin-Sabtu), harga mulai Rp15.000, sudah 4x pindah lokasi namun pelanggan tetap setia. |

---

## 2. SHEET: DIAGRAM

> Format: Copy ke kolom spreadsheet — **Jenis Diagram | Keterangan | File/Link**

| Jenis Diagram | Keterangan | File/Link |
|---------------|------------|-----------|
| **Sitemap / Struktur Halaman** | Peta navigasi satu halaman (SPA) dengan 9 section yang saling terhubung melalui scroll navigation | Lihat di bawah |
| **Component Tree** | Hierarki komponen React: App → Navbar, Hero, About, Pricing, Features, Team, Gallery, Testimonials, Location, Footer | Lihat di bawah |
| **User Flow** | Alur pengunjung dari landing → scroll/klik navigasi → eksplorasi konten → konversi (WhatsApp/Google Maps) | Lihat di bawah |

### Sitemap (Mermaid)

```
App (Single Page)
├── Navbar (Fixed Top, Responsive)
├── Hero Section (#hero)
├── About Section (#about) + Timeline
├── Pricing Section (#pricing) + Jam Operasional
├── Features Section (#features)
├── Team Section (#team)
├── Gallery Section (#gallery) + Filter Tags
├── Testimonials Section (#testimonials) + Carousel
├── Location Section (#location) + Google Maps Embed
└── Footer (CTA + Navigasi + Informasi)
```

### Component Tree

```
App.tsx
├── Navbar.tsx
│   ├── Logo (image)
│   ├── Desktop Nav Links (7 menu)
│   ├── CTA Button (WhatsApp)
│   └── Mobile Menu (AnimatePresence)
├── Hero.tsx
│   ├── Background Image + Overlay
│   ├── Title + Subtitle
│   ├── CTA Buttons (Lokasi + WhatsApp)
│   └── Stats (40+ Tahun, 4x Pindah, 1000+ Pelanggan)
├── About.tsx
│   ├── Header Section
│   ├── Image + Text Grid
│   ├── Feature Icons (4 items)
│   └── TimelineItem[] (3 events: 1982, 1994, 2025)
├── Pricing.tsx
│   ├── Pricing Cards (Anak-anak Rp15K, Dewasa Rp20K)
│   └── Jam Operasional Card
├── Features.tsx
│   └── Feature Cards (6 items grid)
├── Team.tsx
│   └── Team Member Cards (4 members)
├── Gallery.tsx
│   ├── Filter Tags (6 tags)
│   └── Gallery Grid (5 items, filterable)
├── Testimonials.tsx
│   ├── Desktop: 3-column carousel
│   ├── Mobile: Single card swipe
│   ├── Navigation (Prev/Next + Dots)
│   └── Stats Bar (Rating, Pelanggan, Tahun)
├── Location.tsx
│   ├── Google Maps Embed (Street View)
│   ├── Address Detail
│   ├── Hours Info
│   ├── Pricing Quick Reference
│   ├── CTA Buttons (WhatsApp + Google Maps)
│   └── Landmark Info
└── Footer.tsx
    ├── CTA Section ("Waktunya Sekarang!")
    ├── Brand + Tagline
    ├── Navigation Links (8 items)
    └── Contact Info
```

---

## 3. SHEET: THIRD PARTY

> Format: Copy ke kolom spreadsheet — **Layanan | Deskripsi | Detail Konfigurasi**

| Layanan | Deskripsi | Detail Konfigurasi |
|---------|-----------|-------------------|
| **Google Maps Embed** | Menampilkan lokasi barbershop dalam bentuk Street View embed di section Lokasi | URL Embed: `https://www.google.com/maps/embed?pb=!4v1778553588572...` — Mode: Street View (iframe) |
| **Google Maps Link** | Link navigasi langsung ke Google Maps untuk petunjuk arah | URL: `https://maps.app.goo.gl/D73eDjm2JXJWCHj67` |
| **WhatsApp API** | Tombol CTA langsung menghubungi barbershop via WhatsApp | URL: `https://wa.me/6289690448899` — Digunakan di: Navbar, Hero, Pricing, Location, Footer |
| **Google Fonts** | Font kustom untuk tipografi premium | Font: Playfair Display (heading), Lora (subheading), Inter (body) |
| **Lucide React** | Library ikon SVG untuk elemen UI | Paket: `lucide-react ^1.14.0` — Ikon: Scissors, MapPin, Clock, Star, Heart, dll. |
| **Framer Motion** | Library animasi untuk micro-interactions dan scroll animations | Paket: `framer-motion ^12.38.0` — Fitur: useInView, whileInView, AnimatePresence |
| **Vite** | Build tool dan development server | Paket: `vite 7.3.2` — Plugin: `@vitejs/plugin-react`, `vite-plugin-singlefile` |
| **Tailwind CSS v4** | Utility-first CSS framework untuk styling | Paket: `tailwindcss 4.1.17` — Plugin: `@tailwindcss/vite` |

---

## 4. SHEET: FITUR

> Format: Copy ke kolom spreadsheet — **No | Nama Fitur | Deskripsi | Prioritas | Status**

| No | Nama Fitur | Deskripsi | Prioritas | Status |
|----|-----------|-----------|-----------|--------|
| 1 | **Hero Section** | Tampilan pembuka dengan background image, judul usaha, tagline "Legenda Gunting Rambut di Cianjur Sejak 1982", statistik (40+ Tahun, 4x Pindah, 1000+ Pelanggan), serta tombol CTA Lihat Lokasi dan Hubungi WhatsApp | Tinggi | ✅ Complete |
| 2 | **Tentang Kami** | Profil bisnis dengan foto, deskripsi sejarah 40+ tahun, 4 poin keunggulan (Pangkas Tradisional, Pelayanan Cepat, Harga Terjangkau, Ribuan Pelanggan) | Tinggi | ✅ Complete |
| 3 | **Timeline Lokasi** | Perjalanan lokasi usaha dalam format timeline interaktif (1982: Pasar Ramayana → 1994: Jl. Siliwangi Pemda → 2025: Dekat PWI Cianjur) dengan animasi scroll | Tinggi | ✅ Complete |
| 4 | **Daftar Harga** | Kartu harga untuk 2 kategori (Anak-anak Rp15.000, Dewasa Rp20.000) dengan detail fitur layanan, badge "Terlaris", dan tombol Booking via WhatsApp | Tinggi | ✅ Complete |
| 5 | **Jam Operasional** | Informasi jam buka: Senin-Sabtu 24 Jam Nonstop, Minggu Tutup. Ditampilkan di Pricing dan Location section | Tinggi | ✅ Complete |
| 6 | **Keunggulan (Why Us)** | Grid 6 kartu keunggulan: Legendaris Sejak 1982, Harga Ramah, Pelayanan Cepat, Ribuan Pelanggan Loyal, Pangkas Tradisional, Buka 24 Jam | Sedang | ✅ Complete |
| 7 | **Tim Barber** | Profil 4 anggota tim (H. Asep Waspada - Pendiri, Acong - Senior Barber, Kang Dede - Barber, Kang Deni - Barber) dengan foto, nama, peran, dan deskripsi | Sedang | ✅ Complete |
| 8 | **Galeri Foto** | Grid galeri foto dengan 5 item dan 6 kategori filter (Semua, Dewasa, Anak-anak, Teknik, Tempat, Interior). Efek hover grayscale-to-color | Sedang | ✅ Complete |
| 9 | **Testimoni Pelanggan** | 6 testimoni pelanggan setia dengan rating bintang 5, carousel desktop (3 kolom) dan mobile (1 card), navigasi prev/next + dots, serta stats bar | Sedang | ✅ Complete |
| 10 | **Lokasi & Maps** | Embed Google Maps Street View, alamat lengkap, patokan lokasi (dekat PWI & Gang Kirana IV), jam operasional, harga ringkas, tombol WhatsApp dan Google Maps | Tinggi | ✅ Complete |
| 11 | **Navigasi Responsif** | Navbar fixed dengan 7 menu navigasi, logo, tombol WhatsApp. Mobile: hamburger menu full-screen dengan animasi | Tinggi | ✅ Complete |
| 12 | **Footer CTA** | Section ajakan final "Belum Pernah Coba? Waktunya Sekarang!" dengan tombol WhatsApp dan Lihat Lokasi, navigasi footer, info kontak | Sedang | ✅ Complete |
| 13 | **Smooth Scroll Navigation** | Scroll halus antar section menggunakan anchor link, diterapkan di Navbar, Hero, dan Footer | Sedang | ✅ Complete |
| 14 | **Scroll-triggered Animations** | Animasi muncul saat section masuk viewport menggunakan Framer Motion (useInView, whileInView) | Rendah | ✅ Complete |
| 15 | **Grayscale-to-Color Effect** | Efek foto grayscale → berwarna saat hover, diterapkan di Hero, About, Team, dan Gallery | Rendah | ✅ Complete |
| 16 | **Responsive Design** | Tampilan responsif untuk semua ukuran layar (mobile, tablet, desktop) menggunakan Tailwind CSS breakpoints | Tinggi | ✅ Complete |

---

## 5. SHEET: ENTITAS

> Format: Copy ke kolom spreadsheet — **No | Nama Entitas | Peran / Fungsi | Deskripsi**

| No | Nama Entitas | Peran / Fungsi | Deskripsi |
|----|-------------|----------------|-----------|
| 1 | **Pengunjung (Visitor)** | Pengguna akhir | Calon pelanggan yang mengakses landing page untuk mengetahui informasi barbershop (harga, lokasi, jam buka, galeri, testimoni). Dapat langsung menghubungi via WhatsApp atau menavigasi ke Google Maps. |
| 2 | **Pemilik Usaha (Owner)** | H. Asep Waspada | Pendiri dan pemilik Gunting Rambut Waspada sejak 1982. Menyediakan konten informasi bisnis (harga, jam buka, lokasi, kontak). |
| 3 | **Tim Barber** | Barber / Penata Rambut | 4 anggota tim yang ditampilkan di section Tim: H. Asep Waspada (Pendiri), Syahrul Anwar/Acong (Senior Barber), Kang Dede (Barber), Kang Deni (Barber). |
| 4 | **Developer** | Pembuat Landing Page | Developer yang membangun dan memelihara website landing page menggunakan React + Vite + TailwindCSS. |

> [!NOTE]
> Karena ini adalah landing page statis (bukan aplikasi transaksional), entitas terbatas pada pengunjung dan pemilik usaha. Tidak ada entitas database, user account, admin panel, atau sistem transaksi.

---

## 6. SHEET: BREAKDOWN BACK-END

> Format: Copy ke kolom spreadsheet — **No | Task | Deskripsi | PIC | Status**

| No | Task | Deskripsi | PIC | Status |
|----|------|-----------|-----|--------|
| 1 | **Setup Project Vite + React** | Inisialisasi project menggunakan Vite 7.3.2 dengan React 19, TypeScript 5.9, dan plugin singlefile | Developer | ✅ Complete |
| 2 | **Konfigurasi Tailwind CSS v4** | Setup TailwindCSS 4.1.17 dengan Vite plugin (`@tailwindcss/vite`) dan konfigurasi custom | Developer | ✅ Complete |
| 3 | **Integrasi Google Fonts** | Import font Playfair Display, Lora, dan Inter untuk tipografi premium | Developer | ✅ Complete |
| 4 | **Google Maps Embed** | Integrasi iframe Google Maps Street View untuk menampilkan lokasi barbershop | Developer | ✅ Complete |
| 5 | **WhatsApp Deep Link** | Setup link WhatsApp (`wa.me/6289690448899`) di seluruh komponen CTA (Navbar, Hero, Pricing, Location, Footer) | Developer | ✅ Complete |
| 6 | **Google Maps Navigation Link** | Setup link navigasi Google Maps (`maps.app.goo.gl/D73eDjm2JXJWCHj67`) di Location section | Developer | ✅ Complete |
| 7 | **Build Optimization** | Konfigurasi `vite-plugin-singlefile` untuk menghasilkan single HTML file pada production build | Developer | ✅ Complete |
| 8 | **Asset Management** | Pengelolaan gambar statis (hero-bg.jpg, waspada.jpg, owner.jpg, acong.png, haircut-1/2/3.jpg, barber-about.jpg, logo.jpeg) di folder `/public/images/` | Developer | ✅ Complete |

> [!NOTE]
> Proyek ini adalah landing page statis tanpa backend server, database, atau API. Semua data di-hardcode dalam komponen React. "Back-End" di sini merujuk pada konfigurasi build tools, integrasi third-party, dan asset management.

---

## 7. SHEET: UI MOBILE / DESKTOP

> Format: Copy ke kolom spreadsheet — **No | Nama Screen/Section | Platform | Komponen UI | PIC | Status**

| No | Nama Screen/Section | Platform | Komponen UI | PIC | Status |
|----|---------------------|----------|-------------|-----|--------|
| 1 | **Navbar** | Desktop & Mobile | Desktop: Logo + 7 nav links + CTA WhatsApp. Mobile: Logo + Hamburger → Full-screen overlay menu dengan AnimatePresence | Developer | ✅ Complete |
| 2 | **Hero Section** | Desktop & Mobile | Background image (grayscale→color on hover), judul (text-5xl→8xl responsive), barber pole divider, subtitle, deskripsi, 2 CTA buttons (Lokasi + WhatsApp), 3 stats cards, scroll indicator | Developer | ✅ Complete |
| 3 | **Tentang Kami** | Desktop & Mobile | Desktop: 2-kolom grid (foto + teks). Mobile: stacked vertical. Foto dengan decorative border + floating badge "1982". 4 feature icons grid | Developer | ✅ Complete |
| 4 | **Timeline Lokasi** | Desktop & Mobile | Desktop: Zig-zag timeline (alternating left-right) dengan center vertical line. Mobile: Linear vertical timeline. 3 event cards (1982, 1994, 2025) dengan dot + connecting line | Developer | ✅ Complete |
| 5 | **Daftar Harga** | Desktop & Mobile | 2 pricing cards grid (Anak Rp15K, Dewasa Rp20K) dengan icon, fitur checklist, badge "Terlaris", CTA Booking. Info box jam operasional di bawah | Developer | ✅ Complete |
| 6 | **Keunggulan** | Desktop & Mobile | Grid responsif: 1 kolom (mobile) → 2 kolom (sm) → 3 kolom (lg). 6 feature cards dengan icon, judul, deskripsi, hover glow effect | Developer | ✅ Complete |
| 7 | **Tim Barber** | Desktop & Mobile | Grid responsif: 1 kolom (mobile) → 2 kolom (sm) → 4 kolom (lg). Card dengan foto (grayscale→color), avatar icon, nama, role, deskripsi. Accent warna berbeda per member (red, amber, blue, stone) | Developer | ✅ Complete |
| 8 | **Galeri Foto** | Desktop & Mobile | 6 filter tag buttons (Semua, Dewasa, Anak-anak, Teknik, Tempat, Interior). Grid: 2 kolom (mobile) → 3 kolom (desktop). Item dengan aspect-square, hover zoom + label overlay | Developer | ✅ Complete |
| 9 | **Testimoni** | Desktop & Mobile | Desktop: 3-column grid carousel. Mobile: Single card. 6 testimoni dengan quote, nama, role, rating bintang, "Pelanggan sejak...". Navigasi prev/next + dot indicators. Stats bar (Rating 5.0, 1000+ Pelanggan, 40+ Tahun) | Developer | ✅ Complete |
| 10 | **Lokasi** | Desktop & Mobile | 2-column grid (lg). Kiri: Google Maps Street View embed + alamat. Kanan: Jam operasional + harga ringkas + CTA WhatsApp + CTA Google Maps + patokan lokasi | Developer | ✅ Complete |
| 11 | **Footer** | Desktop & Mobile | CTA akhir ("Waktunya Sekarang!") + 3-kolom grid (Brand, Navigasi 8 link, Informasi kontak/jam/alamat) + bottom bar copyright | Developer | ✅ Complete |

---

## 8. SHEET: BREAKDOWN FRONT-END

> Format: Copy ke kolom spreadsheet — **No | File / Komponen | Deskripsi | Dependensi | PIC | Status**

| No | File / Komponen | Deskripsi | Dependensi | PIC | Status |
|----|----------------|-----------|------------|-----|--------|
| 1 | **`src/main.tsx`** | Entry point aplikasi. Merender `<App />` ke root DOM | react, react-dom | Developer | ✅ Complete |
| 2 | **`src/App.tsx`** | Root component. Menyusun semua section dalam urutan: Navbar → Hero → About → Pricing → Features → Team → Gallery → Testimonials → Location → Footer. Setup smooth scroll behavior | react (useEffect), semua komponen | Developer | ✅ Complete |
| 3 | **`src/index.css`** | Global styles dan import Tailwind CSS directives | tailwindcss | Developer | ✅ Complete |
| 4 | **`src/components/Navbar.tsx`** | Navigasi utama fixed-top. Responsive: desktop links + CTA, mobile hamburger menu. State: scrolled (bg change), menuOpen (mobile toggle) | react (useState, useEffect), framer-motion (motion, AnimatePresence), lucide-react (Menu, X) | Developer | ✅ Complete |
| 5 | **`src/components/Hero.tsx`** | Hero section full-screen. Background image + gradient overlay + pattern SVG. Animasi: staggered entrance. Barber pole divider (red-white-blue). Stats grid. Scroll-down indicator | framer-motion (motion), lucide-react (MapPin, MessageCircle, ChevronDown) | Developer | ✅ Complete |
| 6 | **`src/components/About.tsx`** | Section profil bisnis + timeline. Grid 2 kolom (foto+text). TimelineItem sub-component dengan zig-zag layout. Data: 3 timeline events hardcoded | react (useRef), framer-motion (motion, useInView), lucide-react (Scissors, MapPin, Landmark, Star, Zap, Banknote, Heart) | Developer | ✅ Complete |
| 7 | **`src/components/Pricing.tsx`** | Kartu harga 2 plan (Anak Rp15K, Dewasa Rp20K). Feature list dengan checkmark. Badge "Terlaris". Jam operasional card. CTA link WhatsApp | react (useRef), framer-motion (motion, useInView), lucide-react (Check, Clock, Sparkles, User, Users) | Developer | ✅ Complete |
| 8 | **`src/components/Features.tsx`** | Grid 6 keunggulan cards. Hover effect: y-translate + scale + border glow. Decorative bg gradient blur | framer-motion (motion), lucide-react (Award, Banknote, Zap, Heart, Scissors, Moon) | Developer | ✅ Complete |
| 9 | **`src/components/Team.tsx`** | Grid 4 member cards. Barber pole accent lines (red-white-blue). Foto grayscale→color. Avatar badge dengan accent color per member | framer-motion (motion), lucide-react (User) | Developer | ✅ Complete |
| 10 | **`src/components/Gallery.tsx`** | Galeri filterable. 6 tag buttons + 5 gallery items. State: activeTag. Filtered rendering. Hover: zoom + overlay label | react (useState), framer-motion (motion) | Developer | ✅ Complete |
| 11 | **`src/components/Testimonials.tsx`** | Carousel testimoni. Desktop: 3-visible-at-once. Mobile: single card. 6 testimoni. State: current index. StarRating sub-component. Stats bar | react (useRef, useState), framer-motion (motion), lucide-react (Award, Briefcase, ChevronLeft/Right, Heart, Star, Trophy, User, Users) | Developer | ✅ Complete |
| 12 | **`src/components/Location.tsx`** | Google Maps Street View embed. Alamat detail. Jam operasional (live status indicator). Harga ringkas. 2 CTA buttons. Patokan lokasi list | framer-motion (motion), lucide-react (CheckCircle, ChevronRight, Clock, MapPin, MessageCircle, Navigation, Scissors, User, Users) | Developer | ✅ Complete |
| 13 | **`src/components/Footer.tsx`** | CTA final section. 3-column footer (Brand, Nav 8 links, Info). Bottom bar dengan copyright + "Dibuat dengan ❤️ untuk Cianjur" | framer-motion (motion), lucide-react (Scissors, MapPin, Clock, MessageCircle, Heart) | Developer | ✅ Complete |

---

## Ringkasan Data Bisnis

| Informasi | Detail |
|-----------|--------|
| **Nama Usaha** | Gunting Rambut Waspada |
| **Pemilik** | H. Asep Waspada |
| **Berdiri Sejak** | 1982 (40+ tahun) |
| **Layanan** | Potong rambut pria dewasa & anak-anak |
| **Harga Anak** | Rp 15.000 |
| **Harga Dewasa** | Rp 20.000 |
| **Jam Buka** | Senin-Sabtu: 24 Jam Nonstop \| Minggu: Tutup |
| **Lokasi** | Di antara Kantor PWI & jembatan Gang Kirana IV, RT 02 RW 21, Cianjur, Jawa Barat |
| **Kontak** | WhatsApp: 089690448899 |
| **Tim** | 4 barber (H. Asep Waspada, Acong, Kang Dede, Kang Deni) |
| **Jumlah Perpindahan** | 4 kali (1982→1994→...→2025) |
| **Google Maps** | https://maps.app.goo.gl/D73eDjm2JXJWCHj67 |
