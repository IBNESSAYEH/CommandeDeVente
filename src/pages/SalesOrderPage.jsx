import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa"
import PageHeader from '../components/layout/PageHeader'
import ActionBar from '../components/layout/ActionBar'
import Sidebar from '../components/layout/Sidebar'

const SalesOrderPage = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('commercial');
  return (
    <>
    <Sidebar activeItem={activeMenuItem} onItemClick={setActiveMenuItem} />
    <PageHeader icon={<FaEdit />} title="Modifier"></PageHeader>
    <ActionBar></ActionBar>
    </>
  )
}
export default SalesOrderPage