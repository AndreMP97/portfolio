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
                    className="text-white font-semibold border-b-4 border-gray-600 py-0.5 md:py-1 self-center"
                >
                    About me
                </motion.h1>
            </div>
            <div className="flex h-full mt-4 pb-4 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-500 space-x-4 select-text text-justify
            md:flex-col md:overflow-hidden md:snap-none md:space-y-4 md:space-x-0
            lg:flex-row lg:space-x-4 lg:space-y-0 
            2xl:flex-col 2xl:space-x-0 2xl:space-y-6">
                <div className="flex flex-col min-w-full space-y-2 lg:space-y-4 lg:w-7/12 lg:min-w-min 2xl:w-8/12 overflow-y-scroll scrollbar-none snap-start md:snap-none md:self-center lg:self-auto 2xl:self-center">
                    <motion.h4
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
                        className="text-white">
                        I'm André Pacheco, a software developer living in Portugal. I enjoy creating applications that can be used by everyone on the internet. My interest in software development started at a young age when I decided to inspect the elements of a website, which led me to learn the basics of HTML and CSS.
                    </motion.h4>
                    <motion.h4
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
                        className="text-white"
                    >
                        Fast forwarding to 2018, I enrolled in a Bachelor of Science in Electrical and Computer Engineering, which combines the study of electrical engineering and computer science. During my degree, I became familiar with a multitude of subjects such as mathematics, physics, programming, electronics, instrumentation, automation, control, telecommunications, energy systems, and management.
                    </motion.h4>
                    <motion.h4
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
                        className="text-white"
                    >
                        Today, with the subjects that I learned during my B.Sc., I have the ability to design and develop software applications. Furthermore, I'm an avid learner who enjoys experimenting with new technologies during my free time, and I'm constantly striving to improve my skills to stay up-to-date with the industry.
                    </motion.h4>
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
                    className="flex flex-col min-w-full snap-start
                    md:snap-none md:self-center 
                    lg:space-y-4 lg:w-5/12 lg:min-w-min lg:self-start
                    2xl:space-y-2 2xl:w-8/12 2xl:self-center"
                >
                    <h4 className="self-center text-white mb-4 lg:mb-0 2xl:mb-4 font-semibold">Technologies I have worked with:</h4>
                    <Skills />
                </motion.div>
            </div>
        </div>
    )
}