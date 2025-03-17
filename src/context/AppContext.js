import { createContext, useState, useContext } from 'react'
 
const AppContext = createContext()

export const useApp = () => useContext(AppContext)

// les noms des items du menu
const MENU_ITEMS = [
  { id: 'commercial', label: 'Gestion commerciale' },
   { id: 'achats', label: 'Gestion des achats' },
  { id: 'dashboard', label: 'Tableau de bord' },
   { id: 'users', label: 'Utilisateurs' },
  { id: 'params', label: 'Parametres' },
  { id: 'access', label: 'Gestion des accès' },
  { id: 'reports', label: 'Rapports' },
  { id: 'stats', label: 'Statistiques' }
]

const TABS = [
  { id: 'references', label: 'Références' },
  { id: 'adresse', label: 'Adresse' },
  { id: 'comptabilite', label: 'Comptabilité' },
  { id: 'communication', label: 'Communication' },
   { id: 'historique', label: 'Historique' },
  { id: 'notes', label: 'Notes' },
  { id: 'livraison', label: 'Livraison' },
  { id: 'flux', label: 'Flux de travail' }
]

export const AppProvider = ({ children }) => {

  const [activeMenuItem, setActiveMenuItem] = useState('commercial')
   const [activeTab, setActiveTab] = useState('references')
    const [sidebarVisible, setSidebarVisible] = useState(true) 
   const toggleSidebar = () => {
     setSidebarVisible(prev => !prev)
   }

  const value = {
    activeMenuItem,
    setActiveMenuItem,
    activeTab,
    setActiveTab,
    menuItems: MENU_ITEMS,
    tabs: TABS,
    sidebarVisible, 
    toggleSidebar
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}