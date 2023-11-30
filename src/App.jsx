import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Novedades from "./components/Novedades/Novedades";
import ContactForm from "./components/ContacForm/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/novedades" element={<Novedades />} />
        <Route path="/contacto" element={<ContactForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
