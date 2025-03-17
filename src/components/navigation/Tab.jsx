import React from 'react'

const Tab = ({ label, isActive, onClick }) => {
  return (
    <div className={`p-2 cursor-pointer flex items-center ${isActive ?   'border-b-2 bg-neutral-300 font-medium'  : 'bg-gray-50 hover:bg-gray-100 text-gray-500'}`} onClick={onClick}>

      {label}
    </div>
  );
};

export default Tab
