import Picture from "../../assets/foto.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

export default function Hero() {
    return (
        <div className="bg-gray-900 flex flex-wrap flex-grow flex-col items-center justify-between">
            <div className="flex flex-col justify-center h-full">
                <img className="mx-auto mt-6 h-64 w-64 rounded-full" src={Picture} alt="Profile" />
                <h3 className="flex mt-6 mb-3 text-5xl font-bold text-white justify-center">André Pacheco</h3>
                <h3 className="flex mb-3 text-3xl font-medium text-white justify-center">Software Developer</h3>
                <button
                    type="button"
                    className="flex w-60 self-center justify-center items-center px-8 py-3 border border-transparent text-xl font-medium rounded-full shadow-sm text-white bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <ArrowDownTrayIcon className="h-8 w-8 mr-2" />
                    Download CV
                </button>
                <div className="flex mt-4 justify-center space-x-3 pb-8">
                    <button
                        type="button"
                        className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center mr-2"
                    >
                        <a href="https://github.com/AndreMP97/" target="_blank" rel="noreferrer"><FaGithub /></a>
                        <span className="sr-only">Github</span>
                    </button>
                    <button
                        type="button"
                        className="text-white bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-2xl p-2.5 text-center inline-flex items-center mr-2"
                    >
                        <a href="https://linkedin.com/in/andrempacheco97/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                        <span className="sr-only">LinkedIn</span>
                    </button>
                </div>
            </div>
        </div>
    )
}