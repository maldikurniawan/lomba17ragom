import { Button } from "@/components/ui/button";
import { acara } from "@/lib/data";
import { MapPin, PartyPopper } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden p-4 sm:py-8 sm:px-20"
    >
      <div className="container mx-auto grid items-center gap-4 sm:gap-14 lg:grid-cols-[1.25fr_0.9fr]">
        {/* Left */}
        <div className="animate-fade-up">
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Satu RT,
            <br />
            <span className="text-merdeka">Satu Semangat</span>
            <br />
            Merdeka.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-tinta/80 sm:text-lg">
            {acara.penyelenggara} mengajak seluruh warga{" "}
            <strong className="text-tinta">{acara.lokasiSingkat}</strong>{" "}
            merayakan kemerdekaan lewat lomba, silaturahmi, dan malam syukuran
            bersama.
          </p>

          <blockquote className="mt-6 border-l-4 border-merdeka pl-4 font-display text-base italic text-tinta/70 sm:text-lg">
            "{acara.tema}"
          </blockquote>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              render={<a href="#lomba" />}
            >
              Lihat Rangkaian Lomba
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
              render={<a href="#jadwal" />}
            >
              Cek Jadwal & Lokasi
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-tinta/60">
            <MapPin size={16} />
            <span>
              {acara.kelurahan}, {acara.kota}
            </span>
          </div>
        </div>

        {/* Right */}
        <div className="animate-fade-up flex flex-col items-center justify-center gap-5 [animation-delay:150ms]">
          <div className="inline-flex items-center gap-2 rounded-full border-2 border-tinta bg-kunyit px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-tinta sm:text-xs">
            <PartyPopper size={14} />
            HUT ke-81 Kemerdekaan RI · {acara.tahun}
          </div>

          <div className="relative w-full max-w-sm rotate-1 rounded-3xl border-2 border-tinta bg-kertas p-6 shadow-[8px_8px_0px_rgba(34,26,18,0.9)] transition-transform duration-300 hover:-rotate-1 hover:-translate-y-1">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-tinta/50">
              Puncak Perayaan
            </p>

            <h2 className="mt-2 font-display text-4xl font-black">
              17 Agustus
            </h2>

            <h3 className="font-display text-4xl font-black text-merdeka">
              2026
            </h3>

            <div className="my-5 h-px w-full bg-tinta/15" />

            <p className="leading-7 text-sm text-tinta/70">
              Malam Puncak &amp; Syukuran dimulai{" "}
              <strong className="text-tinta">19.30 WIB</strong> di Halaman
              Warga RT 01. Acara akan dimeriahkan dengan potong tumpeng,
              pembagian hadiah, dan hiburan orgen untuk seluruh warga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}