import { SectionHeading } from "@/components/Jadwal";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { lomba } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function Lomba() {
  return (
    <section id="lomba" className="border-y-2 border-tinta bg-kertas/40 py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Jenis Kegiatan"
          title="17 Kategori Lomba, Semua Umur Ikut Seru-Seruan"
          description="Dari makan kerupuk sampai karaoke ibu-ibu — pilih tab kategorinya."
        />

        <Tabs defaultValue={lomba[0].key} className="mt-10">
          <TabsList>
            {lomba.map((l) => (
              <TabsTrigger key={l.key} value={l.key}>
                {l.kategori}
              </TabsTrigger>
            ))}
          </TabsList>

          {lomba.map((l) => (
            <TabsContent key={l.key} value={l.key}>
              <div className="mb-4">
                <Badge variant={l.warna}>{l.kategori}</Badge>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {l.daftar.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-xl border-2 border-tinta/80 bg-kapas px-4 py-3 text-sm font-medium shadow-[3px_3px_0px_0px_rgba(34,26,18,0.7)]"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-daun"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
