import Navbar from "./components/navbar/";
import Hero from "./components/hero/";
import About from "./components/about/";
import Projects from "./components/projects/";
import Contact from "./components/contact/";
import Footer from "./components/footer";

function App() {
  return (
    <div id="content" className="relative flex flex-col h-screen bg-gray-900
    overflow-y-scroll scroll-smooth scrollbar-thin lg:scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-500">
      <header className="fixed flex h-20 md:h-28 w-full z-40">
        <Navbar />
      </header>
      <main className="container flex flex-col mx-auto bg-gray-800">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer id="footer" className="container flex mx-auto z-40 justify-center bg-gray-800 items-center">
          <Footer />
        </footer>
    </div>
  );
}

export default App;
