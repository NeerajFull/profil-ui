
import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ percentage }) => {
    return (
        <div style={{ width: 150, height: 150 }}>
            <CircularProgressbarWithChildren value={percentage}>

                <div className='text-white text-sm flex flex-col'>
                    <div className='mx-auto text-4xl'> <strong>{percentage}%</strong> <br /></div>
                    <div className='mx-auto'>
                        Goal
                    </div>
                    <div className='mx-auto'>
                        Completed
                    </div>
                </div>

            </CircularProgressbarWithChildren>
        </div>
    );
};

export default CircularProgressBar;
