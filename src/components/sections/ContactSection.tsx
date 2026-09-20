import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { SITE_DATA } from "@/content/siteData";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

export function ContactSection() {
  const googleMapsUrl =
    "https://maps.google.com?q=-6.4535150,106.7500610";

  return (
    <section id="kontak" className="relative py-[var(--section-y)] overflow-hidden">
      <div className="container-fluid relative z-10">
        {/* Section Heading matching Figma #1:15 */}
        <Reveal>
          <SectionHeading
            eyebrow="Kami Siap Melayani"
            title="Hubungi Kami"
            subtitle="Pesan pempek segar, atau rencanakan catering acara Anda bersama Pempek Ibu Mike. Kami senang membantu!"
            align="center"
            className="mb-[var(--space-xl)]"
          />
        </Reveal>

        {/* 3 Contact Cards from Figma #1:38 with VECTOR 1, 2, 3 as background watermarks using z-index */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-m)] mb-[var(--space-xl)]">
          {/* Card 1: Lokasi Lapak with VECTOR 1 background */}
          <Reveal delay={0.1}>
            <div className="relative rounded-[var(--radius-btn)] p-7 md:p-8 bg-[rgba(99,10,3,0.78)] border border-[rgba(253,176,63,0.3)] shadow-2xl overflow-hidden flex flex-col justify-between min-h-[340px] group hover:border-[rgba(253,176,63,0.6)] transition-all">
              {/* Background Vector 1 (Figma #1:55) with z-0 */}
              <div className="absolute right-2 bottom-2 w-36 h-52 pointer-events-none select-none z-0 opacity-55 group-hover:opacity-75 transition-opacity">
                <Image
                  src={ASSETS.vectors.halal}
                  alt=""
                  fill
                  className="object-contain object-right-bottom filter brightness-125"
                />
              </div>

              {/* Card Content with z-10 */}
              <div className="relative z-10">
                <span className="font-serif italic text-[#E7DFCC] text-2xl block mb-2">
                  Lokasi Lapak
                </span>
                <p className="font-sans text-sm text-[#E7DFCC]/85 leading-relaxed mb-4">
                  Temui kami langsung di pasar dalam kawasan perumahan di Bogor setiap pagi hari.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-[rgba(253,176,63,0.2)]">
                <span className="font-serif italic text-[#F9BB41] text-xl block mb-1">
                  Bogor, Jawa Barat
                </span>
                <span className="font-sans text-xs text-[#E7DFCC]/75 block">
                  Tersedia frozen pack untuk Tangsel & Jakarta
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 2: WhatsApp Order with VECTOR 2 background */}
          <Reveal delay={0.2}>
            <div className="relative rounded-[var(--radius-btn)] p-7 md:p-8 bg-[rgba(99,10,3,0.78)] border border-[rgba(253,176,63,0.3)] shadow-2xl overflow-hidden flex flex-col justify-between min-h-[340px] group hover:border-[rgba(253,176,63,0.6)] transition-all">
              {/* Background Vector 2 (Figma #1:58) with z-0 */}
              <div className="absolute right-2 bottom-3 w-40 h-36 pointer-events-none select-none z-0 opacity-55 group-hover:opacity-75 transition-opacity">
                <Image
                  src={ASSETS.vectors.pirt}
                  alt=""
                  fill
                  className="object-contain object-right-bottom filter brightness-125"
                />
              </div>

              {/* Card Content with z-10 */}
              <div className="relative z-10">
                <span className="font-serif italic text-[#E7DFCC] text-2xl block mb-2">
                  WhatsApp Order
                </span>
                <p className="font-sans text-sm text-[#E7DFCC]/85 leading-relaxed mb-4">
                  Pemesanan paling mudah dan cepat melalui WhatsApp. Kami siap melayani pesanan harian, frozen, dan catering.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-[rgba(253,176,63,0.2)]">
                <span className="font-serif italic text-[#F9BB41] text-xl block mb-1">
                  {SITE_DATA.phone}
                </span>
                <span className="font-sans text-xs text-[#E7DFCC]/75 block">
                  Siap kirim ke Bogor, Tangsel, & Jakarta
                </span>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Jam Operasional with VECTOR 3 background */}
          <Reveal delay={0.3}>
            <div className="relative rounded-[var(--radius-btn)] p-7 md:p-8 bg-[rgba(99,10,3,0.78)] border border-[rgba(253,176,63,0.3)] shadow-2xl overflow-hidden flex flex-col justify-between min-h-[340px] group hover:border-[rgba(253,176,63,0.6)] transition-all">
              {/* Background Vector 3 (Figma #1:60) with z-0 */}
              <div className="absolute right-3 bottom-3 w-32 h-32 pointer-events-none select-none z-0 opacity-55 group-hover:opacity-75 transition-opacity">
                <Image
                  src={ASSETS.vectors.nib}
                  alt=""
                  fill
                  className="object-contain object-right-bottom filter brightness-125"
                />
              </div>

              {/* Card Content with z-10 */}
              <div className="relative z-10">
                <span className="font-serif italic text-[#E7DFCC] text-2xl block mb-2">
                  Jam Operasional
                </span>
                <p className="font-sans text-sm text-[#E7DFCC]/85 leading-relaxed mb-4">
                  Kami buka setiap hari di lapak pasar. Untuk pesanan khusus dan frozen, dapat dihubungi sepanjang hari melalui WhatsApp.
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-[rgba(253,176,63,0.2)]">
                <span className="font-serif italic text-[#F9BB41] text-xl block mb-1">
                  07:00 – 11:00
                </span>
                <span className="font-sans text-xs text-[#E7DFCC]/75 block">
                  Senin – Minggu · Setiap Hari
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Action Link to Google Maps (Figma #1:65) & WhatsApp */}
        <Reveal delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href={googleMapsUrl}
              variant="outline"
              className="!px-6"
            >
              📍 Lihat Lokasi Google Maps
            </Button>
            <Button
              href={SITE_DATA.whatsappUrl}
              variant="whatsapp"
              className="!px-6"
            >
              Chat via WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
