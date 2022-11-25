import React from 'react';
import DurantaCategory from './DurantaCategory';

const Categories = () => {
    return (
        <div>
            <div className='w-3/4 mx-auto flex justify-start'>
                <h1 className='text-3xl'>All Categories</h1>
            </div>
           <DurantaCategory></DurantaCategory>
        </div>
    );
};

export default Categories;