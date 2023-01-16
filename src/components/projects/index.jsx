import Sidenav from "../sidenav";
import Picture from "../../assets/aboutme.svg";

export default function Projects() {
    return (
        <div className="flex flex-col h-full w-5/6">
            <div className="flex w-full">
                <div className="flex flex-col h-20 w-1/2 justify-end items-start md:h-32 md:w-4/6">
                    <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-3">Projects</h1>
                </div>
                <div className="flex justify-end items-end w-1/2 md:h-32 md:w-2/6">
                    <Sidenav
                    current={"Projects"} 
                    />
                </div>
            </div>
            <div className="flex h-full flex-col lg:flex-row my-4 overflow-y-scroll scrollbar-none justify-between md:overflow-y-hidden">
                <div className="flex flex-col font-light text-white text-md space-y-2 md:text-lg lg:w-2/4 xl:text-xl">
                    <p>Projects</p>
                </div>
                <div className="hidden md:h-full md:flex md:pt-4 lg:pt-0 lg:w-2/4 justify-center items-start">
                    <img className="h-96 rounded-md" src={Picture} alt="Profile" />
                </div>
            </div>
        </div>
    )
}