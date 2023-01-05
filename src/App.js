import Navbar from "./components/navbar/index";
import Home from "./components/home/index";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
