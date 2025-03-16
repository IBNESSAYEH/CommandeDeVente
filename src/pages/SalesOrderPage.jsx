import React from 'react'
import ActionButton from '../components/buttons/ActionButton'
import { FaEdit } from "react-icons/fa"

const SalesOrderPage = () => {
  return (
    <>
       <ActionButton  icon={<FaEdit />} label="Modifier"  />
    </>
  )
}
export default SalesOrderPage