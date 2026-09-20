import { ASSETS } from "@/lib/assets";

export interface MenuItem {
  id: string;
  name: string;
  category: "pempek" | "lainnya";
  description: string;
  image: string;
  tag?: string;
  highlight?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const SITE_DATA = {
  name: "Pempek Ibu Mike",
  tagline: "Rasa Asli Palembang, lahir dari Hati.",
  foundedYear: 2017,
  location: "Pasar Perumahan, Bogor",
  operatingHours: "07.00 – 11.00 (Buka Setiap Hari)",
  coverageArea: "Bogor, Tangsel, Jakarta",
  phone: "0878-8517-0561",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.link/bjkg24",
  credit: "Created By Heles Ofalius",
  socials: [
    { name: "X", url: "https://x.com" }, // TODO: update with owner's official X URL
    { name: "Instagram", url: "https://instagram.com" }, // TODO: update with owner's official Instagram URL
    { name: "TikTok", url: "https://tiktok.com" }, // TODO: update with owner's official TikTok URL
  ],
  navLinks: [
    { label: "Beranda", href: "#beranda" },
    { label: "Menu", href: "#menu" },
    { label: "Tentang Kami", href: "#tentang-kami" },
  ],
  hero: {
    eyebrow: "Pempek Asli Palembang, Berdiri 2017",
    headlinePart1: "Rasa Asli ",
    headlineAccent: "Palembang",
    headlinePart2: ", lahir dari Hati.",
    // Kept verbatim as noted in AGENT.md
    description:
      "Dibuat dengan ikan tenggiri asli pilihan, dipadukan ikan Tenggiri, tanpa pengawet, menghadirkan cita rasa pempek yang jujur dan autentik untuk keluarga Indonesia.",
    ctaMenu: "Lihat Menu",
    ctaOrder: "Pesan Sekarang",
    ctaWhatsApp: "Mulai Chat",
  },
  menuSection: {
    eyebrow: "Menu Kami",
    title: "Pilihan Pempek Autentik",
    subtitle:
      "Setiap gigitan mencerminkan komitmen kami terhadap bahan baku pilihan, proses produksi jujur, dan cinta terhadap kuliner Palembang.",
    featuredItems: [
      {
        id: "lenjer",
        name: "Pempek Lenjer",
        category: "pempek",
        description: "Gurih kenyal khas Palembang dari paduan ikan tenggiri murni pilihan dengan aroma menggoda.",
        image: ASSETS.menu.lenjer,
        tag: "Favorit",
        highlight: true,
      },
      {
        id: "keriting",
        name: "Pempek Keriting",
        category: "pempek",
        description: "Tekstur mie keriting unik berpadu renyah lembut yang meresap sempurna dengan kuah cuko kental.",
        image: ASSETS.menu.keriting,
        tag: "Khas",
        highlight: true,
      },
      {
        id: "adaan",
        name: "Pempek Adaan",
        category: "pempek",
        description: "Bentuk bulat khas dengan aroma bawang merah segar dan rasa gurih yang kaya rempah rempah.",
        image: ASSETS.menu.adaan,
        tag: "Best Seller",
        highlight: true,
      },
      {
        id: "kapal-selam",
        name: "Pempek Kapal Selam",
        category: "pempek",
        description: "Isian telur utuh berbalut daging ikan tenggiri padat, disajikan panas dengan siraman cuko asli.",
        image: ASSETS.menu.kapalSelam,
        tag: "Legendaris",
        highlight: true,
      },
    ] as MenuItem[],
    allMenuItems: [
      { name: "Pempek Kapal Selam", desc: "Isi telur utuh nikmat dan padat" },
      { name: "Pempek Kulit", desc: "Renyah di luar lembut di dalam beraroma gurih" },
      { name: "Pempek Lenjer", desc: "Bentuk silinder klasik bertekstur kenyal lembut" },
      { name: "Pempek Adaan", desc: "Bulat gurih berpadu harum bawang bombay & daun bawang" },
      { name: "Pempek Keriting", desc: "Keriting khas lembut menyerap kuah cuko" },
      { name: "Pempek Pistel / Kates", desc: "Isian tumis pepaya muda gurih manis gurih" },
      { name: "Pempek Tahu", desc: "Tahu lembut berpadu adonan tenggiri harum" },
      { name: "Pempek Panggang", desc: "Dipanggang wangi dengan isian ebi & kecap pedas" },
      { name: "Tekwan", desc: "Sup kaldu udang hangat dengan bentukan bulat lembut, jamur kuping, & soun" },
      { name: "Lenggang", desc: "Pempek dibalut dadar telur dipanggang di daun pisang" },
      { name: "Laksan", desc: "Irisan pempek disiram kuah santan merah gurih rempah" },
      { name: "Celimpungan", desc: "Pempek bulat kuah santan kuning kunyit gurih lezat" },
    ],
  },
  storySection: {
    eyebrow: "Kisah di Balik Rasa",
    title: "Dari Dapur Sederhana, Menjadi Cerita Bersama",
    paragraphs: [
      "Berawal dari resep rumahan, diwariskan dengan penuh ketulusan, Pempek Ibu Mike hadir membawa cita rasa khas Palembang yang autentik dan hangat di setiap sajian.",
      "Bukan sekadar makanan, setiap pempek dibuat untuk menemani momen kebersamaan, mulai dari makan keluarga, acara spesial, hingga cerita sederhana sehari-hari.",
      "Dengan bahan pilihan dan rasa yang terus dijaga, Pempek ini tumbuh menjadi brand yang dipercaya menghadirkan kelezatan yang dekat, hangat, dan penuh makna.",
    ],
    certifications: [
      {
        id: "nib",
        title: "NIB",
        subtitle: "Nomor Induk Berusaha",
        badge: "Terverifikasi Resmi",
        icon: ASSETS.vectors.nib,
      },
      {
        id: "pirt",
        title: "P-IRT",
        subtitle: "Sertifikasi Pangan Industri",
        badge: "Standar Higienis",
        icon: ASSETS.vectors.pirt,
      },
      {
        id: "halal",
        title: "HALAL MUI",
        subtitle: "100% Halal Indonesia",
        badge: "Bahan Baku Halal",
        icon: ASSETS.vectors.halal,
      },
    ],
  },
  servicesSection: {
    eyebrow: "Layanan Kami",
    title: "Kami Menyediakan Layanan-Layanan Unik untuk Acara Kalian",
    items: [
      {
        id: "siap-santap",
        title: "Porsi Siap Santap",
        description: "Disajikan hangat langsung dengan kuah cuko segar untuk santap siang atau makan malam bersama.",
        image: ASSETS.services.siapSaji,
      },
      {
        id: "ulang-tahun",
        title: "Acara Ulang Tahun & Pesta",
        description: "Pilihan menu favorit anak dan dewasa untuk menyemarakkan pesta kebersamaan yang berkesan.",
        image: ASSETS.services.perayaan,
      },
      {
        id: "catering-formal",
        title: "Catering Pernikahan & Formal",
        description: "Layanan pondokan pempek live stall untuk resepsi pernikahan, syukuran, dan gathering kantor.",
        image: ASSETS.services.formalCatering,
      },
      {
        id: "paket-keluarga",
        title: "Paket Frozen & Hampers",
        description: "Kemasan kedap udara frozen pack siap kirim luar kota dan bingkisan hampers cantik keluarga.",
        image: ASSETS.services.paketKeluarga,
      },
    ] as ServiceItem[],
    cta: "Pesan Sekarang",
  },
  founderSection: {
    eyebrow: "Kisah di Balik Rasa",
    title: "Lahir dari Cinta dan Keberanian",
    paragraphs: [
      "Pempek Ibu Mike berawal dari kecintaan mendalam terhadap kuliner khas daerah dan keberanian seorang ibu untuk bangkit. Ibu Mike, yang sebelumnya berkarir sebagai dosen dan pengelola lembaga kursus bahasa Inggris, mulai menekuni usaha pempek secara serius pada tahun 2017.",
      "Kini beroperasi di Bogor, Pempek Ibu Mike telah menjalin distribusi ke 10 gerai 212 Mart di Tangerang dan melayani pesanan untuk berbagai acara dari pernikahan hingga ulang tahun.",
    ],
    quote:
      '"Dari kegemaran pribadi mengonsumsi pempek, produk ini disambut positif oleh lingkungan sekitar hingga berkembang menjadi usaha yang lebih terstruktur dan bermakna."',
    image: ASSETS.founder.photo,
  },
  testimonialSection: {
    eyebrow: "Kata Pelanggan Kami",
    quote:
      '"Pempeknya tidak alot, tidak amis, bahkan waktu sudah dingin pun tetap enak. Beda sekali dengan yang lain."',
  },
  closingCtaSection: {
    goldWord: "Cito Raso",
    whiteText: " Wong Kito Galo",
    description:
      "Kunjungi lapak kami di Pasar Bogor setiap pagi, atau pesan langsung melalui WhatsApp untuk frozen pack dan catering acara Anda.",
    cta: "Pesan via WhatsApp",
  },
  footer: {
    description:
      "UMKM pempek autentik Palembang berbahan baku pilihan, beroperasi di Bogor sejak 2017. Produksi mandiri dengan standar kualitas dan legalitas yang terverifikasi.",
    sectionsTitle: "Sections",
    socialsTitle: "Socials",
    infoTitle: "Informasi",
    credit: "Created By Heles Ofalius",
  },
} as const;
