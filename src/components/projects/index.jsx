export default function Projects() {
    return (
        <div className="flex flex-col h-5/6 w-5/6 mx-auto">
            <div className="flex flex-col h-16 md:h-20 justify-end items-start">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-3">Projects</h1>
            </div>
            <div className="flex flex-col h-full my-4 overflow-y-scroll scrollbar-none md:overflow-y-hidden lg:flex-row lg:space-x-4 select-text">
                <div className="flex flex-col space-y-2 lg:space-y-4 lg:w-7/12 xl:w-full">
                    <p className="font-light text-white text-base md:text-lg xl:text-xl">Projects</p>
                </div>
            </div>
        </div>
    )
}