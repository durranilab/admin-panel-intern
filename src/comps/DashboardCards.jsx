import React from 'react';
import {BookOpenIcon} from "@heroicons/react/24/outline";
import {ArrowTrendingUpIcon} from "@heroicons/react/16/solid";
import {menuData} from "../data/menuData";
import {projectData} from "../data/projectData";
import {organizeData} from "../data/organizeData";

const DashboardCards = ({title, icon, value}) => {
    return (
        <div className={'bg-gray-100 w-64 rounded-xl border overflow-auto'}>
            <div className={'bg-white rounded-b-xl p-4'}>
                <div className={'flex justify-between items-center '}>

                    <div className={'p-2 rounded-full border'}>
                        {icon}
                    </div>
                    <div className={'ml-2 font-bold'}>
                        {title}
                    </div>

                    <div className={'ml-auto text-gray-600'}>
                        ...
                    </div>


                </div>
                <div className={'mt-6 text-5xl '}>
                    {Number(value) + menuData.length + projectData.length + organizeData.length}
                </div>
            </div>
            <div className={'flex justify-between items-center p-1 text-sm py-2 '}>
                <div className={'flex ml-4 text-green-600 items-center'}>
                    <ArrowTrendingUpIcon className={'w-4'}/> 15%
                </div>

                <div className={'mr-4 text-gray-500'}>
                    Compared to yesterday.
                </div>
            </div>
        </div>
    );
};

export default DashboardCards;
