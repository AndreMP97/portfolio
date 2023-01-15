import { FaRegCopyright } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="flex shrink-0 justify-center items-center w-full h-24 md:h-32 bg-gray-900">
            <div className="flex w-5/6 justify-between">
                <div className="flex">
                    <FaRegCopyright className="h-6 w-auto text-white" />
                    <h1 className="self-center text-medium font-normal text-white pl-2">2023 André Pacheco</h1>
                </div>
                <div className="text-white hover:text-gray-300 text-sm cursor-pointer capitalize font-medium">
                    <a href="#test" className="flex">
                        Disclaimer
                    </a>
                </div>

            </div>
        </div>
    )
}