import React from 'react'

const InfoField = ({ label, value }) => {
  return (

    <div className="flex mb-2 items-center">

       <div  className="mr-2 font-bold">{label}:</div>
        <div> {value}</div>
    </div>
  );
};

export default InfoField
