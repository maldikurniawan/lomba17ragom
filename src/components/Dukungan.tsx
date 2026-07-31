import { SectionHeading } from "@/components/Jadwal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { anggaran } from "@/lib/data";
import { HandCoins, Users } from "lucide-react";

export function Dukungan() {
  return (
    <section id="dukung" className="container py-20">
      <SectionHeading
        eyebrow="Transparansi Anggaran"
        title="Terbuka Bersama, Terlaksana Bersama"
        description="Rincian kebutuhan dana agar warga dan donatur tahu persis ke mana kontribusinya digunakan."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          <Card className="bg-merdeka text-kapas">
            <CardContent className="p-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-widest text-kapas/70">
                Total Kebutuhan
              </p>
              <p className="mt-2 font-display text-4xl font-black">
                {anggaran.total}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-2 space-y-0">
              <Users size={18} className="text-daun" />
              <CardTitle className="text-base">Iuran Warga RT 01</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-display text-2xl font-bold">
                {anggaran.dariWarga}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center gap-2 space-y-0">
              <HandCoins size={18} className="text-kunyit-dark" />
              <CardTitle className="text-base">Sponsor & Donatur</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-tinta/75">{anggaran.sumberLain}</p>
              <Button className="mt-4 w-full" variant="gold" asChild>
                <a href="#footer">Jadi Donatur / Sponsor</a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Rincian Anggaran Operasional</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y-2 divide-tinta/10">
              {anggaran.rincian.map((r) => (
                <div
                  key={r.item}
                  className="flex items-center justify-between gap-4 px-6 py-3.5"
                >
                  <span className="text-sm font-medium text-tinta/85">
                    {r.item}
                  </span>
                  <span className="whitespace-nowrap font-mono text-sm font-semibold">
                    {r.biaya}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
