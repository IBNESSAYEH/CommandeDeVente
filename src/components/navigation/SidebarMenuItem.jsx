import React from 'react'

const SidebarMenuItem = ({ icon, label, isActive, onClick }) => {
  return (
    <div className={`flex items-center p-2 cursor-pointer transition-colors ${
        isActive ? 'bg-gray-200 font-medium' : 'hover:bg-gray-100'}`}
      onClick={onClick}>
      {icon && <span className="mr-2 text-gray-600">{icon}</span>}
      <span>{label}</span>
    </div>
  );
};

export default SidebarMenuItem