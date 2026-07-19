import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Switzerland from "./pages/Switzerland";
import Japan from "./pages/Japan";
import Korea from "./pages/Korea";
import Ph from "./pages/Ph";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="page-root">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/switzerland" element={<Switzerland />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/korea" element={<Korea />} />
          <Route path="/philippines" element={<Ph />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;