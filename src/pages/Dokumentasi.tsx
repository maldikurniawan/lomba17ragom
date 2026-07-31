import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useState } from "react";

const FILTERS = ["All", "2025", "2026"];

const PHOTOS = [
    {
        id: 1,
        year: "2026",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=600&q=80",
        title: "Pembukaan Acara",
    },
    {
        id: 2,
        year: "2026",
        image: "https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=600&q=80",
        title: "Perlombaan",
    },
    {
        id: 3,
        year: "2025",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80",
        title: "Kegiatan Warga",
    },
    {
        id: 4,
        year: "2025",
        image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600&q=80",
        title: "Kebersamaan",
    },
    {
        id: 5,
        year: "2026",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
        title: "Acara 17 Agustus",
    },
];

export default function Dokumentasi() {
    const [selectedYear, setSelectedYear] = useState("All");

    const filteredPhotos =
        selectedYear === "All"
            ? PHOTOS
            : PHOTOS.filter((item) => item.year === selectedYear);

    return (
        <div className="bg-kapas">
            <Header />

            <main className="mx-auto min-h-screen relative p-4 pb-20 sm:pb-20 sm:py-8 sm:px-20">
                <div className="mb-10">
                    <h1 className="font-display text-4xl font-bold text-tinta">
                        Dokumentasi
                    </h1>
                    <p className="mt-2 text-tinta/60">
                        Kumpulan foto kegiatan RT 01.
                    </p>
                </div>

                <div className="flex flex-col gap-8 md:flex-row">
                    <aside className="w-full md:w-56">
                        <div className="rounded-xl border border-tinta/30 bg-kapas p-4">
                            <h2 className="mb-4 font-bold text-tinta">Filter Tahun</h2>
                            <div className="flex gap-2 overflow-x-auto md:flex-col">
                                {FILTERS.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setSelectedYear(item)}
                                        className={`rounded-lg px-4 py-2 text-left font-semibold transition ${selectedYear === item
                                            ? "bg-merdeka text-kapas"
                                            : "hover:bg-kertas"
                                            }`}
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>

                    <section className="flex-1">
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredPhotos.map((photo) => (
                                <div
                                    key={photo.id}
                                    className="group overflow-hidden rounded-xl border border-tinta/30 bg-kapas"
                                >
                                    <img
                                        src={photo.image}
                                        alt={photo.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-64 w-full object-cover transition duration-300 group-hover:scale-105 will-change-transform"
                                    />
                                </div>
                            ))}
                        </div>

                        {filteredPhotos.length === 0 && (
                            <div className="py-20 text-center text-tinta/60">
                                Tidak ada dokumentasi.
                            </div>
                        )}
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}