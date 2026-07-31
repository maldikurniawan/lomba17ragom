import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Jadwal } from "@/components/Jadwal";
import { Lomba } from "@/components/Lomba";
import { Panitia } from "@/components/Panitia";

function App() {
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

export default App;
