import { Bunting } from "@/components/Bunting";
import { acara, penutup } from "@/lib/data";

export function Footer() {
  return (
    <footer id="footer" className="bg-tinta text-kapas p-4 sm:px-20 sm:pt-8">
      <Bunting count={30} />
      <div className="container">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="font-display text-2xl mt-4 font-bold leading-snug sm:text-3xl">
              "{acara.tema}"
            </p>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-kapas/70">
              Demikian rangkaian kegiatan ini kami susun sebagai acuan
              bersama. Besar harapan kami agar seluruh warga dan para
              donatur berkenan memberikan dukungan moril maupun materil demi
              kelancaran acara. Atas perhatian dan partisipasinya, kami
              ucapkan terima kasih.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <Signature label="Ketua Panitia" name={penutup.ketua} />
              <Signature label="Sekretaris" name={penutup.sekretaris} />
              <Signature label="Ketua RT 01" name={penutup.ketuaRt} />
            </div>
          </div>

          <div className="md:text-right">
            <p className="font-mono text-xs uppercase tracking-widest text-kapas/50">
              {penutup.kota}, {penutup.tanggal}
            </p>
            <p className="mt-2 font-display text-lg font-semibold">
              {acara.penyelenggara}
            </p>
            <p className="text-sm text-kapas/60">
              {acara.lokasiSingkat}, {acara.kelurahan}
            </p>
            <p className="text-sm text-kapas/60">{acara.kota}</p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-kapas/15 text-center text-xs text-kapas/40">
          Dirgahayu Republik Indonesia ke-81 · Merdeka!
        </div>
      </div>
    </footer>
  );
}

function Signature({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-widest text-kapas/50">
        {label}
      </p>
      <p className="mt-1 font-display italic text-kapas">{name}</p>
      <div className="mt-1 h-0.5 w-16 bg-kapas/25" />
    </div>
  );
}
