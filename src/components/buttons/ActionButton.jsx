import React from 'react'

const ActionButton = ({ icon, label, onClick, color = 'blue' }) => {

    // j'ai utilier cette variable pour faciliter le travaille avec les couleur du tailwind pour le moment on ai besoin just le bleu
    const  colorClasses = {
        blue: 'bg-blue-800 hover:bg-blue-700 text-white',
         primary: 'bg-blue-600 hover:bg-blue-700 text-white',
        secondary: 'bg-gray-600 hover:bg-gray-700 text-white',
        success: 'bg-green-600 hover:bg-green-700 text-white',
        danger: 'bg-red-600 hover:bg-red-700 text-white',
         warning: 'bg-yellow-500 hover:bg-yellow-600 text-white',
        info: 'bg-cyan-500 hover:bg-cyan-600 text-white',
    };
    
    return (
        <button className={`flex  items-center px-3 py-2 rounded ${colorClasses[color]}`}onClick={onClick}>
            {icon && <span className="mr-2">{icon}</span>}
             {label}
        </button>
    )
}

export default ActionButton