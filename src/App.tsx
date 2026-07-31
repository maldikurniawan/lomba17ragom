import Dokumentasi from "@/pages/Dokumentasi";
import Home from "@/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dokumentasi" element={<Dokumentasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;