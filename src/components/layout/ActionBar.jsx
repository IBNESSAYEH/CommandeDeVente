import React from 'react'
import ActionButton from '../buttons/ActionButton'
import { FaCopy, FaEdit, FaPlus, FaTrashAlt } from 'react-icons/fa'

const ActionBar = () => {
  return (
   
    <div className="p-2 bg-gray-100">
      <div className="flex space-x-2">

        <ActionButton icon={<FaEdit /> } label="Modifier"  />
        <ActionButton  icon={ <FaPlus />} label="Creer" />
        <ActionButton icon={<FaCopy />}  label="Dupliquer" />
        <ActionButton  icon={ <FaTrashAlt />} label="Supprimer" />

      </div>
    </div>
  );
}

export default ActionBar
