
import { HomeIcon, UserIcon, BookOpenIcon, CubeIcon, InboxIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Home", href: "#home", current: false, icon: <HomeIcon className="block h-6 w-6 md:h-8 md:w-8" /> },
    { name: "About", href: "#about", current: false, icon: <UserIcon className="block h-6 w-6 md:h-8 md:w-8" /> },
    { name: "Experience", href: "#skills", current: false, icon: <BookOpenIcon className="block h-6 w-6 md:h-8 md:w-8" /> },
    { name: "Projects", href: "#projects", current: false, icon: <CubeIcon className="block h-6 w-6 md:h-8 md:w-8" /> },
    { name: "Contact", href: "#contact", current: false, icon: <InboxIcon className="block h-6 w-6 md:h-8 md:w-8" /> },
]

function checkCurrent(current) {
    for (let i = 0; i < navigation.length; i++) {
        if (navigation[i].name === current) {
            navigation[i].current = true;
        }
        else {
            navigation[i].current = false;
        }
    }
}
export default function Sidenav({ current }) {
    checkCurrent(current);

    return (
        <nav>
            <ul className="flex space-x-1 md:space-x-4">
                {navigation.map((item) => (
                    <li key={item.name}
                        className={
                            item.current ? 
                            "hidden" 
                            : 
                            "flex h-8 w-8 md:h-12 md:w-12 bg-white text-gray-900 justify-center items-center hover:scale-110 duration-500 text-sm cursor-pointer capitalize font-medium rounded-full"
                        }
                    >
                        <a href={item.href} className="flex">
                            {item.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}