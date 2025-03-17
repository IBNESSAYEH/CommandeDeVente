import React from 'react'

const TableHeader = ({ children, align = 'left', icon }) => {
  const alignClasses = {
     left: 'text-left',
    center: 'text-center',
     right: 'text-right',
  };

  return (
    <th className={`p-2 border-gray-300 bg-gray-100 font-semibold ${alignClasses[align]}`}>
      <div className="flex items-center">
         {icon && <span className="mr-1">{icon}</span>}
        <span>{children}</span>
      </div>
    </th>
  );
};

export default TableHeader
