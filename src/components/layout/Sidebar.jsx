import React from 'react';
import SidebarMenuItem from '../navigation/SidebarMenuItem';
import { FaShoppingBag, FaShoppingCart, FaChartBar, FaUsers, FaCog, FaLock, FaFileAlt, FaChartPie, FaChartLine } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import { MdManageAccounts } from 'react-icons/md';

const Sidebar = ({activeItem,  onItemClick }) => {

  const menuItems = [

    { id: 'commercial', icon: <FaShop />,  label: 'Gestion commerciale' },
     { id: 'achats', icon: <FaShoppingCart />, label: 'gestion des achats' },
    { id: 'dashboard', icon: <FaChartLine />, label: 'Tableau de bord' },
    { id: 'users', icon: <FaUsers />,  label: 'utilisateurs' },
     { id: 'params', icon: <FaCog />, label: 'Parametres' },

    { id: 'access', icon: <MdManageAccounts />, label: 'Gestion des accès' },
    { id: 'reports', icon: <FaFileAlt />,  label: 'Rapports' },
    { id: 'stats', icon: <FaChartBar />, label: 'Statistiques' }
  ];

  return (
    <div className="w-64 bg-gray-50 h-screen border-r">
      <div className="p-3">
        <h5 className="text-sm font-semibold text-gray-500">NAVIGATION</h5>
      </div>
      <div>
        {/* menuItems.slice(0, 5) pour mapper juste sur les 5 preemier item pour la prtie navigation */}
        {menuItems.slice(0, 5).map(item => (<SidebarMenuItem key= {item.id} icon ={item.icon} label = {item.label}  isActive={activeItem === item.id}  onClick={() => onItemClick(item.id)}/>))}
      </div>
      <div className="p-3 mt-3">
        <h5 className="text-sm font-semibold text-gray-500">ADMINISTRATION</h5>
      </div>
      <div>
                {/* menuItems.slice( 5) pour mapper juste sur les  dernier item pour la prtie administarion */}
        {menuItems.slice(5).map(item => (<SidebarMenuItem  key ={item.id} icon= {item.icon}  label={item.label} isActive ={activeItem === item.id} onClick={() => onItemClick(item.id)} />))}
      </div>
    </div>
  );
};

export default Sidebar;