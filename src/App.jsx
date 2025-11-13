import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-deep-purple text-gray-800">
      <Header />
      {/* Hero */}
      <Hero />
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <Projects />
      {/* Experience Section */}
      <Experience />
      {/* Contact Section */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}