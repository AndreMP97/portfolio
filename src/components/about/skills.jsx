import Bootstrap from "../../assets/bootstrap-icon.png";
import Cpp from "../../assets/cpp-icon.png";
import CSS from "../../assets/css-icon.png";
import GitHub from "../../assets/github-icon.png";
import HTML from "../../assets/html-icon.png";
import Java from "../../assets/java-icon.png";
import JS from "../../assets/javascript-icon.png";
import MySQL from "../../assets/mysql-icon.png";
//import Node from "../../assets/node-js-icon.png";
import PHP from "../../assets/php-icon.png";
import Python from "../../assets/python-icon.png";
import React from "../../assets/react-js-icon.png";
import Tailwind from "../../assets/tailwind-icon.png";

const icons = [
    { name: "HTML", icon: HTML },
    { name: "JavaScript", icon: JS },
    { name: "CSS", icon: CSS },
    { name: "Bootstrap CSS", icon: Bootstrap },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "React", icon: React },
    { name: "MySQL", icon: MySQL },
    { name: "PHP", icon: PHP },
    { name: "Python", icon: Python },
    { name: "C/C++", icon: Cpp },
    { name: "Java", icon: Java },
    { name: "GitHub", icon: GitHub },
]

export default function Skills() {
    return (
        <div className="flex flex-col h-full min-w-full snap-center">
            <div className="flex flex-col h-1/6 justify-center items-center text-center">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:w-[600px] md:text-5xl md:py-6">My experience</h1>
            </div>
            <div className="flex h-5/6 justify-center snap-center overflow-y-scroll scrollbar-none md:overflow-hidden md:flex-col">
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:gap-4 lg:grid-cols-6">
                    {icons.map((item) => (
                        <div key={item.name} className="flex flex-col h-52 justify-center items-center font-mono text-center text-white hover:scale-110 duration-500">
                            <img className="w-24 lg:w-32 rounded-md mx-auto" src={item.icon} alt="Profile" />
                            <p className="my-2 md:my-4">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}