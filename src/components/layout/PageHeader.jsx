import React from 'react'

const PageHeader = ({ title, icon}) => {
    return (
        <div className="bg-blue-800 text-white p-3">
          <div className="flex items-center">
            {icon && <span className="mr-2"> {icon}</span>}
             <h1 className="text-2xl font-bold">{title} </h1>
          </div>
        </div>
      );
}

export default PageHeader


