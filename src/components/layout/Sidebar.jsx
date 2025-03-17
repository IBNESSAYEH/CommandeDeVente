import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { FaShoppingCart, FaChartLine, FaUsers, FaCog, FaFileAlt, FaChartBar } from 'react-icons/fa'
import { MdManageAccounts } from 'react-icons/md'
import SidebarMenuItem from '../navigation/SidebarMenuItem'
import { useApp } from '../../context/AppContext'
import { FaShop } from 'react-icons/fa6'

const Sidebar = () => {
  const { activeMenuItem, setActiveMenuItem, menuItems } = useApp()
  const location = useLocation()
  
  useEffect(() => {
    const path = location.pathname.split('/')[1]
    if (path && menuItems.some(item => item.id === path)) {
      setActiveMenuItem(path)
    }
  }, [location, setActiveMenuItem, menuItems])

  const getIcon = (id) => {
    const icons = {
      commercial: <FaShop />,
      achats: <FaShoppingCart />,
       dashboard: <FaChartLine />,
      users: <FaUsers />,
      params: <FaCog />,
        access: <MdManageAccounts />,
      reports: <FaFileAlt />,
      stats: <FaChartBar />
    }
    return icons[id] || null
  }

  const navItems = menuItems.slice(0, 5)
  const adminItems = menuItems.slice(5)

  const handleNavigate = (id) => {
    setActiveMenuItem(id)
  }

  return (
    <div className="w-64 bg-gray-50 h-screen border-r overflow-y-auto">
      <div className="p-3">
        <h5 className="text-sm font-semibold text-gray-500">NAVIGATION</h5>
      </div>
      
      <div>
        {navItems.map(item => (
          <Link to={`/${item.id}`} key={item.id}>
            <SidebarMenuItem icon={getIcon(item.id)} label={item.label}  isActive={activeMenuItem === item.id}  onClick={() => handleNavigate(item.id)} />
          </Link>
        ))}
      </div>
      
      <div className="p-3 mt-3">
        <h5 className="text-sm font-semibold text-gray-500">ADMINISTRATION</h5>
      </div>
      
      <div>
        {adminItems.map(item => (
          <Link to={`/${item.id}`} key={item.id}>
            <SidebarMenuItem  icon={getIcon(item.id)}  label={item.label} isActive={activeMenuItem === item.id} onClick={() => handleNavigate(item.id)} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
