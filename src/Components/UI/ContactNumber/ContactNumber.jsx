import { FaSquarePhone } from "react-icons/fa6";
import GeneralIcons from "@components/Icons/GeneralIcons/GeneralIcons";
import { FaPhone } from "react-icons/fa";

export const AnyContactNumber = ({ number = "", className = "", iconClass = "" }) => {
  return (
    <div className="flex items-center gap-2" >
      <span className={` ${iconClass}`}>
        <FaPhone />
      </span>
      <a className={`${className}`} href={`tel:+88${number}`}>
        {number}
      </a>
    </div>
  );
};



export const FixedNumbers = ({
  className ="",
}) => {
  return (
    <div className="flex items-center gap-2">
     
      <GeneralIcons icon={FaSquarePhone}/>
      <div className="flex gap-1 items-center">
        <a
          title="Director Eng. Asadul Islam"
          className={`hover:text-green-300 transition ${className}`}
          href="tel:+8801760998164"
        >
          01760-998164
        </a>
        <span className="text-orange-400 bold mb-1">|</span>
        <a
          title="Principal Eng. S.M. Mehedi Hassan"
          className={`hover:text-green-300 transition ${className}`}
          href="tel:+8801712371281"
        >
          01712-371281
        </a>
      </div>
    </div>
  );
};
