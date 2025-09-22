

import {
    FaUniversity,
    FaSchool,
    FaGraduationCap,
    FaChalkboardTeacher,
    FaDesktop,
    FaFlask,
    FaUserGraduate,
    FaHandshake,
    FaBed,
    FaTrophy,
    FaDollarSign,
    FaFutbol,
    FaMedal,
  } from "react-icons/fa";
  
  const iconMapping = {
    FaUniversity,
    FaSchool,
    FaGraduationCap,
    FaChalkboardTeacher,
    FaDesktop,
    FaFlask,
    FaUserGraduate,
    FaHandshake,
    FaBed,
    FaTrophy,
    FaDollarSign,
    FaFutbol,
    FaMedal,
  };
  
  const CustomIcon = ({ iconName, className }) => {
    const IconComponent = iconMapping[iconName];
    return IconComponent ? <IconComponent className={className} /> : null;
  };
  
  export default CustomIcon;
  