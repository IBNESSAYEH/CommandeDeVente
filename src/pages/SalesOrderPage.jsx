import React from 'react'
import ActionButton from '../components/buttons/ActionButton'
import { FaEdit } from "react-icons/fa"
import PageHeader from '../components/layout/PageHeader'

const SalesOrderPage = () => {
  return (
    <>
    <PageHeader icon={<FaEdit />} title="Modifier"></PageHeader>
       <ActionButton  icon={<FaEdit />} label="Modifier"  />
    </>
  )
}
export default SalesOrderPage