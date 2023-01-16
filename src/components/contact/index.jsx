import { useForm } from "react-hook-form";

export default function Contact() {
    const { register } = useForm();

    return (
        <div className="flex flex-col h-full w-5/6">
            <div className="flex flex-col h-20 md:h-32 justify-end items-center md:items-start">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-3">Contact me</h1>
            </div>
            <div className="flex h-full pt-8 justify-center items-center text-white text-lg">
                <div className="flex h-full w-4/5 lg:w-3/5">
                    <form onSubmit={ () => console.log("sent")} className="h-full w-full space-y-2 md:space-y-4">
                        <input {...register("firstName", { required: true })} placeholder="First Name" className="w-full text-white border-b-2 bg-gray-900 focus:outline-none"/>
                        <input {...register("lastName", { required: true })} placeholder="Last Name" className="w-full text-white border-b-2 bg-gray-900 focus:outline-none"/>
                        <input {...register("email", { required: true })} placeholder="Email" className="w-full text-white border-b-2 bg-gray-900 focus:outline-none"/>
                        <textarea {...register("message", { required: true })} placeholder="Your message" className="resize-none h-1/2 w-full text-white border-b-2 bg-gray-900 focus:outline-none" />
                        <input type="submit" className="h-12 w-full bg-gray-800 text-white text-bold rounded-md hover:bg-gray-600" />
                    </form>
                </div>
            </div>
        </div>
    )
}