import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/home";
import Platforms from "./pages/Platforms";
import Trading from "./pages/trading";
import Funding from "./pages/Funding";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./pages/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platforms" element={<Platforms />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/funding" element={<Funding />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;