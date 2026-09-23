import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import About from './components/About';
import AboutPage from './components/Abouts/AboutPage';
import ContactPage from './components/contact/ContactPage';
import ProjectPage from './components/Project/ProjectPage';
import ServicePage from './components/Service/ServicePage';
import JeevanDevLogo from './components/Home/JeevanDevLogo';
import WWD from "./components/WWD"

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <About />
            <ContactSection />
           {/* <WWD /> */}
            <JeevanDevLogo />
          </div>
        } />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/services" element={<ServicePage />} />

      </Routes>
    </Router>
  );
}

export default App;