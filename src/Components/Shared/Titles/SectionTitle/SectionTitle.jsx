import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className=" flex justify-center lg:flex-none mb-[60px] ">
            <h2 className="text-[#06a77e] text-center w-fit font-bold border-b-2 px-2 rounded-[5px] border-b-[#a5a5a5] text-[23px]  md:text-[25px] lg:text-[30px]">{title}</h2>
        </div>
    );
};

export default SectionTitle;