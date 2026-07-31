import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { jadwalUtama, kategoriPeserta } from "@/lib/data";
import { Calendar, Clock, MapPin } from "lucide-react";
import type { ReactNode } from "react";

export function Jadwal() {
  return (
    <section
      id="jadwal"
      className="mx-auto p-4 py-20 sm:p-20"
    >
      <SectionHeading
        eyebrow="Waktu & Tempat"
        title="Dua Akhir Pekan Lomba, Satu Malam Puncak"
        description="Seluruh rangkaian acara berlangsung di Halaman Warga RT 01 — cukup jalan kaki dari rumah."
      />

      <div className="my-10 grid gap-6 lg:grid-cols-2">
        {jadwalUtama.map((j) => (
          <Card
            key={j.label}
            className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <CardHeader className="pb-4">
              <CardTitle className="text-xl">{j.label}</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <InfoRow icon={<Calendar size={16} />} text={j.tanggal} />
              <InfoRow icon={<Clock size={16} />} text={j.waktu} />
              <InfoRow icon={<MapPin size={16} />} text={j.tempat} />

              <div className="border-t pt-4">
                <p className="leading-7 text-sm text-tinta/70">
                  {j.keterangan}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-tinta/50">
          Terbuka untuk semua kategori usia
        </p>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {kategoriPeserta.map((k) => (
            <Badge
              key={k.nama}
              variant="outline"
              className="flex h-auto flex-col items-center justify-center rounded-xl bg-kapas px-4 py-3 text-center"
            >
              <span className="font-semibold text-sm">{k.nama}</span>
              <span className="mt-1 text-xs text-tinta/60">
                {k.rentang}
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-merdeka/10 text-merdeka">
        {icon}
      </div>

      <span className="font-medium text-tinta/85">
        {text}
      </span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-merdeka">
        {eyebrow}
      </p>

      <h2 className="mt-3 font-display text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl leading-8 text-tinta/70">
          {description}
        </p>
      )}
    </div>
  );
}