import Bootstrap from "../../assets/bootstrap-icon.png";
import Cpp from "../../assets/cpp-icon.png";
import CSS from "../../assets/css-icon.png";
import Github from "../../assets/github-icon.png";
import HTML from "../../assets/html-icon.png";
import Java from "../../assets/java-icon.png";
import JS from "../../assets/javascript-icon.png";
import Node from "../../assets/node-js-icon.png";
import PHP from "../../assets/php-icon.png";
import Python from "../../assets/python-icon.png";
import React from "../../assets/react-js-icon.png";
import Tailwind from "../../assets/tailwind-icon.png";

export default function AboutMe() {
    return (
        <div className="flex h-full min-w-full justify-center snap-center overflow-y-scroll scrollbar-none md:overflow-hidden md:flex-col">
            <div className="grid grid-cols-1 gap-2 items-center text-center text-white font-mono md:gap-4 md:grid-cols-4 lg:grid-cols-6">
                <h2 className="md:hidden text-white text-xl font-medium mt-4 self-center mb-2">My experience</h2>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={HTML} alt="Profile" />
                    <p className="my-2 md:my-4">HTML</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={JS} alt="Profile" />
                    <p className="my-2 md:my-4">JavaScript</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={CSS} alt="Profile" />
                    <p className="my-2 md:my-4">CSS</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={Node} alt="Profile" />
                    <p className="my-2 md:my-4">Node.js</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={React} alt="Profile" />
                    <p className="my-2 md:my-4">React</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={Bootstrap} alt="Profile" />
                    <p className="my-2 md:my-4">Bootstrap CSS</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={Tailwind} alt="Profile" />
                    <p className="my-2 md:my-4">Tailwind CSS</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={PHP} alt="Profile" />
                    <p className="my-2 md:my-4">PHP</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={Python} alt="Profile" />
                    <p className="my-2 md:my-4">Python</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={Cpp} alt="Profile" />
                    <p className="my-2 md:my-4">C/C++</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={Java} alt="Profile" />
                    <p className="my-2 md:my-4">Java</p>
                </div>
                <div className="hover:scale-110 duration-500">
                    <img className="w-32 md:w-24 mx-auto rounded-md" src={Github} alt="Profile" />
                    <p className="my-2 md:my-4">GitHub</p>
                </div>
            </div>
        </div>
    )
}