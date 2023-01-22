import WEATHER from "../../assets/weather.jpg";
import PESTA from "../../assets/PESTA.png";

export default function Projects() {
    return (
        <div className="flex flex-col h-5/6 w-5/6 mx-auto">
            <div className="flex flex-col h-16 md:h-20 justify-end items-start">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-3">Projects</h1>
            </div>
            <div className="flex flex-col h-full mt-4 space-y-4">
                <div className="flex h-1/2 w-full justify-start bg-gray-900 rounded-md space-x-4">
                    <div className="flex flex-col order-1 w-1/2 justify-center items-center">
                        <img className="w-5/6 rounded-md" src={WEATHER} alt="Weather APP" />
                    </div>
                    <div className="flex flex-col order-2 w-1/2 items-start space-y-2">
                        <p className="font-semibold text-white text-base md:text-lg xl:text-xl self-center">Weather Forecast</p>
                        <p className="font-light text-white text-sm md:text-base xl:text-lg">This is a small project developed with React and it uses two different APIs to fetch the necessary data to work.</p>
                        <p className="font-light text-white text-base md:text-lg xl:text-xl">Goals</p>
                        <p className="font-light text-white text-base md:text-lg xl:text-xl">Difficulties</p>
                        <p className="font-light text-white text-base md:text-lg xl:text-xl">Learning</p>
                        <p className="font-light text-white text-base md:text-lg xl:text-xl">React JSON</p>
                        <div className="flex space-x-2">
                            <p className="font-light text-white text-base md:text-lg xl:text-xl">Github</p>
                            <p className="font-light text-white text-base md:text-lg xl:text-xl">Live Page</p>
                        </div>
                    </div>
                </div>
                <div className="flex h-1/2 w-full justify-end bg-gray-900 rounded-md space-x-4">
                    <div className="flex flex-col order-2 w-1/2 justify-center items-center">
                        <img className="w-8/12 rounded-md" src={PESTA} alt="PESTA" />
                    </div>
                    <div className="flex flex-col order-1 w-1/2 items-start space-y-2">
                        <p className="font-semibold text-white text-base md:text-lg xl:text-xl self-center">Managment Platform</p>
                        <p className="font-light text-white text-base md:text-lg xl:text-xl">Description</p>
                        <p className="font-light text-white text-base md:text-lg xl:text-xl">Goals</p>
                        <p className="font-light text-white text-base md:text-lg xl:text-xl">Difficulties</p>
                        <p className="font-light text-white text-base md:text-lg xl:text-xl">Learning</p>
                        <p className="font-light text-white text-base md:text-lg xl:text-xl">React PHP JSON</p>
                        <div className="flex space-x-2">
                            <p className="font-light text-white text-base md:text-lg xl:text-xl">Github</p>
                            <p className="font-light text-white text-base md:text-lg xl:text-xl">Live Page</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}