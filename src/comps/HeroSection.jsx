import React from 'react';
import jbl from '../assets/jbl.png'

const HeroSection = () => {
    return (
        <div className={'flex bg-gray-100 py-24 px-24 '}>

            <div className={'flex  flex-col  gap-8 flex-1'}>

                <div className={'text-8xl font-bold'}>Sound-pro <br/> <span
                    className={'text-indigo-500'}>TWS</span> Alr1
                </div>

                <div className={'text-sm text-gray-600'}>
                    lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua ut enim ad minim veniam
                    lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua ut enim ad minim veniam
                </div>

                <div className={'flex gap-4'}>

                    <button className={'mt-4 bg-indigo-500 text-white px-12 py-4 rounded'}>Shop Now</button>

                    <button className={'mt-4 border-2 border-indigo-600 text-indigo-500 px-12 py-4 rounded'}>See More
                    </button>

                </div>

            </div>

            <div className={'flex-1'}>
                <img src={jbl} alt={''}/>
            </div>


        </div>
    );
};

export default HeroSection;
