import React from 'react';
import {Outlet} from "react-router-dom";
import {BoltIcon, ChevronDownIcon, MagnifyingGlassIcon} from "@heroicons/react/16/solid";
import {menuData} from "../data/menuData";
import MenuItem from "./MenuItem";
import {projectData} from "../data/projectData";
import {organizeData} from "../data/organizeData";

const Sidebar = () => {


    return (
        <div className={'flex shadow-xl'}>
            <div className={'w-1/6 min-h-screen bg-gray-100'}>

                {/*Logo and Title*/}

                <div className={'p-6 h-24 flex items-center  border-b border-gray-200 '}>
                    <div>
                        <BoltIcon className={'w-14 bg-indigo-700 text-white p-2 rounded-full'}/>
                    </div>
                    <div className={'ml-2'}>
                        <div className={'font-bold'}>Title</div>
                        <div className={'text-sm text-gray-600'}>Description</div>
                    </div>
                    <div className={' ml-auto'}>
                        <ChevronDownIcon className={'w-6 text-gray-400'}/>
                    </div>
                </div>

                {/*Search Input*/}

                <div className={'flex p-6'}>
                    <MagnifyingGlassIcon className={'w-6 -mr-8 text-gray-400 z-10'}/>
                    <input
                        name={'search'}
                        placeholder={'Search'}
                        className={'w-full h-10 p-6 ml-2'}
                    />
                </div>

                {/*Links*/}

                <div className={'p-6 '}>
                    <div className={'text-sm hidden md:block   '}>MENU</div>

                    {menuData.map((item, index) => {

                        return (
                            <MenuItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                active={item.active}
                                link={item.link}
                            />
                        )
                    })}

                    <div className={'text-sm hidden md:block  uppercase mt-6'}>Projects</div>

                    {projectData.map((item, index) => {

                        return (
                            <MenuItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                active={item.active}
                                link={item.link}
                            />
                        )
                    })}

                    <div className={'text-sm hidden md:block  uppercase mt-6'}>Organize</div>

                    {organizeData.map((item, index) => {

                        return (
                            <MenuItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                active={item.active}
                                link={item.link}
                            />
                        )
                    })}

                </div>


            </div>

            <div className={'flex-1'}>
                <div className={'h-24  border-b border-gray-200'}></div>

                <div className={'p-6'}>
                    <Outlet/>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
