import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsRibbon from "./components/SkillsRibbon";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <SkillsRibbon />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
