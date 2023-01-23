import { motion } from "framer-motion";
import Skills from "./skills";

export default function About() {
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
                    className="text-white text-3xl font-semibold border-b-4 border-gray-600 md:text-4xl lg:text-5xl md:py-3"
                >
                    About me
                </motion.h1>
            </div>
            <div className="flex md:flex-col h-full mt-4 pb-4 
            overflow-x-scroll md:overflow-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-500 md:snap-none
            md:space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0 2xl:flex-col 2xl:space-x-0 2xl:space-y-4 select-text text-justify">
                <div className="flex flex-col min-w-full space-y-2 lg:space-y-4 lg:w-7/12 lg:min-w-min 2xl:w-full overflow-y-scroll scrollbar-none snap-start md:snap-none">
                    <motion.p
                        initial={{
                            y: 10,
                            opacity: 0
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5
                        }}
                        whileInView={{
                            y: 0,
                            opacity: 1
                        }}
                        viewport={{
                            once: true
                        }}
                        className="font-light text-white text-base md:text-lg 2xl:text-xl">
                        I'm André Pacheco, a software developer living in Portugal. I enjoy creating applications that can be used by everyone on the internet. My interest in software development started at a young age when I decided to inspect the elements of a website, which led me to learn the basics of HTML and CSS.
                    </motion.p
                    >
                    <motion.p
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
                        className="font-light text-white text-base md:text-lg 2xl:text-xl"
                    >
                        Fast forwarding to 2018, I enrolled in a Bachelor of Science in Electrical and Computer Engineering, which combines the study of electrical engineering and computer science. During my degree, I became familiar with a multitude of subjects such as mathematics, physics, programming, electronics, instrumentation, automation, control, telecommunications, energy systems, and management.
                    </motion.p>
                    <motion.p
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
                        className="font-light text-white text-base md:text-lg 2xl:text-xl"
                    >
                        Today, with the subjects that I learned during my B.Sc., I have the ability to design and develop software applications. Furthermore, I'm an avid learner who enjoys experimenting with new technologies during my free time, and I'm constantly striving to improve my skills to stay up-to-date with the industry.
                    </motion.p>
                </div>
                <motion.div
                    initial={{
                        y: 10,
                        opacity: 0
                    }}
                    transition={{
                        delay: 2,
                        duration: 0.5
                    }}
                    whileInView={{
                        y: 0,
                        opacity: 1
                    }}
                    viewport={{
                        once: true
                    }}
                    className="flex flex-col min-w-full lg:space-y-4 lg:w-5/12 lg:min-w-min 2xl:space-y-0 2xl:w-full snap-start md:snap-none"
                >
                    <p className="self-center md:self-start font-semibold text-white text-base mb-4 md:text-lg lg:mb-0 2xl:text-xl 2xl:mb-4">Technologies I have worked with:</p>
                    <Skills />
                </motion.div>
            </div>
        </div>
    )
}