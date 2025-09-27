

const PeragraphText = ({peraText1, peraText2=""})=>{
    return(
        <div>
            <p className="text-gray-500 text-[16px]">{peraText1}</p>
            <p className="text-gray-500 text-[16px] ">{peraText2}</p>
            <p className="text-gray-500 text-[16px] ">{peraText2}</p>
        </div>
    )
};

export default PeragraphText;