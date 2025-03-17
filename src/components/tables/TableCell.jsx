import React from 'react'

const TableCell = ({ children, align = 'left', icon }) => {
  const alignClasses = {
     left: 'text-left',
    center: 'text-center',
     right: 'text-right',
  };

  return (
    <td className={`p-2 border border-gray-300 ${alignClasses[align]}`}>
       <div className="flex items-center">
         {icon  && <span className="mr-1">{icon}</span>}
        <span>{children}</span>
      </div>
    </td>
  );
};

export default TableCell
