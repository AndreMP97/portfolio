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
        <div className="flex h-full min-w-full justify-center snap-center overflow-y-scroll scrollbar-none md:overflow-hidden md:flex-col">
            <div className="grid grid-cols-1 gap-2 items-center text-center text-white font-mono md:gap-1 md:grid-cols-4 lg:gap-4 lg:grid-cols-6">
                <h2 className="md:hidden text-white text-xl font-medium mt-4 self-center mb-2">My experience</h2>
                {icons.map((item) => (
                    <div key={item.name} className="hover:scale-110 duration-500">
                        <img className="w-32 md:w-24 mx-auto rounded-md" src={item.icon} alt="Profile" />
                        <p className="my-2 md:my-4">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}