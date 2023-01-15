import Picture from "../../assets/aboutme.svg";

export default function About() {
    return (
        <div className="flex flex-col h-full w-5/6">
            <div className="flex flex-col h-20 md:h-32 justify-end items-center md:items-start">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-3">About me</h1>
            </div>
            <div className="flex h-full flex-col lg:flex-row pt-8 justify-between">
                <div className="flex flex-col font-light text-white text-md space-y-2 md:text-xl lg:w-2/4">
                    <p>Hello! My name is André Pacheco and I'm a software developer from Portugal, with a passion for web development. </p>
                    <p>I use my skills to create and maintain websites as well as web applications. My interests and expertise lie in programming languages such as JavaScript, HTML, and CSS, as well as frameworks like React. </p>
                    <p>I stay up-to-date with the latest technologies in web development to maximize the potential of my projects. My aim is to deliver high-quality results with my problem-solving and analytical skills.</p>
                </div>
                <div className="hidden md:h-full md:flex md:pt-4 lg:pt-0 lg:w-2/4 justify-center items-start">
                    <img className="h-96 rounded-md" src={Picture} alt="Profile" />
                </div>
            </div>
        </div>
    )
}