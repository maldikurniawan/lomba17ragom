import { Bunting } from "@/components/Bunting";
import { Button } from "@/components/ui/button";
import { acara } from "@/lib/data";
import { MapPin, PartyPopper } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-4">
      <Bunting count={30} className="animate-flag-wave" />

      <div className="container grid gap-10 py-14 md:grid-cols-[1.3fr_1fr] md:py-24">
        <div className="animate-fade-up">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border-2 border-tinta bg-kunyit px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-tinta">
            <PartyPopper size={14} />
            HUT ke-81 Kemerdekaan RI · {acara.tahun}
          </div>

          <h1 className="font-display text-[2.6rem] font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.2rem]">
            Satu RT,
            <br />
            <span className="text-merdeka">Satu Semangat</span>
            <br />
            Merdeka.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-tinta/80">
            {acara.penyelenggara} mengajak seluruh warga{" "}
            <strong className="text-tinta">{acara.lokasiSingkat}</strong>{" "}
            merayakan kemerdekaan lewat lomba, silaturahmi, dan malam syukuran
            bersama.
          </p>

          <blockquote className="mt-6 border-l-4 border-merdeka pl-4 font-display text-base italic text-tinta/70 sm:text-lg">
            "{acara.tema}"
          </blockquote>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" asChild>
              <a href="#lomba">Lihat Rangkaian Lomba</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#jadwal">Cek Jadwal & Lokasi</a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-tinta/60">
            <MapPin size={16} />
            {acara.kelurahan}, {acara.kota}
          </div>
        </div>

        <div className="relative flex items-center justify-center animate-fade-up [animation-delay:150ms]">
          <div className="relative w-full max-w-sm rotate-2 rounded-2xl border-2 border-tinta bg-kertas p-6 shadow-[6px_6px_0px_0px_rgba(34,26,18,0.9)]">
            <div className="absolute -top-4 left-1/2 h-8 w-14 -translate-x-1/2 -rotate-3 rounded-sm border-2 border-tinta/70 bg-kunyit/70" />
            <p className="font-mono text-xs uppercase tracking-widest text-tinta/50">
              Puncak Perayaan
            </p>
            <p className="mt-1 font-display text-3xl font-bold">17 Agustus</p>
            <p className="font-display text-3xl font-bold text-merdeka">
              2026
            </p>
            <div className="mt-4 h-[2px] w-full bg-tinta/15" />
            <p className="mt-4 text-sm text-tinta/70">
              Malam Puncak &amp; Syukuran dimulai{" "}
              <strong className="text-tinta">19.30 WIB</strong> di Halaman
              Warga RT 01 — potong tumpeng, hadiah, dan hiburan orgen untuk
              semua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
