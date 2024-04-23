import React from 'react';

const MenuItem = ({icon, title, active, link}) => {
    return (
        <div className={` m-1 p-2 rounded-xl flex items-center gap-2 text-gray-600 cursor-pointer hover:bg-purple-200 ${active ? 'bg-purple-100 text-purple-700' : ''}`}>
            <div className={'w-6'}>
                {icon}
            </div>
            <div className={'hidden md:block text-lg'}>
                {title}
            </div>
        </div>
    );
};

export default MenuItem;
