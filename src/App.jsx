
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Project';
import Skills from './components/Skill';
import Hero from './components/Hero';

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </main>
    </div>
  );
}

export default App;
