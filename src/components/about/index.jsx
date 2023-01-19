import Skills from "./skills";

export default function About() {
    return (
        <div className="flex flex-col h-5/6 w-5/6 mx-auto">
            <div className="flex flex-col h-16 md:h-20 justify-end items-start">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-3">About me</h1>
            </div>
            <div className="flex h-full flex-col my-4 overflow-y-scroll scrollbar-none md:overflow-y-hidden space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
                <div className="flex flex-col space-y-2 lg:w-2/4">
                    <p className="font-light text-white text-md md:text-lg xl:text-xl">I have a Bachelor's in Science (BSc) in Electrical and Computer Engineering, which combines the study of electrical engineering and computer science. The main subjects include courses in mathematics, physics, programming, electronics, instrumentation, automation, control, telecommunications, energy systems, and management.</p>
                    <p className="font-light text-white text-md md:text-lg xl:text-xl">Overall, this degree provided me with a strong foundation in the principles and practices of electrical and computer engineering and the ability to design, develop and apply electrical and electronic systems and devices, as well as computer systems and software.</p>
                    <p className="font-light text-white text-md md:text-lg xl:text-xl">Finally, I like to use my skills to create and maintain websites as well as web applications and I stay up-to-date with the latest technologies in web development to maximize the potential of my projects. My aim is to deliver high-quality results with my problem-solving and analytical skills.</p>
                </div>
                <div className="flex flex-col space-y-4 lg:w-2/4">
                    <p className="font-semibold text-white text-md md:text-lg xl:text-xl">Technologies I've worked with:</p>
                    <Skills />
                </div>
            </div>
        </div>
    )
}