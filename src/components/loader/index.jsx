import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";

export default function Loader() {
    const [text] = useTypewriter({
        words: ["AP"],
        typeSpeed: 750
    });

    return (
        <div className="h-screen bg-gray-900">
            <div className="container flex h-full justify-center items-center bg-gray-800 mx-auto">
                <motion.div
                    initial={{
                        opacity: 1
                    }}
                    animate={{
                        opacity: 0
                    }}
                    transition={{
                        delay: 2.5,
                        duration: 0.5
                    }}
                >
                    <h1 className="text-9xl font-display text-white -rotate-12">{text}</h1>
                </motion.div>
            </div>
        </div>
    )
}