import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Novedades from "./components/Novedades/Novedades";
import ContactForm from "./components/ContacForm/ContactForm";
import ProductsItems from "./components/ProductItems/ProductsItems";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<ProductsItems />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/contacto" element={<ContactForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
