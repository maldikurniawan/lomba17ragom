import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Dokumentasi() {
    return (
        <div className="min-h-screen">
            <Header />

            <main className="container py-16">
                <h1 className="text-4xl font-bold">Dokumentasi</h1>

                <p className="mt-4 text-muted-foreground">
                    Dokumentasi kegiatan lomba 17 Agustus.
                </p>
            </main>

            <Footer />
        </div>
    );
}