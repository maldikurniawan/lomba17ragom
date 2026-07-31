import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { jadwalUtama, kategoriPeserta } from "@/lib/data";
import { Calendar, Clock, MapPin } from "lucide-react";
import type { ReactNode } from "react";

export function Jadwal() {
  return (
    <section id="jadwal" className="container py-20">
      <SectionHeading
        eyebrow="Waktu & Tempat"
        title="Dua Akhir Pekan Lomba, Satu Malam Puncak"
        description="Seluruh rangkaian acara berlangsung di Halaman Warga RT 01 — cukup jalan kaki dari rumah."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {jadwalUtama.map((j) => (
          <Card key={j.label} className="relative">
            <CardHeader>
              <CardTitle>{j.label}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <InfoRow icon={<Calendar size={16} />} text={j.tanggal} />
              <InfoRow icon={<Clock size={16} />} text={j.waktu} />
              <InfoRow icon={<MapPin size={16} />} text={j.tempat} />
              <p className="pt-2 text-tinta/70">{j.keterangan}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-14">
        <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-tinta/50">
          Terbuka untuk semua kategori usia
        </p>
        <div className="flex flex-wrap gap-2.5">
          {kategoriPeserta.map((k) => (
            <Badge key={k.nama} variant="outline" className="bg-kapas">
              {k.nama}
              <span className="ml-1.5 font-body font-normal normal-case text-tinta/50">
                · {k.rentang}
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2.5 text-tinta/85">
      <span className="text-merdeka">{icon}</span>
      <span className="font-medium">{text}</span>
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
    <div className="max-w-2xl">
      <p className="font-mono text-xs font-semibold uppercase tracking-widest text-merdeka">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold leading-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-tinta/70">{description}</p>
      )}
    </div>
  );
}
