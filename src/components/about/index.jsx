import Picture from "../../assets/aboutme.svg";

export default function About() {
    return (
        <div className="flex flex-col h-5/6 w-5/6 snap-centers">
            <div className="flex flex-col h-1/6 justify-end items-start">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-2">About me</h1>
            </div>
            <div className="flex h-5/6 md:flex-col lg:flex-row pt-4 justify-between">
                <div className="flex flex-col font-light text-white text-md space-y-2 md:text-xl lg:w-2/4">
                    <p>Hello! My name is André Pacheco and I'm a software developer from Portugal, with a passion for web development. </p>
                    <p>I use my skills to create and maintain websites as well as web applications. My interests and expertise lie in programming languages such as JavaScript, HTML, and CSS, as well as frameworks like React. </p>
                    <p>I stay up-to-date with the latest technologies in web development to maximize the potential of my projects. My aim is to deliver high-quality results with my problem-solving and analytical skills.</p>
                </div>
                <div className="hidden md:flex lg:w-2/4 justify-center items-start">
                    <img className="h-96 rounded-md" src={Picture} alt="Profile" />
                </div>
            </div>
        </div>
    )
}