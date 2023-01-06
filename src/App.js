import Navbar from "./components/navbar/index";
import Home from "./components/home/index";
import About from "./components/about/index";

function App() {
  return (
    <>
      <div id="home" className="flex flex-col h-screen">
        <Navbar />
        <Home />
      </div>
      <div id="about" className="flex flex-col h-screen">
        <About />
      </div>
    </>
  );
}

export default App;
