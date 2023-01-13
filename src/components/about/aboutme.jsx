import Picture from "../../assets/foto.jpg";

export default function AboutMe() {
    return (
        <div className="flex h-full min-w-full snap-center">
            <div className="hidden md:flex w-1/4 justify-center m-4">
                <img className="h-48 w-48 rounded-md" src={Picture} alt="Profile" />
            </div>
            <div className="flex flex-col px-4 py-2 md:py-0 md:pr-8 md:w-3/4 text-white text-md md:text-xl font-mono space-y-2 overflow-auto text-justify">
                <h2 className="md:hidden text-white text-xl font-medium mt-4 self-center">Who am I?</h2>
                <p>Hello! My name is André Pacheco and I'm a software developer from Portugal, with a passion for web development. </p>
                <p>I use my skills to create and maintain websites as well as web applications. My interests and expertise lie in programming languages such as JavaScript, HTML, and CSS, as well as frameworks like React. </p>
                <p>I stay up-to-date with the latest technologies in web development to maximize the potential of my projects. My aim is to deliver high-quality results with my problem-solving and analytical skills.</p>
            </div>
        </div>
    )
}