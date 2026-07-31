import { SectionHeading } from "@/components/Jadwal";
import { timeline } from "@/lib/data";

export function Timeline() {
  return (
    <section className="border-y-2 border-tinta bg-kertas/40 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Linimasa"
          title="Persiapan dari Juli hingga Malam Puncak"
        />

        <ol className="mt-10 space-y-0">
          {timeline.map((t, i) => (
            <li key={t.minggu} className="relative flex gap-5 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-tinta bg-merdeka font-mono text-xs font-bold text-kapas">
                  {i + 1}
                </span>
                {i < timeline.length - 1 && (
                  <span className="mt-1 w-0.5 flex-1 bg-tinta/25" />
                )}
              </div>
              <div className="pt-1">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-tinta/50">
                  {t.minggu}
                </p>
                <p className="mt-1 font-display text-lg font-semibold leading-snug">
                  {t.agenda}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
