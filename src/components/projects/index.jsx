import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import WEATHER from "../../assets/weather.jpg";
import PESTA from "../../assets/PESTA.png";

export default function Projects() {
    return (
        <div className="flex flex-col h-5/6 w-5/6 mx-auto">
            <div className="flex flex-col h-16 md:h-20 justify-end items-start">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-3">Projects</h1>
            </div>
            <div className="flex flex-col h-full mt-4 select-text overflow-y-scroll scrollbar-none md:overflow-hidden space-y-8 md:space-y-0">
                <div className="flex h-1/2 w-full justify-start bg-inherit space-x-4">
                    <a href="https://andremp97.github.io/weather-app/" target="_blank" rel="noreferrer" className="hidden lg:flex flex-col order-1 w-1/2 justify-center items-center">
                        <img className="w-5/6 rounded-md" src={WEATHER} alt="Weather APP" />
                    </a>
                    <div className="flex flex-col order-2 lg:w-1/2 md:justify-center lg:items-start space-y-2">
                        <p className="font-semibold text-white text-lg md:text-xl xl:text-2xl self-center">Weather Forecast</p>
                        <p className="font-light text-white text-sm md:text-base xl:text-lg">
                            Small project that fetches the current weather as well as the forecast for the next day.
                        </p>
                        <p className="font-light text-white text-sm md:text-base xl:text-lg">
                            The goal of this project was to stay up-to-date with the React framework and further my knowledge on how to handle third-party APIs.
                        </p>
                        <p className="font-light text-white text-sm md:text-base xl:text-lg">
                            The main difficulties with this project were on how to use two different APIs and handle the data between them.
                        </p>
                        <div className="flex space-x-2 self-center">
                            <a href="https://github.com/AndreMP97/weather-app" target="_blank" rel="noreferrer">
                                <FaGithub size={32} className="text-white hover:text-gray-400 border border-transparent" />
                            </a>
                            <a href="https://andremp97.github.io/weather-app/" target="_blank" rel="noreferrer">
                                <FaExternalLinkAlt size={32} className="text-white hover:text-gray-400 border border-transparent" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex h-1/2 w-full justify-end space-x-4">
                    <a href="https://github.com/AndreMP97/PESTA" target="_blank" rel="noreferrer" className="hidden lg:flex flex-col order-2 lg:w-1/3 xl:w-1/2 justify-center items-center">
                        <img className="lg:w-full xl:w-8/12 rounded-md" src={PESTA} alt="PESTA" />
                    </a>
                    <div className="flex flex-col order-1 lg:w-2/3 xl:w-1/2 md:justify-center items-start space-y-2">
                        <p className="font-semibold text-white text-lg md:text-xl xl:text-2xl self-center">Managment Platform</p>
                        <p className="font-light text-white text-sm md:text-base xl:text-lg">
                            This was a full-stack project done as part of my degree as a final evaluation.
                        </p>
                        <p className="font-light text-white text-sm md:text-base xl:text-lg">
                            The objectives were for companies to send their internship proposals, 
                            for teachers to propose and manage projects, 
                            for degree directors to manage the internships,
                            and for students to apply for any of the proposals.
                        </p>
                        <p className="font-light text-white text-sm md:text-base xl:text-lg">
                            To complete this project, I had to research and choose which were the best software languages and frameworks to achieve the proposed objectives.
                        </p>
                        <div className="flex space-x-2 self-center items-center">
                            <Link
                                to=""
                                className="text-inherit bg-white hover:text-white hover:bg-gray-400 border border-transparent rounded-md px-4 py-2 font-semibold"
                            >
                                Learn more
                            </Link>
                            <a href="https://github.com/AndreMP97/PESTA" target="_blank" rel="noreferrer">
                                <FaGithub size={32} className="text-white hover:text-gray-400 border border-transparent" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}