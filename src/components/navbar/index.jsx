import { useState } from "react";
import { Bars3Icon, XMarkIcon, UserIcon, HomeIcon, CubeIcon, InboxIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
    { name: "Home", href: "#home", current: false, icon: <HomeIcon className="block h-6 w-6 mr-1 md:h-4 md:w-4 lg:h-6 lg:w-6" /> },
    { name: "About", href: "#about", current: false, icon: <UserIcon className="block h-6 w-6 mr-1 md:h-4 md:w-4 lg:h-6 lg:w-6" /> },
    { name: "Projects", href: "#projects", current: false, icon: <CubeIcon className="block h-6 w-6 mr-1 md:h-4 md:w-4 lg:h-6 lg:w-6" /> },
    { name: "Contact", href: "#contact", current: false, icon: <InboxIcon className="block h-6 w-6 mr-1 md:h-4 md:w-4 lg:h-6 lg:w-6" /> },
]

export default function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <motion.div
            initial={{
                y: -100,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            className="flex w-5/6 justify-between mt-20 md:mt-28"
        >
            <a href="#home" className="flex w-1/4" rel="noreferrer">
                <h2 className="self-center font-display text-white -rotate-12">AP</h2>
            </a>

            {/*Desktop*/}
            <div className="hidden md:flex w-2/4 justify-center items-center">
                <ul className="hidden md:inline-flex md:space-x-4 lg:space-x-6 bg-gray-700 border border-gray-600 rounded-full px-4 py-2">
                    {navigation.map((item) => (
                        <li key={item.name}
                            className={
                                item.current ?
                                    "text-white hover:text-gray-400 border-b-2 hover:border-gray-400 py-1 cursor-pointer capitalize"
                                    :
                                    "text-white hover:text-gray-400 cursor-pointer capitalize"
                            }
                        >
                            <a href={item.href} className="flex items-center">
                                {item.icon}
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <a href="https://drive.google.com/uc?export=download&id=1EDfXmMCBuh2VwYUhCVJdmFSGd-8FQpa_" className="hidden md:flex justify-end w-1/4" rel="noreferrer">
                <button
                    type="button"
                    className="inline-flex px-4 justify-center items-center rounded-full shadow-sm text-white bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500"
                >
                    <ArrowDownTrayIcon className="block h-10 w-10 mr-1 md:h-4 md:w-4 lg:h-6 lg:w-6" />
                    Resume
                </button>
            </a>

            {/* Mobile */}
            <div className="md:hidden flex z-40" onClick={() => setNav(!nav)}>
                {nav ? <XMarkIcon className="text-white block h-6 w-6" /> : <Bars3Icon className="text-white block h-6 w-6" />}
            </div>
            {nav && (
                <ul className="md:hidden flex flex-col h-auto w-full absolute left-0 justify-start items-center bg-gray-800 space-y-4">
                    {navigation.map((item) => (
                        <li key={item.name}
                            className="text-white capitalize"
                        >
                            <a href={item.href} onClick={() => setNav(!nav)} className="flex items-center">
                                {item.icon}
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <a href="https://drive.google.com/uc?export=download&id=1EDfXmMCBuh2VwYUhCVJdmFSGd-8FQpa_" rel="noreferrer">
                        <button
                            type="button"
                            className="inline-flex text-white px-2 py-2 capitalize bg-gray-700 rounded-md items-center"
                        >
                            <ArrowDownTrayIcon className="block h-6 w-6 mr-1" />
                            Resume
                        </button>
                    </a>
                </ul>
            )
            }
        </motion.div >
    )
}