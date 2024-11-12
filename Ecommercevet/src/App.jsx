import { Routes, Route } from "react-router-dom";
import "./Styles/main.scss";
import Home from "./Pages/Home";
import Panier from "./Pages/Panier";
import Contact from "./Pages/Contact";
import Boutique from "./Pages/Boutique";
import Account from "./Pages/Account";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Legals from "./Pages/Legals";
import GeneralConditionsOfSale from "./Pages/GeneralConditionsOfSale";
import SingleProduct from "./Pages/SingleProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Boutique" element={<Boutique />} />
        <Route path="/product/:id" element={<SingleProduct/>} />
        <Route path="/Panier" element={<Panier />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/legals" element={<Legals />} />
        <Route path='/terms' element={<GeneralConditionsOfSale/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
