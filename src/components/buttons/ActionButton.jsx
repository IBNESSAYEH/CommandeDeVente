import React from 'react'

const ActionButton = ({ icon, label, onClick, color = 'blue' }) => {

    // j'ai utilier cette variable pour faciliter le travaille avec les couleur du tailwind pour le moment on ai besoin just le bleu
    const  colorClasses = {
        blue: 'bg-sky-800 hover:bg-blue-700 text-white',
    };
    
    return (
        <button className={`flex  items-center px-3 py-2 rounded ${colorClasses[color]}`}onClick={onClick}>
            {icon && <span className="mr-2">{icon}</span>}
             {label}
        </button>
    )
}

export default ActionButton