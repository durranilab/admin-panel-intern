import React from 'react';

const AnnouncementBar = () => {
    return (
        <div className={'p-8 rounded-l-2xl bg-gradient-to-r from-cyan-500 to-indigo-600'}>
            <div className={'text-white text-xl font-bold'}>
                Hi, there! ♫
            </div>
            <div className={'text-white '}>
                You've 24 requests in your queue.
            </div>
        </div>
    );
};

export default AnnouncementBar;
