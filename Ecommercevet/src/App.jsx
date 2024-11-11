import { Routes, Route } from "react-router-dom";
import "./Styles/main.scss";
import Home from "./Pages/Home";
import Panier from "./Pages/Panier";
import Contact from "./Pages/Contact";
import Boutique from "./Pages/Boutique";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Boutique" element={<Boutique />} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
