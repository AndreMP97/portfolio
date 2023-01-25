import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex w-5/6 justify-center items-center">
            <a href="https://github.com/AndreMP97/portfolio" target="_blank" rel="noreferrer" className="">
                <div className="flex flex-col text-white hover:text-gray-400 space-y-6">
                    <h4 className="font-semibold">Designed and built by André Pacheco</h4>
                    <FaGithub className="h-6 w-auto" />
                </div>
            </a>
        </div>
    )
}