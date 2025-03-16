import React from 'react'

const InfoSection = ({ title, icon, children }) => {
  return (
    <div className="mb-6">
       {title &&  (
        <div className="flex items-center mb-2">
            {icon &&   <span  className="mr-1 text-gray-600">{icon}</span>}
          <h6 className="text-sm font-semibold">{title}</h6>
        </div>
      )}
      <div> {children}</div>
    </div>
  );
}

export default InfoSection
