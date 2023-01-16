import { useForm } from "react-hook-form";

export default function Contact() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="flex flex-col h-full w-5/6">
            <div className="flex flex-col h-20 md:h-32 justify-end items-center md:items-start">
                <h1 className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-5xl md:py-3">Contact me</h1>
            </div>
            <div className="flex h-full pt-8 justify-center items-center text-white text-lg">
                <div className="flex h-full w-4/5 lg:w-3/5">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full w-full space-y-2 md:space-y-4">
                        <input {...register("firstName", { required: true })} 
                        aria-invalid={errors.firstName ? "true" : "false"} 
                        placeholder="First Name" 
                        className="w-full text-white border-b-2 bg-gray-900 focus:outline-none" />
                        {errors.firstName?.type === 'required' && <small className="text-red-600">First name is required</small>}
                        
                        <input {...register("lastName", { required: true })} 
                        aria-invalid={errors.lastName ? "true" : "false"} 
                        placeholder="Last Name" 
                        className="w-full text-white border-b-2 bg-gray-900 focus:outline-none" />
                        {errors.lastName?.type === 'required' && <small className="text-red-600">Last name is required</small>}

                        <input {...register("email", { required: true })} 
                        aria-invalid={errors.email ? "true" : "false"} 
                        placeholder="Email" 
                        className="w-full text-white border-b-2 bg-gray-900 focus:outline-none" />
                        {errors.email?.type === 'required' && <small className="text-red-600">Email is required</small>}
                        
                        <textarea {...register("message", { required: true })} 
                        aria-invalid={errors.message ? "true" : "false"} 
                        placeholder="Your message" 
                        className="resize-none h-1/2 w-full text-white border-b-2 bg-gray-900 focus:outline-none" />
                        {errors.message?.type === 'required' && <small className="text-red-600">Message is required</small>}
                        
                        <input type="submit" className="h-10 w-full bg-gray-800 text-white text-bold rounded-md hover:bg-gray-600" />
                    </form>
                </div>
            </div>
        </div>
    )
}