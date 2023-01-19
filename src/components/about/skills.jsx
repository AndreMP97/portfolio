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
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Tailwind", icon: Tailwind },
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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-0 lg:grid-cols-6 lg:gap-4 h-32">
            {icons.map((item) => (
                <div key={item.name} className="flex flex-col justify-between items-center hover:scale-110 duration-500">
                    <img className="w-16 rounded-md m-auto" src={item.icon} alt="Profile" />
                    <p className="font-mono text-white">{item.name}</p>
                </div>
            ))}
        </div>
    )
}