import React from 'react'
import { useApp } from '../../context/AppContext';

const PageHeader = ({ title, icon}) => {
  const { toggleSidebar } = useApp()
    return (
      <div className="bg-blue-800 text-white p-3">
      <div className="flex items-center">
        <span className="mr-2 cursor-pointer" onClick={toggleSidebar}>
          {icon}
        </span>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </div>
      );
}

export default PageHeader


