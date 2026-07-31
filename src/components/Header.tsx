import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#jadwal", label: "Jadwal" },
  { href: "#lomba", label: "Lomba" },
  { href: "#panitia", label: "Panitia" },
  { href: "#dukung", label: "Dukung Kami" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cnHeader(scrolled)}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-tinta bg-merdeka font-display text-sm font-bold text-kapas">
            81
          </span>
          <span className="font-display text-lg font-semibold leading-none">
            RT 01
            <span className="block font-body text-[10px] font-medium uppercase tracking-[0.2em] text-tinta/60">
              Bukit Kemiling Permai
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-tinta/80 transition-colors hover:text-merdeka"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" asChild>
            <a href="#dukung">Ikut Meriahkan</a>
          </Button>
        </div>

        <button
          className="rounded-lg border-2 border-tinta p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Buka menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="border-t-2 border-tinta bg-kapas md:hidden">
          <nav className="container flex flex-col gap-1 py-3">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-sm font-semibold text-tinta/80 hover:bg-kertas"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function cnHeader(scrolled: boolean) {
  return [
    "sticky top-0 z-50 transition-all duration-300",
    scrolled
      ? "bg-kapas/90 backdrop-blur border-b-2 border-tinta shadow-[0_2px_0_0_rgba(34,26,18,0.2)]"
      : "bg-transparent border-b-2 border-transparent",
  ].join(" ");
}
