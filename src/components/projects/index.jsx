import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WEATHER from "../../assets/weather.jpg";
import PESTA from "../../assets/PESTA.png";

export default function Projects() {
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
                    className="text-white border-b-4 border-gray-600 md:py-1"
                >
                    Projects
                </motion.h1>
            </div>
            <div className="flex lg:flex-col h-full mt-4 text-justify select-text overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-500 lg:overflow-hidden lg:snap-none">
                {/* Project 1 */}
                <div className="flex flex-col lg:flex-row lg:h-1/2 min-w-full justify-center lg:justify-start bg-inherit space-y-4 lg:space-y-0 lg:space-x-4 snap-start lg:snap-none">
                    <a href="https://andremp97.github.io/weather-app/" target="_blank" rel="noreferrer" className="flex flex-col order-1 lg:w-1/2 justify-center items-center">
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
                            className="w-11/12 rounded-md"
                            src={WEATHER}
                            alt="Weather APP"
                        />
                    </a>
                    <div className="flex flex-col order-2 px-2 lg:w-1/2 md:justify-center lg:items-start space-y-2">
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
                            className="text-white self-start"
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
                            className="flex space-x-2 self-end"
                        >
                            <a href="https://github.com/AndreMP97/weather-app" target="_blank" rel="noreferrer">
                                <button className="bg-white hover:bg-gray-400 text-inherit hover:text-white border border-transparent rounded-md px-1 py-1">
                                    <p className="font-semibold">Repository</p>
                                </button>
                            </a>
                            <a href="https://andremp97.github.io/weather-app/" target="_blank" rel="noreferrer">
                                <button className="bg-white hover:bg-gray-400 text-inherit hover:text-white border border-transparent rounded-md px-1 py-1">
                                    <p className="font-semibold">Live website</p>
                                </button>
                            </a>
                        </motion.div>
                    </div>
                </div>
                {/*Project 2*/}
                <div className="flex flex-col lg:flex-row lg:h-1/2 min-w-full justify-center lg:justify-start bg-inherit space-y-4 lg:space-y-0 lg:space-x-4 snap-start lg:snap-none">
                    <a href="https://github.com/AndreMP97/PESTA" target="_blank" rel="noreferrer" className="flex flex-col order-1 lg:order-2 lg:w-1/3 2xl:w-1/2 justify-center items-center">
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
                            className="w-7/12 md:w-11/12 2xl:w-8/12 rounded-md"
                            src={PESTA}
                            alt="PESTA" />
                    </a>
                    <div className="flex flex-col px-2 order-2 lg:order-1 lg:w-2/3 2xl:w-1/2 md:justify-center items-start space-y-2">
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
                            className="text-white self-start"
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
                            className="flex space-x-2 self-end items-center"
                        >
                            <a href="https://github.com/AndreMP97/PESTA" target="_blank" rel="noreferrer">
                                <button className="bg-white hover:bg-gray-400 text-inherit hover:text-white border border-transparent rounded-md px-1 py-1">
                                    <p className="font-semibold">Repository</p>
                                </button>
                            </a>
                            <Link
                                to=""
                                className="bg-white hover:bg-gray-400 text-inherit hover:text-white border border-transparent rounded-md px-1 py-1"
                            >
                                <p className="font-semibold">Learn more</p>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}