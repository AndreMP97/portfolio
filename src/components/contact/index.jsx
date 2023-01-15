export default function Contact() {
    return (
        <div className="flex flex-col h-full w-5/6">
            <div className="flex flex-col h-20 md:h-32 justify-end items-center md:items-start">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-3">Contact me</h1>
            </div>
            <div className="flex h-full flex-col lg:flex-row pt-8 justify-between">
                <div className="flex flex-col font-light text-white text-md space-y-2 md:text-xl lg:w-2/4">
                    <p>Contact form</p>
                </div>
            </div>
        </div>
    )
}