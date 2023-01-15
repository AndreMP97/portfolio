import Navbar from "./components/navbar/index";
import Hero from "./components/hero/index";
import About from "./components/about/index";

function App() {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory lg:scrollbar scrollbar-thumb-gray-600 scrollbar-track-gray-500">
      <section id="home" className="flex flex-col h-screen select-none snap-start">
        <Navbar />
        <Hero />
      </section>
      <section id="about" className="flex flex-col h-screen select-none snap-center">
        <About />
      </section>
    </div>
  );
}

export default App;
