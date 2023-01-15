import Navbar from "./components/navbar/";
import Hero from "./components/hero/";
import About from "./components/about/";
import Projects from "./components/projects/";
import Contact from "./components/contact/";
import Footer from "./components/footer";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-thin lg:scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-500">
      <section id="home" className="flex flex-col h-screen select-none snap-start">
        <Navbar />
        <Hero />
      </section>
      <section id="about" className="flex flex-col h-screen select-none snap-center">
        <About />
      </section>
      <section id="projects" className="flex flex-col h-screen select-none snap-center">
        <Projects />
      </section>
      <section id="contact" className="flex flex-col h-screen select-none snap-center">
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;
