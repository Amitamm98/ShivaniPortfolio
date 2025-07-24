import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/home/HomePage";
import Footer from "./components/Footer";
import AboutPage from "./components/about/AboutPage";

import ServiceHero from "./components/service/ServiceHero";
import ContactHeroPage from "./components/contact/ContactHeroPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="About" element={<AboutPage/>} />
          <Route path="service" element={<ServiceHero/>}/>
          <Route path="contact" element={<ContactHeroPage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
