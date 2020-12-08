import React, { useState } from 'react';
import dropDownIcon from '../assets/images/chevron-down.svg'
const Dropdown = ({ options, selected, onSelectedChange }) => {

    const [open, setOpen] = useState()

    const renderedOptions = options.map((option) => {

        if (option === selected) {
            return null;
        }
        return (
            <div
                className="bg-white p-2  hover:bg-purple-50 border-b-2 border-purple-100"
                onClick={() => { onSelectedChange(option) }}
            >
                {option}
            </div>
        )
    })
    return (
        <div
            className={`w-48 text-center m-2 mx-auto`}>
            <h1 className="text-lg font-semibold m-2">Filter By</h1>

            <div
                onClick={() => setOpen(!open)}
                className="flex flex-col"
            >
                <div className="bg-white p-2  border-b-2 border-purple-100 flex">
                    <h1 >{selected}</h1>
                    <img src={dropDownIcon} className="w-6 ml-auto mr-2" alt="down-arrow" />
                </div>
                <div className={`${!open ? 'hidden' : ''}`}>
                    {renderedOptions}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;