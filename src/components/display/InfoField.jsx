import React from 'react'

const InfoField = ({ label, value, icon }) => {
  return (
    
    <div className="flex mb-2 items-center">
       {icon && <span className="mr-1 text-gray-500">{icon}</span>}
       <div  className="mr-2 font-bold">{label}:</div>
        <div> {value}</div>
    </div>
  );
};

export default InfoField
