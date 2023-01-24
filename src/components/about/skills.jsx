import { 
    SiBootstrap, 
    SiCplusplus,
    SiCss3,
    SiGithub,
    SiHtml5,
    SiJava,
    SiJavascript,
    SiMysql,
    SiPhp,
    SiPython,
    SiReact,
    SiTailwindcss,
} from "react-icons/si";

const icons = [
    { name: "HTML", icon: <SiHtml5 size={64} className="m-auto text-gray-400" /> },
    { name: "CSS", icon: <SiCss3 size={64} className="m-auto text-gray-400" /> },
    { name: "Bootstrap", icon: <SiBootstrap size={64} className="m-auto text-gray-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={64} className="m-auto text-gray-400" /> },
    { name: "JavaScript", icon: <SiJavascript size={64} className="m-auto text-gray-400" /> },
    { name: "React", icon: <SiReact size={64} className="m-auto text-gray-400" /> },
    { name: "MySQL", icon: <SiMysql size={64} className="m-auto text-gray-400" /> },
    { name: "PHP", icon: <SiPhp size={64} className="m-auto text-gray-400" /> },
    { name: "Python", icon: <SiPython size={64} className="m-auto text-gray-400" /> },
    { name: "C/C++", icon: <SiCplusplus size={64} className="m-auto text-gray-400" /> },
    { name: "Java", icon: <SiJava size={64} className="m-auto text-gray-400" /> },
    { name: "GitHub", icon: <SiGithub size={64} className="m-auto text-gray-400" /> },
]

export default function Skills() {
    return (
        <div className="grid grid-cols-3 gap-4 md:portrait:grid-cols-4 md:landscape:grid-cols-3 md:gap-2 lg:gap-y-8 xl:gap-4 2xl:grid-cols-6 h-32">
            {icons.map((item) => (
                <div key={item.name} className="flex flex-col justify-between items-center space-y-2">
                    {item.icon}
                    <p className="text-white">{item.name}</p>
                </div>
            ))}
        </div>
    )
}