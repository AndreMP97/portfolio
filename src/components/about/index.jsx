import AboutMe from "./aboutme";
import Education from "./education";
import Skills from "./skills";

export default function About() {
    return (
        <div className="bg-gray-900 flex flex-grow items-center justify-center">
            <div className="flex flex-col h-5/6 w-5/6 bg-gray-800 rounded-md">
                <div className="flex flex-col h-1/6 justify-center items-center">
                    <h1 className="text-white text-3xl md:text-5xl md:py-6 md:pl-8 font-serif font-semibold">About Me</h1>
                </div>
                <div className="flex flex-wrap h-5/6 overflow-y-scroll scroll-smooth snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-thumb-rounded-full scrollbar-track-gray-600 scrollbar-track-rounded-full">
                    <AboutMe />
                    <Education />
                    <Skills />
                </div>
            </div>
        </div>
    )
}