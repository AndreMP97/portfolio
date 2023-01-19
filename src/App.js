import Navbar from "./components/navbar/";
import Hero from "./components/hero/";
import About from "./components/about/";
import Projects from "./components/projects/";
import Contact from "./components/contact/";
import Footer from "./components/footer";

function App() {
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth snap-y snap-mandatory scrollbar-thin lg:scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-500 bg-gray-900">
      <nav className="container flex mx-auto sticky top-0 z-40 justify-center items-center h-0">
        <Navbar />
      </nav>
      <section id="home" className="container flex h-screen mx-auto snap-start bg-gray-800 select-none items-center">
        <Hero />
      </section>
      <section id="about" className="container flex h-screen mx-auto snap-start bg-gray-800 select-none items-center">
        <About />
      </section>
      <section id="projects" className="container flex h-screen mx-auto snap-start bg-gray-800 select-none items-center">
        <Projects />
      </section>
      <section id="contact" className="container flex h-screen mx-auto snap-start bg-gray-800 select-none items-center">
        <Contact />
      </section>
      <footer className="container flex mx-auto z-40 justify-center items-center h-0">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
