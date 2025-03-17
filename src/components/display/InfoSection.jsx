import React from 'react'

const InfoSection = ({ title, children }) => {
  return (
    <div className="mb-6 bg-gray-100 ">
       { title &&  (
        <div className="flex items-center mb-2">
            
          <h6 className="text-sm font-semibold text-blue-800">{title}</h6>
        </div>
      )}
      <div> {children}</div>
    </div>
  );
}

export default InfoSection
