
import React from 'react';

const SubTitle = ({subTitle, className = ""}) => {
    return (
        <div>
             <h3 className={`${className} text-[20px] font-semibold text-[#122436]`} >
              {subTitle}
            </h3>
        </div>
    );
};

export default SubTitle;