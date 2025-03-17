
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import PageHeader from './PageHeader'
import { MdMenu } from 'react-icons/md'
import { useApp } from '../../context/AppContext'

const Layout = () => {
  const { activeMenuItem, sidebarVisible, toggleSidebar } = useApp()
  
  const getPageTitle = () => {
    switch(activeMenuItem) {
      case 'commercial': return 'Commande de Vente / SO008'
      case 'achats': return 'Gestion des Achats'
       case 'dashboard': return 'Tableau de Bord'
      case 'users': return 'Utilisateurs'
      case 'params': return 'Paramètres'
      case 'access': return 'Gestion des Accès'
        case 'reports': return 'Rapports'
      case 'stats': return 'Statistiques'
      default: return 'Gestion Commerciale'
    }
  }

  return (
    <div className="flex h-screen overflow-hidden">
      {sidebarVisible && <Sidebar />}
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <PageHeader title={getPageTitle()} icon={<MdMenu />}onIconClick={toggleSidebar}/>
    
        <div className="flex-1 overflow-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout