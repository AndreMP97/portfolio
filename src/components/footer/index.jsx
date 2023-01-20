import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex w-5/6 justify-center items-center mb-20">
            <div></div>
            <a href="https://github.com/AndreMP97/portfolio" target="_blank" rel="noreferrer" className="flex flex-col text-white hover:text-gray-400">
                <h1 className="self-center text-medium font-normal pl-2">Designed and built by André Pacheco</h1>
                <FaGithub className="h-6 w-auto" />
            </a>
            <div></div>
        </div>
    )
}