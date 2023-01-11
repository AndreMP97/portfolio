import Navbar from "../../components/navbar/index";
import About from "../../components/about/index";

export default function AboutPage() {
    return (
        <div id="about" className="flex flex-col h-screen">
            <Navbar />
            <About />
        </div>
    )
}