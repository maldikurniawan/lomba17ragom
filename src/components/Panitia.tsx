import { SectionHeading } from "@/components/Jadwal";
import { panitia } from "@/lib/data";

export function Panitia() {
  return (
    <section id="panitia" className="p-4 py-20 sm:p-20">
      <SectionHeading
        eyebrow="Di Balik Layar"
        title="Susunan Kepanitiaan"
        description="Tetangga sendiri yang merancang dan menjalankan seluruh rangkaian acara."
      />

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {panitia.map((p, i) => (
          <div
            key={p.jabatan}
            className="group rounded-xl border-2 border-tinta/80 bg-kapas p-4 transition-transform hover:-translate-y-0.5"
            style={{ transform: i % 3 === 1 ? "rotate(-0.4deg)" : "rotate(0.4deg)" }}
          >
            <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-merdeka">
              {p.jabatan}
            </p>
            <p className="mt-1 font-display text-base font-semibold leading-snug">
              {p.nama}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
