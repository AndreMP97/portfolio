import Picture from "../../assets/whoami.jpg";

export default function AboutMe() {
    return (
        <div className="flex flex-col h-full min-w-full snap-center">
            <div className="flex flex-col h-1/6 justify-center items-center text-center">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:w-[600px] md:text-5xl md:py-6">About Me</h1>
            </div>
            <div className="flex h-5/6 md:py-8">
                <div className="hidden md:flex w-1/4 justify-center m-4">
                    <img className="md:h-32 md:w-48 lg:h-48 lg:w-64 rounded-md" src={Picture} alt="Profile" />
                </div>
                <div className="flex flex-col px-4 py-2 md:py-0 md:pr-8 md:w-3/4 text-white text-md md:text-xl font-light space-y-2 overflow-auto">
                    <p>Hello! My name is André Pacheco and I'm a software developer from Portugal, with a passion for web development. </p>
                    <p>I use my skills to create and maintain websites as well as web applications. My interests and expertise lie in programming languages such as JavaScript, HTML, and CSS, as well as frameworks like React. </p>
                    <p>I stay up-to-date with the latest technologies in web development to maximize the potential of my projects. My aim is to deliver high-quality results with my problem-solving and analytical skills.</p>
                </div>
            </div>
        </div>
    )
}