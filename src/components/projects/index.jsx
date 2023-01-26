import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WEATHER from "../../assets/WEATHER.png";
import PESTA from "../../assets/PESTA.png";

export default function Projects() {
    return (
        <section id="projects" className="flex flex-col w-5/6 mx-auto pt-16 md:pt-24">
            <div className="flex flex-col h-16 mb-11 justify-end items-start
            md:h-20 md:mb-16">
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
                    Projects
                </motion.h1>
            </div>
            <div className="flex flex-col space-y-14 md:space-y-20">
                {/* Project 1 */}
                <div className="flex flex-col min-w-full justify-center mt-3 md:mt-4
                xl:flex-row xl:justify-start">
                    <a href="https://andremp97.github.io/weather-app/" target="_blank" rel="noreferrer" className="flex flex-col order-1 xl:w-1/2 justify-start items-center">
                        <motion.img
                            initial={{
                                x: -50,
                                opacity: 0
                            }}
                            transition={{
                                delay: 1,
                                duration: 1
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            className="w-full md:w-11/12 lg:w-9/12 xl:w-full rounded-md"
                            src={WEATHER}
                            alt="Weather APP"
                        />
                    </a>
                    <div className="flex flex-col w-full order-2 justify-center space-y-4 select-text self-center
                    md:w-11/12 md:space-y-6
                    lg:w-9/12
                    xl:w-1/2 xl:items-start xl:px-2 xl:pl-8">
                        <motion.h3
                            initial={{
                                y: -10,
                                opacity: 0
                            }}
                            transition={{
                                delay: 1,
                                duration: 1
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            className="text-white self-start mt-8 mb-2 md:mt-12 xl:mt-0 xl:mb-8"
                        >
                            Weather Forecast
                        </motion.h3>
                        <motion.p
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
                            className="text-white"
                        >
                            Small project that fetches the current weather as well as the forecast for the next day.
                        </motion.p>
                        <motion.p
                            initial={{
                                y: 10,
                                opacity: 0
                            }}
                            transition={{
                                delay: 2.5,
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
                            The goal of this project was to stay up-to-date with the React framework and further my knowledge on how to handle third-party APIs.
                        </motion.p>
                        <motion.p
                            initial={{
                                y: 10,
                                opacity: 0
                            }}
                            transition={{
                                delay: 3,
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
                            The main difficulties with this project were on how to use two different APIs and handle the data between them.
                        </motion.p>
                        <motion.div
                            initial={{
                                y: 10,
                                opacity: 0
                            }}
                            transition={{
                                delay: 3.5,
                                duration: 0.5
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            className="flex space-x-4 self-center md:self-start select-none pt-5 md:pt-8"
                        >
                            <a href="https://github.com/AndreMP97/weather-app" target="_blank" rel="noreferrer">
                                <button className="bg-white hover:bg-gray-400 text-inherit hover:text-white border border-transparent rounded-md px-2 py-1">
                                    <p className="font-semibold">Repository</p>
                                </button>
                            </a>
                            <a href="https://andremp97.github.io/weather-app/" target="_blank" rel="noreferrer">
                                <button className="bg-white hover:bg-gray-400 text-inherit hover:text-white border border-transparent rounded-md px-2 py-1">
                                    <p className="font-semibold">Live website</p>
                                </button>
                            </a>
                        </motion.div>
                    </div>
                </div>
                {/*Project 2*/}
                <div className="flex flex-col min-w-full justify-center
                xl:flex-row xl:justify-start">
                    <a href="https://github.com/AndreMP97/PESTA" target="_blank" rel="noreferrer" className="flex flex-col order-1 xl:order-2 xl:w-1/2 justify-start items-center">
                        <motion.img
                            initial={{
                                x: 50,
                                opacity: 0
                            }}
                            transition={{
                                delay: 1,
                                duration: 1
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            className="w-full md:w-11/12 lg:w-9/12 xl:w-full rounded-md"
                            src={PESTA}
                            alt="PESTA" />
                    </a>
                    <div className="flex flex-col w-full order-1 justify-center space-y-4 select-text self-center
                    md:w-11/12 md:space-y-6
                    lg:w-9/12
                    xl:w-1/2 xl:items-start xl:px-2 xl:pr-8">
                        <motion.h3
                            initial={{
                                y: -10,
                                opacity: 0
                            }}
                            transition={{
                                delay: 1,
                                duration: 1
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            className="text-white self-start mt-8 mb-2 md:mt-12 xl:mt-0 xl:mb-8"
                        >
                            Managment Platform
                        </motion.h3>
                        <motion.p
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
                            className="text-white"
                        >
                            This was a full-stack project done as part of my degree as a final evaluation.
                        </motion.p>
                        <motion.p
                            initial={{
                                y: 10,
                                opacity: 0
                            }}
                            transition={{
                                delay: 2.5,
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
                            The objectives were for companies to send their internship proposals,
                            for teachers to propose and manage projects,
                            for degree directors to manage the internships,
                            and for students to apply for any of the proposals.
                        </motion.p>
                        <motion.p
                            initial={{
                                y: 10,
                                opacity: 0
                            }}
                            transition={{
                                delay: 3,
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
                            To complete this project, I had to research and choose which were the best software languages and frameworks to achieve the proposed objectives.
                        </motion.p>
                        <motion.div
                            initial={{
                                y: 10,
                                opacity: 0
                            }}
                            transition={{
                                delay: 3.5,
                                duration: 0.5
                            }}
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            viewport={{
                                once: true
                            }}
                            className="flex space-x-4 self-center md:self-start select-none pt-5 md:pt-8"
                        >
                            <a href="https://github.com/AndreMP97/PESTA" target="_blank" rel="noreferrer">
                                <button className="bg-white hover:bg-gray-400 text-inherit hover:text-white border border-transparent rounded-md px-2 py-1">
                                    <p className="font-semibold">Repository</p>
                                </button>
                            </a>
                            <Link
                                to=""
                                className="bg-white hover:bg-gray-400 text-inherit hover:text-white border border-transparent rounded-md px-2 py-1"
                            >
                                <p className="font-semibold">Learn more</p>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}