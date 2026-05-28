import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsRibbon from "./components/SkillsRibbon";
import AboutSection from "./components/AboutSection";

function App() {
  return (
    <div className="min-h-screen bg-background text-white">
      <Navbar />
      <Hero />
      <SkillsRibbon />
      <AboutSection />
      {/* Add more sections here: Portfolio, Services, Testimonial, Blog, Contact */}
    </div>
  );
}

export default App;
