import Picture from "../../assets/ISEP.jfif";
//https://www.isep.ipp.pt/Course/Course/23

export default function Education() {
    return (
        <div className="flex flex-col h-full min-w-full snap-center">
            <div className="flex flex-col h-1/6 justify-center items-center text-center">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:w-[600px] md:text-5xl md:py-6">Bachelor of Science</h1>
            </div>
            <div className="flex h-5/6 md:py-8">
                <div className="hidden md:flex flex-col w-1/4 justify-start items-center m-2 space-y-2 text-white font-medium">
                    <a href="https://www.isep.ipp.pt/Course/Course/23" target="_blank" rel="noreferrer">
                        <img className="md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-md hover:scale-110 duration-500" src={Picture} alt="ISEP" />
                    </a>
                    <p className="whitespace-nowrap">Engineering</p>
                    <p className="whitespace-nowrap">Electrial and Computer</p>
                    <p className="whitespace-nowrap">2018-2022</p>
                </div>
                <div className="flex flex-col px-4 py-2 md:py-0 md:pr-8 md:w-3/4 text-white text-md md:text-xl font-mono space-y-2">
                    <p>Education</p>
                </div>
            </div>
        </div>
    )
}