import { Dukungan } from "@/components/Dukungan";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Jadwal } from "@/components/Jadwal";
import { Lomba } from "@/components/Lomba";
import { Panitia } from "@/components/Panitia";
import { Timeline } from "@/components/Timeline";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Jadwal />
        <Lomba />
        <Panitia />
        <Timeline />
        <Dukungan />
      </main>
      <Footer />
    </div>
  );
}

export default App;
