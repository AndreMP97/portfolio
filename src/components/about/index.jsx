import { motion } from "framer-motion";
import Skills from "./skills";

export default function About() {
    return (
        <section id="about" className="flex flex-col w-5/6 mx-auto pt-16 md:pt-24">
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
                    className="text-white font-semibold border-b-4 border-gray-600 py-0.5 md:py-1 self-center"
                >
                    About me
                </motion.h1>
            </div>
            <div className="flex flex-col space-y-8 md:space-y-20">
                <div className="flex flex-col w-full space-y-6 select-text self-center
                md:space-y-8
                xl:w-10/12
                2xl:w-8/12">
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
                        className="text-white">
                        I'm André Pacheco, a software developer living in Portugal. I enjoy creating applications that can be used by everyone on the internet. My interest in software development started at a young age when I decided to inspect the elements of a website, which led me to learn the basics of HTML and CSS.
                    </motion.p>
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
                        className="text-white"
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
                        className="text-white"
                    >
                        Today, with the subjects that I learned during my B.Sc., I have the ability to design and develop software applications. Furthermore, I'm an avid learner who enjoys experimenting with new technologies during my free time, and I'm constantly striving to improve my skills to stay up-to-date with the industry.
                    </motion.p>
                </div>
                {/*Desktop*/}
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
                    className="hidden
                    md:flex md:flex-col md:w-full md:self-center md:space-y-16
                    xl:w-10/12
                    2xl:w-8/12"
                >
                    <h3 className="self-center text-white">Technologies I have worked with:</h3>
                    <Skills />
                </motion.div>
                {/*Mobile*/}
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    transition={{
                        delay: 0.5,
                        duration: 1
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    viewport={{
                        once: true
                    }}
                    className="flex flex-col min-w-full space-y-6
                    md:hidden"
                >
                    <p className="self-center text-white font-semibold">Technologies I have worked with:</p>
                    <Skills />
                </motion.div>
            </div>
        </section>
    )
}