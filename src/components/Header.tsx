import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "#jadwal", label: "Jadwal" },
  { href: "#lomba", label: "Lomba" },
  { href: "#panitia", label: "Panitia" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={headerClass(scrolled)}>
      <div className="mx-auto flex h-16 w-full items-center justify-between px-4 sm:px-20">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-tinta bg-merdeka font-display font-bold text-kapas">
            81
          </div>

          <div>
            <h1 className="font-display text-lg font-semibold leading-none">
              RT 01
            </h1>

            <p className="text-[10px] uppercase tracking-[0.2em] text-tinta/60">
              Bukit Kemiling Permai
            </p>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-tinta/80 transition hover:text-merdeka"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm">
            <a href="#">Ikut Meriahkan</a>
          </Button>
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="rounded-lg border border-tinta p-2 md:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden md:hidden ${open ? "max-h-96 border-t border-tinta/10" : "max-h-0"
          }`}
      >
        <nav className="bg-kapas">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 p-4 sm:px-20">
            {LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-3 font-medium transition hover:bg-kertas hover:text-merdeka"
              >
                {item.label}
              </a>
            ))}

            <Button className="w-full">
              <a href="#dukung" onClick={() => setOpen(false)}>
                Ikut Meriahkan
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function headerClass(scrolled: boolean) {
  return [
    "sticky top-0 z-50 w-full bg-kapas border-b border-tinta/10",
    scrolled
      ? ""
      : "",
  ].join(" ");
}