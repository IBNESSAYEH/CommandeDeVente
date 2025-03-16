import React from 'react'
import { FaEdit } from "react-icons/fa"
import PageHeader from '../components/layout/PageHeader'
import ActionBar from '../components/layout/ActionBar'

const SalesOrderPage = () => {
  return (
    <>
    <PageHeader icon={<FaEdit />} title="Modifier"></PageHeader>
    <ActionBar></ActionBar>
    </>
  )
}
export default SalesOrderPage