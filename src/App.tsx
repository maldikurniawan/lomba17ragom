import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dokumentasi from "@/pages/Dokumentasi";
import Home from "@/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dokumentasi" element={<Dokumentasi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;