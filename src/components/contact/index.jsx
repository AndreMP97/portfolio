import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FaLocationArrow, FaRegEnvelope } from "react-icons/fa";

export default function Contact() {
    const { register, formState: { errors }, handleSubmit, trigger } = useForm();
    const onSubmit = async (e) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
        else {
            document.getElementById("contactForm").submit();
        }
    };

    return (
        <div className="flex flex-col h-5/6 w-5/6 mx-auto">
            <div className="flex flex-col h-16 md:h-20 justify-end items-start">
                <motion.h1
                    initial={{
                        y: -10,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    viewport={{
                        once: true
                    }}
                    className="text-white border-b-4 border-gray-600 py-0.5 md:py-1.5 self-center"
                >
                    Contact me
                </motion.h1>
            </div>
            <div className="flex flex-col h-full pt-4 justify-center items-center pb-4">
                <div className="flex flex-col h-1/4 w-full lg:w-3/5 justify-center space-y-4 items-center select-text">
                    <motion.div
                        initial={{
                            y: 10,
                            opacity: 0
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.5
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        className="flex space-x-4 items-center">
                        <FaLocationArrow size={32} className="text-white" />
                        <p className="text-white">Porto, Portugal</p>
                    </motion.div>
                    <motion.div
                        initial={{
                            y: 10,
                            opacity: 0
                        }}
                        transition={{
                            delay: 1.5,
                            duration: 0.5
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        className="flex space-x-4 items-center">
                        <FaRegEnvelope size={32} className="text-white" />
                        <a href="mailto:andre.m.pacheco.97@gmail.com" rel="noreferrer" className="text-white">
                            <p>andre.m.pacheco.97@gmail.com</p>
                        </a>
                    </motion.div>
                </div>
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        delay: 2,
                        duration: 1
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    viewport={{
                        once: true
                    }}
                    className="flex h-3/4 w-full lg:w-3/5 text-white">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        id="contactForm"
                        target="_blank"
                        action="https://formsubmit.co/c16896ae7ac26bc84e6819287adad09a"
                        method="POST"
                        className="flex flex-col h-full w-full space-y-2 md:space-y-4">
                        <input {...register("firstName", { required: true, maxLength: 128 })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                            placeholder="First Name"
                            className="w-full text-white border-b-2 bg-inherit focus:outline-none py-2"
                        />
                        {errors.firstName?.type === "required" && <small className="text-red-600">First name is required</small>}

                        <input {...register("lastName", { required: true, maxLength: 128 })}
                            aria-invalid={errors.lastName ? "true" : "false"}
                            placeholder="Last Name"
                            className="w-full text-white border-b-2 bg-inherit focus:outline-none py-2" />
                        {errors.lastName?.type === "required" && <small className="text-red-600">Last name is required</small>}

                        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                            aria-invalid={errors.email ? "true" : "false"}
                            placeholder="Email"
                            className="w-full text-white border-b-2 bg-inherit focus:outline-none py-2" />
                        {errors.email?.type === "required" && <small className="text-red-600">Email is required</small>}
                        {errors.email?.type === "pattern" && <small className="text-red-600">Invalid email address.</small>}

                        <textarea {...register("message", { required: true })}
                            aria-invalid={errors.message ? "true" : "false"}
                            placeholder="Your message"
                            className="resize-none h-full w-full text-white border-b-2 bg-inherit focus:outline-none" />
                        {errors.message?.type === "required" && <small className="text-red-600">Message is required</small>}

                        <button type="submit" className="h-16 w-full bg-white text-gray-800 rounded-md
                        hover:bg-gray-600 hover:text-white">
                            <p className="font-medium">Send message</p>
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}