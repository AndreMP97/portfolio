import Picture from "../../assets/foto.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTypewriter } from 'react-simple-typewriter';

export default function Hero() {
    const [text] = useTypewriter({
        words: ["I'm a Software Developer"],
        loop: true,
        delaySpeed: 2500
    });

    return (
        <div className="flex flex-col lg:flex-row h-full w-5/6 mx-auto justify-center items-center">
            <div className="flex lg:h-full lg:w-2/3 order-2 lg:order-1 select-text">
                <div className="flex flex-col justify-start lg:justify-center items-start space-y-4">
                    <h2 className="text-xl md:text-3xl xl:text-4xl text-white">Hello,</h2>
                    <h1 className="text-2xl md:text-4xl xl:text-5xl text-white">My name is André Pacheco</h1>
                    <h3 className="h-5 text-lg md:h-6 xl:h-9 md:text-2xl xl:text-3xl text-white">{text}</h3>
                    <div className="lg:w-5/6 space-y-1">
                        <p className="text-base md:text-base xl:text-lg text-white text-justify">Passionate about web development and dedicated to create high-quality, dynamic, and interactive websites.
                            Constantly learning new technologies to both improve my skills and stay current with the industry.
                            Always looking for new challenges to grow as a developer.</p>
                    </div>
                    <div className="inline-flex space-x-4 w-full justify-center items-center md:justify-start">
                        <a href="mailto:andre.m.pacheco.97@gmail.com" target="_blank" rel="noreferrer">
                            <button
                                type="button"
                                className="text-inherit bg-white hover:text-white hover:bg-gray-500 border border-transparent rounded-md px-4 py-2 font-semibold animate-pulse"
                            >
                                Hire me
                                <span className="sr-only">Hire me</span>
                            </button>
                        </a>
                        <a href="https://linkedin.com/in/andrempacheco97/" target="_blank" rel="noreferrer">
                            <button
                                type="button"
                                className="text-white hover:text-gray-500 border border-transparent py-2"
                            >
                                <FaLinkedin size={32} />
                                <span className="sr-only">LinkedIn</span>
                            </button>
                        </a>
                        <a href="https://github.com/AndreMP97/" target="_blank" rel="noreferrer">
                            <button
                                type="button"
                                className="text-white hover:text-gray-500 border border-transparent py-2"
                            >
                                <FaGithub size={32} />
                                <span className="sr-only">Github</span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:h-full lg:w-1/3 justify-center items-center order-1 lg:order-2">
                <div className="flex relative justify-center items-center">
                    <div className="absolute border border-gray-400 lg:h-48 lg:w-48 xl:h-64 xl:w-64 rounded-full animate-ping" />
                    <div className="absolute border border-gray-700 lg:h-60 lg:w-60 xl:h-72 xl:w-72 rounded-full" />
                    <div className="absolute border border-gray-600 lg:h-64 lg:w-64 xl:h-80 xl:w-80 rounded-full animate-pulse" />
                    <div className="absolute border border-gray-500 h-48 w-48 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-96 xl:w-96 rounded-full animate-pulse" />
                    <img className="h-48 w-48 md:h-64 md:w-64 lg:h-60 lg:w-60 xl:h-72 xl:w-72 rounded-full" src={Picture} alt="Profile" />
                </div>
            </div>
        </div >
    )
}