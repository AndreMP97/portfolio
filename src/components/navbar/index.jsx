import { useState } from "react";
import { Bars3Icon, XMarkIcon, UserIcon, HomeIcon, CubeIcon, InboxIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", href: "#home", current: true, icon: <HomeIcon className="block h-10 w-10 mr-1 md:h-4 md:w-4 lg:h-6 lg:w-6" /> },
    { name: "About", href: "#about", current: false, icon: <UserIcon className="block h-10 w-10 mr-1 md:h-4 md:w-4 lg:h-6 lg:w-6" /> },
    { name: "Projects", href: "#projects", current: false, icon: <CubeIcon className="block h-10 w-10 mr-1 md:h-4 md:w-4 lg:h-6 lg:w-6" /> },
    { name: "Contact", href: "#contact", current: false, icon: <InboxIcon className="block h-10 w-10 mr-1 md:h-4 md:w-4 lg:h-6 lg:w-6" /> },
]

/*function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

function handleLocation(href) {
    for (let i = 0; i < navigation.length; i++) {
        if (navigation[i].href === href) {
            navigation[i].current = true;
        }
        else {
            navigation[i].current = false;
        }
    }
}*/

export default function Navbar() {
    const [nav, setNav] = useState(false);

    return (
        <nav className="flex shrink-0 justify-center items-center h-20 w-full top-0 z-40">
            <div className="flex w-5/6 justify-between">
                <div className="flex">
                    <h1 className="self-center text-3xl font-display text-white -rotate-12">AP</h1>
                </div>

                {/*Desktop*/}
                <ul className="hidden md:inline-flex justify-center items-center md:space-x-4 lg:space-x-6 bg-gray-700 border border-gray-600 rounded-full px-4 py-2">
                    {navigation.map((item) => (
                        <li key={item.name}
                            className={
                                item.current ?
                                    "text-white hover:text-gray-400 border-b-2 hover:border-gray-400 py-1 text-xs lg:text-sm cursor-pointer capitalize font-semibold"
                                    :
                                    "text-white hover:text-gray-400 text-xs lg:text-sm cursor-pointer capitalize font-semibold"
                            }
                        >
                            <a href={item.href} className="flex items-center">
                                {item.icon}
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex">
                    <button
                        type="button"
                        className="inline-flex px-4 justify-center items-center text-xs lg:text-sm font-medium rounded-full shadow-sm text-white bg-gray-700 hover:bg-gray-600 border border-gray-600 hover:border-gray-500"
                    >
                        <ArrowDownTrayIcon className="block h-10 w-10 mr-1 md:h-4 md:w-4 lg:h-6 lg:w-6" />
                        Resume
                    </button>
                </div>

                {/* Mobile */}
                <div className="md:hidden z-40" onClick={() => setNav(!nav)}>
                    {nav ? <XMarkIcon className="text-white block h-6 w-6" /> : <Bars3Icon className="text-white block h-6 w-6" />}
                </div>
                {nav && (
                    <ul className="md:hidden absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen backdrop-blur-3xl space-y-4">
                        {navigation.map((item) => (
                            <li key={item.name}
                                className="text-white px-4 py-6 text-4xl capitalize font-medium"
                            >
                                <a href={item.href} onClick={() => setNav(!nav)} className="flex">
                                    {item.icon}
                                    {item.name}
                                </a>
                            </li>
                        ))}
                        <button
                            type="button"
                            className="inline-flex text-white px-4 py-6 text-2xl capitalize font-medium bg-gray-900 rounded-md"
                        >
                            <ArrowDownTrayIcon className="block h-10 w-10 mr-1" />
                            Resume
                        </button>
                    </ul>
                )}
            </div>
        </nav>
    )
}