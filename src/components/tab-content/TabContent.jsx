import { FaInfoCircle, FaEuroSign, FaMapMarkerAlt, FaCalculator, FaCreditCard, FaPhone,FaEnvelope,FaHistory,FaStickyNote,FaTruck,FaTasks} from 'react-icons/fa';

  import InfoField from './InfoField';
  import DataTable from './DataTable';
  
  const TabContent = ({ activeTab }) => {
    const productHeaders = [
      { id: 'reference', label: 'Référence' },
       { id: 'description', label: 'Description' },
      { id: 'quantity', label: 'Quantité' },
        { id: 'price', label: 'Prix unitaire' },
      { id: 'total', label: 'Total' }
    ];
    
    const productData = [
      { 
        id: 1, 
        reference: 'PROD001', 
         description: 'Service de développement web', 
        quantity: 1, 
        price: '55 000,00 €', 
         total: '55 000,00 €' 
      }
    ];
  
    const renderTabContent = () => {
      switch(activeTab) {
        case 'references':
          return (
            <div>
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
              
              <DataTable headers={productHeaders} data={productData} keyField="id" />
            </div>
          );
        
        case 'adresse':
          return (
            <div>
              <InfoSection title="Adresse de facturation" icon={<FaMapMarkerAlt />}>
                <div className="border p-3 rounded">
                  <p className="font-medium">SURCOUF</p>
                  <p>139 Avenue Daumesnil</p>
                  <p>75012 Paris</p>
                  <p>France</p>
                </div>
              </InfoSection>
            </div>
          );
        
        case 'comptabilite':
          return (
            <div>
              <InfoSection title="Informations comptables" icon={<FaCalculator />}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border p-3 rounded">
                  <div>
                    <InfoField label="Mode de paiement" value="Virement bancaire" icon={<FaCreditCard />} />
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
          );
        
        case 'communication':
          return (
            <div>
              <InfoSection title="Contacts client" icon={<FaPhone />}>
                <div className="border p-3 rounded">
                  <InfoField label="Contact principal" value="Jean Dupont" />
                  <InfoField label="Téléphone" value="+33 1 23 45 67 89" icon={<FaPhone />} />
                  <InfoField label="Email" value="j.dupont@surcouf.fr" icon={<FaEnvelope />} />
                </div>
              </InfoSection>
            </div>
          );
        
        case 'historique':
          return (
            <div>
              <InfoSection title="Historique des actions" icon={<FaHistory />}>
                <div className="border p-3 rounded">
                  <div className="space-y-2">
                    <div className="flex justify-between border-b pb-1">
                      <span>Création</span>
                      <span className="text-gray-500">21/09/2016 à 10:45</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span>Validation</span>
                      <span className="text-gray-500">21/09/2016 à 11:30</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span>Envoi au client</span>
                      <span className="text-gray-500">21/09/2016 à 14:15</span>
                    </div>
                  </div>
                </div>
              </InfoSection>
            </div>
          );
        
        case 'notes':
          return (
            <div>
              <InfoSection title="Notes" icon={<FaStickyNote />}>
                <div className="border p-3 rounded">
                  <p className="italic text-gray-700 mb-2">Commande urgente - Client privilégié</p>
                  <textarea 
                    className="w-full border p-2 rounded" 
                    placeholder="Ajouter une note..."
                    rows="4"
                  ></textarea>
                </div>
              </InfoSection>
            </div>
          );
        
        case 'livraison':
          return (
            <div>
              <InfoSection title="Informations de livraison" icon={<FaTruck />}>
                <div className="border p-3 rounded">
                  <InfoField label="Adresse de livraison" value="139 Avenue Daumesnil, 75012 Paris" />
                  <InfoField label="Date prévue" value="30/09/2016" />
                  <InfoField label="Mode de livraison" value="Transporteur" />
                  <InfoField label="Instructions" value="Livraison au 3ème étage, ascenseur disponible" />
                </div>
              </InfoSection>
            </div>
          );
        
        case 'flux':
          return (
            <div>
              <InfoSection title="Flux de travail" icon={<FaTasks />}>
                <div className="border p-3 rounded">
                  <div className="flex items-center space-x-4 overflow-x-auto pb-2">
                    <div className="bg-green-100 text-green-800 py-1 px-3 rounded flex-shrink-0">
                      Création
                    </div>
                    <div className="bg-green-100 text-green-800 py-1 px-3 rounded flex-shrink-0">
                      Validation
                    </div>
                    <div className="bg-blue-100 text-blue-800 py-1 px-3 rounded flex-shrink-0">
                      En préparation
                    </div>
                    <div className="bg-gray-100 text-gray-800 py-1 px-3 rounded flex-shrink-0">
                      Livraison
                    </div>
                    <div className="bg-gray-100 text-gray-800 py-1 px-3 rounded flex-shrink-0">
                      Facturation
                    </div>
                  </div>
                </div>
              </InfoSection>
            </div>
          );
        
        default:
          return <div>Sélectionnez un onglet pour afficher les informations</div>;
      }
    };
  
    return <>{renderTabContent()}</>;
  };
  
  export default TabContent;