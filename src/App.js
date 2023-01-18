import Navbar from "./components/navbar/";
import Hero from "./components/hero/";
import About from "./components/about/";
import Skills from "./components/skills";
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
      <section id="skills" className="flex flex-grow h-screen select-none snap-center bg-gray-900 items-center justify-center">
        <Skills />
      </section>
      <section id="projects" className="flex flex-grow h-screen select-none snap-center bg-gray-800 items-center justify-center">
        <Projects />
      </section>
      <section id="contact" className="flex flex-col flex-grow h-screen select-none snap-center bg-gray-900 items-center justify-center">
        <Contact />
        <Footer />
      </section>
    </div>
  );
}

export default App;
