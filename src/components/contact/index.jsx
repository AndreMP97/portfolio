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
        <section id="contact" className="flex flex-col w-5/6 mx-auto pt-16 md:pt-24 pb-5 md:pb-10">
            <div
                className="flex flex-col h-16 mb-8 justify-end items-start
                md:h-20 md:mb-16"
            >
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
            <div className="flex flex-col justify-start items-center space-y-10 md:space-y-20">
                <div className="flex flex-col w-full lg:w-3/5 justify-center space-y-4 items-center select-text">
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
                        className="flex space-x-4 items-center text-white hover:text-gray-400">
                        <FaRegEnvelope size={32} />
                        <a href="mailto:andre.m.pacheco.97@gmail.com" rel="noreferrer">
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
                    className="flex w-full lg:w-3/5 text-white">
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        id="contactForm"
                        target="_blank"
                        action="https://formsubmit.co/c16896ae7ac26bc84e6819287adad09a"
                        method="POST"
                        className="flex flex-col h-full w-full space-y-4 md:space-y-6">
                        <input {...register("firstName", { required: true, maxLength: 128 })}
                            aria-invalid={errors.firstName ? "true" : "false"}
                            placeholder="First Name"
                            className="w-full text-white border-b-2 bg-inherit focus:outline-none py-2"
                        />
                        {errors.firstName?.type === "required" && <small className="text-red-400">First name is required</small>}

                        <input {...register("lastName", { required: true, maxLength: 128 })}
                            aria-invalid={errors.lastName ? "true" : "false"}
                            placeholder="Last Name"
                            className="w-full text-white border-b-2 bg-inherit focus:outline-none py-2" />
                        {errors.lastName?.type === "required" && <small className="text-red-400">Last name is required</small>}

                        <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
                            aria-invalid={errors.email ? "true" : "false"}
                            placeholder="Email"
                            className="w-full text-white border-b-2 bg-inherit focus:outline-none py-2" />
                        {errors.email?.type === "required" && <small className="text-red-400">Email is required</small>}
                        {errors.email?.type === "pattern" && <small className="text-red-400">Invalid email address.</small>}

                        <textarea {...register("message", { required: true })}
                            aria-invalid={errors.message ? "true" : "false"}
                            placeholder="Your message"
                            className="resize-none h-48 w-full text-white border-b-2 bg-inherit focus:outline-none" />
                        {errors.message?.type === "required" && <small className="text-red-400">Message is required</small>}

                        <button type="submit" className="h-8 w-full bg-white text-gray-800 rounded-md
                        hover:bg-gray-600 hover:text-white">
                            <p className="font-medium">Send message</p>
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}