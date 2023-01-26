import Picture from "../../assets/foto.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

function verifyHeight() {
    let viewportHeight = window.innerHeight;
    if (viewportHeight < 720) {
        return "flex flex-col lg:flex-row h-[calc(100vh+80px)] w-5/6 mx-auto justify-center";
    }
    else if (viewportHeight > 1200) {
        return "flex flex-col lg:flex-row h-[1000px] w-5/6 mx-auto justify-center";
    }
    else {
        return "flex flex-col lg:flex-row h-screen w-5/6 mx-auto justify-center"
    }
}

export default function Hero() {
    const [text] = useTypewriter({
        words: ["I'm a Software Developer"],
        loop: true
    });

    return (
        <section id="home" className={verifyHeight()}>
            <div className="flex lg:h-full lg:w-2/3 order-2 lg:order-1 select-text">
                <div className="flex flex-col justify-start lg:justify-center items-start space-y-2 md:space-y-4">
                    <motion.h2
                        initial={{
                            y: -10,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1,
                            duration: 0.5
                        }}
                        className="text-white">
                        Hello,
                    </motion.h2>
                    <motion.h1
                        initial={{
                            y: 10,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1.5,
                            duration: 0.5
                        }}
                        className="text-white"
                    >
                        My name is André Pacheco
                    </motion.h1>
                    <motion.h3
                        initial={{
                            y: 10,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 2,
                            duration: 0.5
                        }}
                        className="text-white h-5 md:h-6"
                    >
                        {text}
                    </motion.h3>
                    <motion.h4
                        initial={{
                            y: 10,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 2.5,
                            duration: 0.5
                        }}
                        className="text-white lg:w-5/6 font-normal pt-4"
                    >
                        Passionate about web development and dedicated to creating high-quality, dynamic, and interactive websites.
                        Constantly learning new technologies to both improve my skills and stay current with the industry.
                        Always looking for new challenges to grow as a developer.
                    </motion.h4>
                    <motion.div
                        initial={{
                            y: 10,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1
                        }}
                        transition={{
                            delay: 3,
                            duration: 0.5
                        }}
                        className="inline-flex space-x-4 w-full justify-center items-center md:justify-start pt-6">
                        <a href="#contact" rel="noreferrer">
                            <button
                                type="button"
                                className="text-inherit bg-white hover:text-white hover:bg-gray-400 border border-transparent rounded-md px-4 py-2 font-semibold animate-pulse"
                            >
                                Hire me
                                <span className="sr-only">Hire me</span>
                            </button>
                        </a>
                        <a href="https://linkedin.com/in/andrempacheco97/" target="_blank" rel="noreferrer">
                            <FaLinkedin size={36} className="text-white hover:text-gray-400 border border-transparent" />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://github.com/AndreMP97/" target="_blank" rel="noreferrer">
                            <FaGithub size={36} className="text-white hover:text-gray-400 border border-transparent" />
                            <span className="sr-only">Github</span>
                        </a>
                    </motion.div>
                </div>
            </div>
            <motion.div
                initial={{
                    y: -200,
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1
                }}
                transition={{
                    delay: 0.5,
                    duration: 1
                }}
                className="flex flex-col lg:h-full lg:w-1/3 justify-center items-center order-1 lg:order-2"
            >
                <div className="flex relative justify-center items-center">
                    <div className="absolute border border-gray-400 lg:h-48 lg:w-48 xl:h-64 xl:w-64 rounded-full animate-ping" />
                    <div className="absolute border border-gray-700 lg:h-60 lg:w-60 xl:h-72 xl:w-72 rounded-full" />
                    <div className="absolute border border-gray-600 lg:h-64 lg:w-64 xl:h-80 xl:w-80 rounded-full animate-pulse" />
                    <div className="absolute border border-gray-500 h-36 w-36 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-96 xl:w-96 rounded-full animate-pulse" />
                    <img className="h-36 w-36 md:h-64 md:w-64 lg:h-60 lg:w-60 xl:h-72 xl:w-72 rounded-full" src={Picture} alt="Profile" />
                </div>
            </motion.div>
        </section>
    )
}