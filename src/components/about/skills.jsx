import Bootstrap from "../../assets/bootstrap-icon.png";
import Cpp from "../../assets/cpp-icon.png";
import CSS from "../../assets/css-icon.png";
import GitHub from "../../assets/github-icon.png";
import HTML from "../../assets/html-icon.png";
import Java from "../../assets/java-icon.png";
import JS from "../../assets/javascript-icon.png";
import Node from "../../assets/node-js-icon.png";
import PHP from "../../assets/php-icon.png";
import Python from "../../assets/python-icon.png";
import React from "../../assets/react-js-icon.png";
import Tailwind from "../../assets/tailwind-icon.png";

const icons = [
    { name: "HTML", icon: HTML },
    { name: "JavaScript", icon: JS },
    { name: "CSS", icon: CSS },
    { name: "Node.js", icon: Node },
    { name: "React", icon: React },
    { name: "Bootstrap CSS", icon: Bootstrap },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "PHP", icon: PHP },
    { name: "Python", icon: Python },
    { name: "C/C++", icon: Cpp },
    { name: "Java", icon: Java },
    { name: "GitHub", icon: GitHub },
]

export default function AboutMe() {
    return (
        <div className="flex flex-col h-full min-w-full snap-center">
            <div className="flex flex-col h-1/6 justify-center items-center">
                <h1 className="text-white text-3xl md:text-5xl md:py-6 md:pl-8 font-serif font-semibold">My experience</h1>
            </div>
            <div div className="flex h-5/6 justify-center snap-center overflow-y-scroll scrollbar-none md:overflow-hidden md:flex-col">
                <div className="grid grid-cols-1 gap-2 items-center text-center text-white font-mono md:gap-1 md:grid-cols-4 lg:gap-4 lg:grid-cols-6">
                    {icons.map((item) => (
                        <div key={item.name} className="hover:scale-110 duration-500">
                            <img className="w-32 md:w-24 mx-auto rounded-md" src={item.icon} alt="Profile" />
                            <p className="my-2 md:my-4">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}