import React, { useState } from 'react'
import { FaAddressCard, FaComments, FaEdit, FaEuroSign, FaFileInvoice, FaHistory, FaInfoCircle, FaStickyNote, FaTasks, FaTruck } from "react-icons/fa"
import PageHeader from '../components/layout/PageHeader'
import ActionBar from '../components/layout/ActionBar'
import Sidebar from '../components/layout/Sidebar'
import InfoField from '../components/display/InfoField'
import InfoSection from '../components/display/InfoSection'
import TabBar from '../components/navigation/TabBar'

const SalesOrderPage = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('commercial');
    const [activeTab, setActiveTab] = useState('references');

    const tabs = [
      { id:   'references', label: 'Références' },
      { id: 'adresse', label: 'Adresse' },
      {  id: 'comptabilite', label:  'Comptabilité'},
      { id:  'communication',  label: 'Communication' },
      { id:  'historique', label: 'Historique' },
      { id:  'notes',  label: 'Notes'},
      { id: 'livraison', label: 'Livraison' },
      { id: 'flux', label: 'Flux de travail' }
    ];
  return (
    <>
    <Sidebar activeItem={activeMenuItem} onItemClick={setActiveMenuItem} />
    <PageHeader icon={<FaEdit />} title="Modifier"></PageHeader>
    <ActionBar></ActionBar>

    <TabBar  tabs={tabs}  activeTab={activeTab}  onTabChange={setActiveTab}  />
    <InfoSection title="Récapitulatif de la commande" >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                      <InfoField label="Montant HT" value="55 000,00 €" />
                    <InfoField label="Taxes" value="0,00 €" />
                  </div>
                  <div>
                      <InfoField label="Montant facturé" value="55 000,00 €" />
                  </div>
                </div>
              </InfoSection>
    </>
  )
}
export default SalesOrderPage