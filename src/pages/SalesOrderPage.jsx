import React, { useState } from 'react'
import { FaEdit, FaEuroSign, FaInfoCircle } from "react-icons/fa"
import PageHeader from '../components/layout/PageHeader'
import ActionBar from '../components/layout/ActionBar'
import Sidebar from '../components/layout/Sidebar'
import InfoField from '../components/display/InfoField'
import InfoSection from '../components/display/InfoSection'

const SalesOrderPage = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('commercial');
  return (
    <>
    <Sidebar activeItem={activeMenuItem} onItemClick={setActiveMenuItem} />
    <PageHeader icon={<FaEdit />} title="Modifier"></PageHeader>
    <ActionBar></ActionBar>


    <InfoSection title="Récapitulatif de la commande" icon={<FaInfoCircle />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <InfoField label="Montant HT" value="55 000,00 €" icon={<FaEuroSign />} />
                    <InfoField label="Taxes" value="0,00 €" icon={<FaEuroSign />} />
                  </div>
                  <div>
                      <InfoField label="Montant facturé" value="55 000,00 €" icon={<FaEuroSign />} />
                  </div>
                </div>
              </InfoSection>
    </>
  )
}
export default SalesOrderPage