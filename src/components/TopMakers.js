import React from 'react';
import Maker from './Maker';

const TopMakers = () => {
    return (
        <div className="  flex flex-col m-8 ">
            <h1 className="text-2xl md:text-left font-semibold mb-4">Top Makers</h1>
            <div className="bg-white p-4 md:p-8 border rounded-md">
                <>
                    <Maker />
                    <Maker />
                    <Maker />
                    <Maker />
                    <Maker />

                </>
            </div>
        </div>
    );
}

export default TopMakers;