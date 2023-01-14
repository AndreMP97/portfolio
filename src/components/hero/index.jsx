import Picture from "../../assets/foto.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { useTypewriter } from 'react-simple-typewriter';

export default function Hero() {
    const [text] = useTypewriter({
        words: ["Software Developer"],
        loop: true,
        delaySpeed: 2500
    });

    return (
        <div className="bg-gray-900 flex flex-grow flex-col items-center justify-between">
            <div className="flex flex-col justify-center h-full">
                <img className="mx-auto mt-6 h-64 w-64 rounded-full" src={Picture} alt="Profile" />
                <h1 className="flex mt-6 mb-3 text-5xl font-bold text-white justify-center">André Pacheco</h1>
                <h2 className="flex h-9 mb-3 text-3xl font-mono text-white justify-center">{text}</h2>
                <button
                    type="button"
                    className="flex animate-pulse w-60 self-center justify-center items-center px-8 py-3 border border-transparent text-xl font-medium rounded-full shadow-sm text-white bg-gray-700 hover:bg-gray-600 hover:animate-none"
                >
                    <ArrowDownTrayIcon className="h-8 w-8 mr-2" />
                    Download CV
                </button>
                <div className="flex mt-4 justify-center space-x-3 pb-8"> 
                    <a href="https://github.com/AndreMP97/" target="_blank" rel="noreferrer">
                        <button
                            type="button"
                            className="text-white bg-gray-700 font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center mr-2 hover:bg-gray-600"
                        >
                            <FaGithub />
                            <span className="sr-only">Github</span>
                        </button>
                    </a>
                    <a href="https://linkedin.com/in/andrempacheco97/" target="_blank" rel="noreferrer">
                        <button
                            type="button"
                            className="text-white bg-gray-700 font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center mr-2 hover:bg-gray-600"
                        >
                            <FaLinkedin />
                            <span className="sr-only">LinkedIn</span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}