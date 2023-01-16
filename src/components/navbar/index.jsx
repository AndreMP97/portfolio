import { useState } from "react";
import { Bars3Icon, XMarkIcon, UserIcon, BookOpenIcon, CubeIcon, InboxIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/portfolio.svg";

const navigation = [
    { name: "About", href: "#about", current: false, icon: <UserIcon className="block h-10 w-10 mr-1 pt-0.5 md:h-5 md:w-5" /> },
    { name: "Experience", href: "#skills", current: false, icon: <BookOpenIcon className="block h-10 w-10 mr-1 pt-0.5 md:h-5 md:w-5" /> },
    { name: "Projects", href: "#projects", current: false, icon: <CubeIcon className="block h-10 w-10 mr-1 pt-0.5 md:h-5 md:w-5" /> },
    { name: "Contact", href: "#contact", current: false, icon: <InboxIcon className="block h-10 w-10 mr-1 pt-0.5 md:h-5 md:w-5" /> },
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
        <nav className="flex shrink-0 justify-center items-center w-full h-20 bg-gray-900">
            <div className="flex w-5/6 justify-between">
                <div className="flex">
                    <img
                        className="h-8 w-auto"
                        src={Logo}
                        alt="Logo"
                    />
                    <h1 className="self-center text-xl font-semibold text-white pl-2">Portfolio</h1>
                </div>

                {/*Desktop*/}
                <ul className="hidden md:flex items-center space-x-8">
                    {navigation.map((item) => (
                        <li key={item.name}
                            className="text-white hover:text-gray-300 hover:scale-110 duration-500 text-sm cursor-pointer capitalize font-medium"
                        >
                            <a href={item.href} className="flex">
                                {item.icon}
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile */}
                <div className="md:hidden z-10" onClick={() => setNav(!nav)}>
                    {nav ? <XMarkIcon className="text-white block h-6 w-6" /> : <Bars3Icon className="text-white block h-6 w-6" />}
                </div>
                {nav && (
                    <ul className="md:hidden absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen backdrop-blur-3xl space-y-4">
                        {navigation.map((item) => (
                            <li key={item.name}
                                className= "text-white px-4 py-6 text-4xl capitalize font-medium"
                            >
                                <a href={item.href} className="flex">
                                    {item.icon}
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    )
}