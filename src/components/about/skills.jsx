import Picture from "../../assets/foto.jpg"
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

function handleSlide(value) {
    let slider = document.getElementById("aboutSlider");
    slider.scrollLeft += value;
}

export default function AboutMe() {
    return (
        <div className="flex h-full min-w-full snap-center">
            <div className="hidden md:flex w-10 mt-48">
                <ChevronLeftIcon className="block h-10 w-10 text-white cursor-pointer hover:scale-125" onClick={() => handleSlide(-1000)} />
            </div>
            <div className="hidden md:flex w-1/4 justify-center m-2">
                <img className="h-48 w-48 rounded-md" src={Picture} alt="Profile" />
            </div>
            <div className="flex flex-col px-4 py-2 md:py-0 md:pr-8 md:w-3/4 text-white text-md md:text-xl font-mono space-y-2">
                <p>Skills</p>
            </div>
            <div className="hidden md:flex w-10 mt-48">
                <div className="block h-10 w-10"/>
            </div>
        </div>
    )
}