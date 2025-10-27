
  
  const CustomIcon = ({ iconName, className }) => {
    const IconComponent = iconName;
    return IconComponent ? <IconComponent className={className} /> : null;
  };
  
  export default CustomIcon;
  