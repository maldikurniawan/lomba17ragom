import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Jadwal } from "@/components/Jadwal";
import { Lomba } from "@/components/Lomba";
import { Panitia } from "@/components/Panitia";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        if (window.location.hash) {
            setTimeout(() => {
                document
                    .querySelector(window.location.hash)
                    ?.scrollIntoView({
                        behavior: "smooth",
                    });
            }, 100);
        }
    }, []);

    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <Jadwal />
                <Lomba />
                <Panitia />
            </main>
            <Footer />
        </div>
    );
}