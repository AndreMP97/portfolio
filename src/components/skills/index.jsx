import Bootstrap from "../../assets/bootstrap-icon.png";
import Cpp from "../../assets/cpp-icon.png";
import CSS from "../../assets/css-icon.png";
import GitHub from "../../assets/github-icon.png";
import HTML from "../../assets/html-icon.png";
import Java from "../../assets/java-icon.png";
import JS from "../../assets/javascript-icon.png";
import MySQL from "../../assets/mysql-icon.png";
import PHP from "../../assets/php-icon.png";
import Python from "../../assets/python-icon.png";
import React from "../../assets/react-js-icon.png";
import Tailwind from "../../assets/tailwind-icon.png";

const icons = [
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: CSS },
    { name: "Bootstrap CSS", icon: Bootstrap },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "JavaScript", icon: JS },
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
        <div className="flex flex-col h-full w-5/6">
            <div className="flex flex-col h-20 md:h-32 justify-end items-center md:items-start">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-3">Experience</h1>
            </div>
            <div className="flex h-full justify-center pt-8 overflow-y-scroll scrollbar-none md:justify-start md:overflow-hidden md:flex-col">
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0 lg:grid-cols-6 lg:gap-4">
                    {icons.map((item) => (
                        <div key={item.name} className="flex flex-col h-48 lg:h-52 justify-between items-center font-mono text-white hover:scale-110 duration-500">
                            <img className="w-24 lg:w-32 rounded-md m-auto" src={item.icon} alt="Profile" />
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}