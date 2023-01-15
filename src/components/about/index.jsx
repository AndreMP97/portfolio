import AboutMe from "./aboutme";
import Education from "./education";
import Skills from "./skills";

export default function About() {
    return (
        <div className="flex bg-gray-900 flex-grow items-center justify-center">
            <div className="flex flex-col h-5/6 w-5/6 max-h-[600px] md:portrait:max-h-[900px] md:max-h-[700px] bg-gray-800 rounded-md">
                <div className="flex flex-wrap h-full overflow-y-scroll scroll-smooth snap-y snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full scrollbar-track-gray-500 scrollbar-track-rounded-full">
                    <AboutMe />
                    <Education />
                    <Skills />
                </div>
            </div>
        </div>
    )
}