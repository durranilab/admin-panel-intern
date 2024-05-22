import React from 'react';
import {
    ArchiveBoxIcon,
    BookOpenIcon,
    EnvelopeIcon, HeartIcon,
    HomeIcon,
    MagnifyingGlassIcon, ShoppingBagIcon
} from "@heroicons/react/24/outline";
import {Link, Outlet} from "react-router-dom";

const NavBar = () => {


    const menuItems = [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'About',
            path: '/about',
        },
        {
            name: 'Contact',
            path: '/contact',
        },
        {
            name: 'Blog',
            path: '/blog',
        }
    ]


    return (
        <div>
            <div className={'flex gap-4 items-center justify-between px-24 p-4 bg-white shadow'}>

                <div>

                    <Link to={'/'} className={'text-2xl font-bold text-indigo-500 cursor-pointer'}>UX LAB </Link>

                </div>

                <div className={'flex gap-4 justify-between w-1/4 text-black'}>
                    {menuItems.map((item, index) => {
                        return (
                            <div key={index}
                                 className={'flex items-center gap-1  cursor-pointer'}>
                                <a href={item.path} className={''}>{item.name}</a>
                            </div>
                        )
                    })}
                </div>

                <div className={'flex gap-4'}>

                    <MagnifyingGlassIcon className={'w-6'}/>
                    <HeartIcon className={'w-6'}/>
                    <Link to={'/login'}> <ShoppingBagIcon className={'w-6'}/></Link>


                </div>

            </div>
            <Outlet/>
        </div>
    );
};

export default NavBar;
