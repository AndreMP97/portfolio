import { motion } from "framer-motion";
import { useState } from "react";
import Skills from "./skills";

export default function About() {
    const [isInView1, setIsInView1] = useState(false);
    const [isInView2, setIsInView2] = useState(false);

    return (
        <section id="about" className="flex flex-col w-5/6 mx-auto pt-16 md:pt-24">
            <div
                className="flex flex-col h-16 mb-11 justify-end items-start
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
                        once: true,
                        amount: 0.8
                    }}
                    className="text-white font-semibold border-b-4 border-gray-600 py-0.5 md:py-1 self-center"
                >
                    About me
                </motion.h1>
            </div>
            <div className="flex flex-col space-y-14 md:space-y-20">
                <motion.div
                    whileInView={() => {
                        // when element in viewport , set IsInView true!
                        setIsInView1(true);
                    }}
                    viewport={{
                        once: true,
                        amount: 0.4
                    }}
                    className="flex flex-col w-full space-y-6 select-text self-center
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
                        animate={
                            isInView1 && {
                                y: 0,
                                opacity: 1
                            }
                        }
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
                        animate={
                            isInView1 && {
                                y: 0,
                                opacity: 1
                            }
                        }
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
                        animate={
                            isInView1 && {
                                y: 0,
                                opacity: 1
                            }
                        }
                        className="text-white"
                    >
                        Today, with the subjects that I learned during my B.Sc., I have the ability to design and develop software applications. Furthermore, I'm an avid learner who enjoys experimenting with new technologies during my free time, and I'm constantly striving to improve my skills to stay up-to-date with the industry.
                    </motion.p>
                </motion.div>
                <motion.div
                    whileInView={() => {
                        // when element in viewport , set IsInView true!
                        setIsInView2(true);
                    }}
                    viewport={{
                        once: true,
                        amount: 0.8
                    }}
                    className="flex flex-col w-full self-center space-y-10
                    md:space-y-16
                    xl:w-10/12
                    2xl:w-8/12"
                >
                    <motion.h3
                        initial={{
                            y: -10,
                            opacity: 0
                        }}
                        transition={{
                            delay: 0.5,
                            duration: 0.5
                        }}
                        animate={
                            isInView2 && {
                                y: 0,
                                opacity: 1
                            }
                        }
                        className="self-center text-white font-semibold">
                        Working with:
                    </motion.h3>
                    <motion.div
                        initial={{
                            y: 10,
                            opacity: 0
                        }}
                        transition={{
                            delay: 1,
                            duration: 1
                        }}
                        animate={
                            isInView2 && {
                                y: 0,
                                opacity: 1
                            }
                        }
                    >
                        <Skills />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}