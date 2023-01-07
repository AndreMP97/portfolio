import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, HomeIcon, UserIcon, CubeIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/portfolio.svg'
import { Link } from "react-router-dom";

const navigation = [
    { name: 'Home', href: '/', current: true, icon: <HomeIcon /> },
    { name: 'About', href: '/about', current: false, icon: <UserIcon /> },
    { name: 'Projects', href: '/projects', current: false, icon: <CubeIcon /> },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function handleClick(item) {
    for (let i = 0; i < navigation.length; i++) {
        if (navigation[i].name === item.name) {
            navigation[i].current = true;
        }
        else {
            navigation[i].current = false;
        }
    }
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-gray-800 sticky top-0">
            {({ open }) => (
                <>
                    <div className="px-2.5 sm:px-4 py-2.5 sm:py-4 container mx-auto">
                        <div className="relative h-12 flex flex-wrap items-center justify-between">
                            {/* Mobile */}
                            <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="absolute inset-y-0 left-0 flex flex-1 items-center sm:items-stretch">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="block h-8 w-auto lg:hidden"
                                        src={Logo}
                                        alt="Logo"
                                    />
                                    <img
                                        className="hidden h-8 w-auto lg:block"
                                        src={Logo}
                                        alt="Logo"
                                    />
                                </div>
                                <span className="self-center text-xl font-semibold text-white ml-2">Portfolio</span>
                            </div>
                            <div className="hidden sm:block">
                                <ul className="absolute inset-y-0 right-0 flex items-center space-x-4">
                                    {navigation.map((item) => (
                                        <li key={item.name}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' :
                                                    'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white',
                                                'px-3 py-2 rounded-md text-sm font-medium'
                                            )}
                                        >
                                            <Link className="flex" to={item.href} onClick={() => handleClick(item)}>
                                                <div className="w-5 h-6 mt-0.5 mr-1">{item.icon}</div>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/*Mobile*/}
                    <Disclosure.Panel className="sm:hidden">
                        <ul className="flex flex-col justify-center items-end space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="li"
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' :
                                            'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white',
                                        'px-3 py-2 rounded-md text-sm font-medium'
                                    )}
                                >
                                    <Link className="flex" to={item.href} onClick={() => handleClick(item)}>
                                        <div className="w-4 h-5 mt-0.5 mr-1">{item.icon}</div>
                                        {item.name}
                                    </Link>
                                </Disclosure.Button>
                            ))}
                        </ul>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}