import Picture from "../../assets/ISEP.jfif";

export default function Education() {
    return (
        <div className="flex h-full min-w-full snap-center">
            <div className="hidden md:flex w-1/4 justify-center m-2">
                <img className="h-48 w-48 rounded-md" src={Picture} alt="Profile" />
            </div>
            <div className="flex flex-col px-4 py-2 md:py-0 md:pr-8 md:w-3/4 text-white text-md md:text-xl font-mono space-y-2 overflow-auto text-justify">
                <h2 className="md:hidden text-white text-xl font-medium mt-4 self-center">Who did I study?</h2>
                <p>Education</p>
            </div>
        </div>
    )
}