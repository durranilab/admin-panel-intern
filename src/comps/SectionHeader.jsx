import React from 'react';

const SectionHeader = ({title}) => {
    return (
        <div className={'flex justify-between py-12 px-24 items-center'}>


            <div className={'text-4xl font-bold uppercase'}>{title}</div>

            <div>

                <button className={'mt-4 border-2 border-indigo-600 text-indigo-500 px-12 py-4 rounded'}>See More</button>
            </div>

        </div>
    );
};

export default SectionHeader;
