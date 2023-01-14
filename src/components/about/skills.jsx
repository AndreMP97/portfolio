import Picture from "../../assets/foto.jpg";

export default function AboutMe() {
    return (
        <div className="flex h-full min-w-full snap-center">
            <div className="hidden md:flex w-1/4 justify-center m-2">
                <img className="md:h-32 md:w-32 lg:h-48 lg:w-48 rounded-md" src={Picture} alt="Profile" />
            </div>
            <div className="flex flex-col px-4 py-2 md:py-0 md:pr-8 md:w-3/4 text-white text-md md:text-xl font-mono space-y-2">
                <p>Skills</p>
            </div>
        </div>
    )
}