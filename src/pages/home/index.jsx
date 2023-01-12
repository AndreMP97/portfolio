import Hero from "../../components/hero/index";
import Navbar from "../../components/navbar/index";

export default function HomePage() {
    return (
        <div id="home" className="flex flex-col h-screen select-none">
            <Navbar />
            <Hero />
        </div>
    )
}