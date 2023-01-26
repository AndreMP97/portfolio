import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.div
            initial={{
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
                amount: 0.4
            }}
            className="flex h-24 w-5/6 justify-center items-center my-2 md:my-4">
            <a href="https://github.com/AndreMP97/portfolio" target="_blank" rel="noreferrer" className="">
                <div className="flex flex-col text-white hover:text-gray-400 space-y-4 md:space-y-6">
                    <h4 className="font-semibold">Designed and built by André Pacheco</h4>
                    <FaGithub className="h-6 w-auto" />
                </div>
            </a>
        </motion.div>
    )
}