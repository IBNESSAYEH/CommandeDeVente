import { useParams } from 'react-router-dom'
import InfoField from '../components/display/InfoField'
import InfoSection from '../components/display/InfoSection'
import TabBar from '../components/navigation/TabBar'
import DataTable from '../components/tables/DataTable'
import ActionBar from '../components/layout/ActionBar'
import { FaFileInvoice, FaCalendarAlt, FaEuroSign, FaInfoCircle } from 'react-icons/fa'
import { useApp } from '../context/AppContext'

const ReferencesTabContent = () => (
  <div>
    <InfoSection title="Récapitulatif de la commande" icon={<FaInfoCircle />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border">
        <div>
           <InfoField label="Montant HT" value="55 000,00 €" icon={<FaEuroSign />} />
          <InfoField label="Taxes" value="0,00 €" icon={<FaEuroSign />} />
        </div>
        <div>
          <InfoField label="Montant facturé" value="55 000,00 €" icon={<FaEuroSign />} />
        </div>
      </div>
    </InfoSection>
    
    <DataTable />
  </div>
)

const AdresseTabContent = () => (
  <div>
    <InfoSection title="Adresse de facturation">
      <div className="border p-3 rounded">
         <p className="font-medium">SURCOUF</p>
        <p>139 Avenue Daumesnil</p>
         <p>75012 Paris</p>
        <p>France</p>
      </div>
    </InfoSection>
  </div>
)

const ComptabiliteTabContent = () => (
  <div>
    <InfoSection title="Informations comptables">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-3 rounded">
        <div>
          <InfoField label="Mode de paiement" value="Virement bancaire" />
           <InfoField label="Conditions" value="30 jours fin de mois" />
          <InfoField label="Échéance" value="31/10/2016" />
        </div>
        <div>
          <InfoField label="Compte bancaire" value="FR76 1234 5678 9123 4567 8912 345" />
          <InfoField label="N° TVA" value="FR12345678912" />
        </div>
      </div>
    </InfoSection>
  </div>
)

const CommunicationTabContent = () => (
  <div>
    <InfoSection title="Contacts client">
      <div className="border p-3 rounded">
        <InfoField label="Contact principal" value="Jean Dupont" />
         <InfoField label="Téléphone" value="+33 1 23 45 67 89" />
        <InfoField label="Email" value="j.dupont@surcouf.fr" />
      </div>
    </InfoSection>
  </div>
)

const SalesOrderPage = () => {
  const { activeTab } = useApp()
  const { id } = useParams() 

  const renderTabContent = () => {
    switch(activeTab) {
      case 'references': 
        return <ReferencesTabContent />
      case 'adresse': 
        return <AdresseTabContent />
      case 'comptabilite': 
        return <ComptabiliteTabContent />
      case 'communication': 
        return <CommunicationTabContent />
      default:
        return <div className="p-4">Sélectionnez un onglet pour afficher les informations</div>
    }
  }

  return (
    < >
    
      
      <ActionBar />
      
      <div className="p-4 bg-white rounded shadow">
        <InfoField label="Numéro de commande" value={id || 'SO008'} icon={<FaFileInvoice />} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border mt-2 p-2">
          <div>
            <InfoField label="Client" value="SURCOUF" />
             <InfoField label="Référence commande client" value="ref-client" />
          </div>
          <div>
            <InfoField label="Date de saisie" value="21/09/2016" icon={<FaCalendarAlt />} />
            <InfoField label="Devise" value="EUR" icon={<FaEuroSign />} />
          </div>
        </div>
      </div>
      
      <TabBar />
      
      <div className="p-4 bg-gray-100 flex-1 overflow-auto mt-2 rounded">
        {renderTabContent()}
      </div>
    </>
  )
}

export default SalesOrderPage