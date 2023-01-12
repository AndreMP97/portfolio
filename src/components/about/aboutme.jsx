import Picture from "../../assets/foto.jpg"
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function handleSlide(value) {
    let slider = document.getElementById("aboutSlider");
    slider.scrollLeft += value;
}

export default function AboutMe() {
    return (
        <div className="flex h-full min-w-full snap-center">
            <div className="hidden md:flex w-10 mt-48">
                <div className="block h-10 w-10" />
            </div>
            <div className="hidden md:flex w-1/4 justify-center m-2">
                <img className="h-48 w-48 rounded-md" src={Picture} alt="Profile" />
            </div>
            <div className="flex flex-col px-4 py-2 md:py-0 md:pr-8 md:w-3/4 text-white text-md md:text-xl font-mono space-y-2">
                <p>Hello! My name is André Pacheco and I'm a software developer from Portugal, with a passion for web development. </p>
                <p>I use my skills to create and maintain websites as well as web applications. My interests and expertise lie in programming languages such as JavaScript, HTML, and CSS, as well as frameworks like React. </p>
                <p>I stay up-to-date with the latest technologies in web development to maximize the potential of my projects. My aim is to deliver high-quality results with my problem-solving and analytical skills.</p>
            </div>
            <div className="hidden md:flex w-10 mt-48">
                <ChevronRightIcon className="block h-10 w-10 text-white cursor-pointer hover:scale-125" onClick={() => handleSlide(1000)}/>
            </div>
        </div>
    )
}