import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, HomeIcon, UserIcon, CubeIcon } from '@heroicons/react/24/outline';
import Logo from '../../assets/portfolio.svg';

const navigation = [
    { name: 'Home', href: '/', current: true, icon: <HomeIcon className='block h-10 w-10 mr-1 pt-0.5 md:h-5 md:w-5' /> },
    { name: 'About', href: '/about', current: false, icon: <UserIcon className='block h-10 w-10 mr-1 pt-0.5 md:h-5 md:w-5' /> },
    { name: 'Projects', href: '/projects', current: false, icon: <CubeIcon className='block h-10 w-10 mr-1 pt-0.5 md:h-5 md:w-5' /> },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
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
}

export default function Navbar() {
    let location = useLocation();
    handleLocation(location.pathname);

    const [nav, setNav] = useState(false);

    return (
        <div className='flex justify-between items-center w-full h-20 px-4 bg-gray-800'>
            <div className='flex ml-2'>
                <img
                    className='h-8 w-auto'
                    src={Logo}
                    alt='Logo'
                />
                <h1 className='self-center text-xl font-semibold text-white ml-2'>Portfolio</h1>
            </div>

            {/*Desktop*/}
            <ul className='hidden md:flex space-x-4 mr-2'>
                {navigation.map((item) => (
                    <li key={item.name}
                        className={classNames(
                            item.current ? 'bg-gray-900 text-white' :
                                'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white',
                            'px-4 py-2 rounded-md text-sm cursor-pointer capitalize font-medium'
                        )}
                    >
                        <Link className='flex' to={item.href}>
                            {item.icon}
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile */}

            <div className='sm:hidden z-10' onClick={() => setNav(!nav)}>
                {nav ? <XMarkIcon className='text-white block h-6 w-6' /> : <Bars3Icon className='text-white block h-6 w-6' />}
            </div>
            {nav && (
                <ul className='sm:hidden absolute top-0 left-0 flex flex-col justify-center items-center w-full h-screen backdrop-blur-3xl space-y-4'>
                    {navigation.map((item) => (
                        <li key={item.name}
                            className={classNames(
                                item.current ? 'text-white' :
                                    ' text-gray-300',
                                'px-4 py-6 text-4xl capitalize font-medium'
                            )}
                        >
                            <Link className='flex' to={item.href}>
                                {item.icon}
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}